import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Video1 from "../../assets/Videos/Video1.mp4";
import Video2 from "../../assets/Videos/Video2.mp4";
import Video3 from "../../assets/Videos/Video3.mp4";
import Video4 from "../../assets/Videos/Video4.mp4";
import Video5 from "../../assets/Videos/Video5.mp4";
import Video6 from "../../assets/Videos/Video6.mp4";
import Video7 from "../../assets/Videos/Video7.mp4";
import Video8 from "../../assets/Videos/Video8.mp4";
import Video9 from "../../assets/Videos/Video9.mp4";
import Video10 from "../../assets/Videos/Video10.mp4";
import Video11 from "../../assets/Videos/Video11.mp4";
import Video12 from "../../assets/Videos/Video12.mp4";
import ReactPlayer from "react-player";
import { Play, Pause } from "lucide-react";

function WorkSliderPage({ hstart, setHstart }) {
  const videos = [
    Video1,
    Video2,
    Video3,
    Video4,
    Video5,
    Video6,
    Video7,
    Video8,
    Video9,
    Video10,
    Video11,
    Video12,
  ];
  const [currentVideo, setCurrentVideo] = useState(Video1);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);
  const minimapRef = useRef(null);

  useGSAP(() => {
    gsap.to(".Container", {
      scale: 1,
      borderRadius: "0%",
      scrollTrigger: {
        trigger: ".Container",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
        onLeave: () => setHstart(true),
        onEnterBack: () => setHstart(false),
      },
    });
  }, []);

  useEffect(() => {
    const updateIndicator = (index) => {
      if (indicatorRef.current && itemsRef.current[index]) {
        const itemHeight = itemsRef.current[index].clientHeight;
        gsap.to(indicatorRef.current, {
          y: index * itemHeight,
          duration: 0.2,
          ease: "power2.out",
        });

        const minimap = minimapRef.current;
        if (minimap) {
          const itemOffsetTop = itemsRef.current[index].offsetTop;
          const itemBottom = itemOffsetTop + itemHeight;
          if (itemBottom > minimap.scrollTop + minimap.clientHeight) {
            minimap.scrollTop = itemBottom - minimap.clientHeight;
          } else if (itemOffsetTop < minimap.scrollTop) {
            minimap.scrollTop = itemOffsetTop;
          }
        }
      }
    };

    itemsRef.current.forEach((item, index) => {
      item.addEventListener("click", () => {
        setCurrentVideo(videos[index]);
        updateIndicator(index);
        setPlaying(true);
        setMuted(false);
      });
    });

    const handleResize = () => {
      updateIndicator(videos.indexOf(currentVideo));
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [videos, currentVideo]);

  const togglePlayPause = () => {
    setPlaying((prev) => {
      const newPlayingState = !prev;
      setMuted(!newPlayingState);
      return newPlayingState;
    });
  };

  return (
    <div className="workpage h-[90vh] md:h-[110vh] w-full flex items-start justify-center bg-[#D42A2A]">
      <div className="Container relative overflow-hidden bg-black origin-top h-full w-full scale-[0.65]">
        <div
          className="image-preview video-player absolute top-[40%] md:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[55%] w-[60%]  md:h-[75%] md:w-[45%] lg:w-[27%] cursor-pointer"
          onClick={togglePlayPause}
        >
          <ReactPlayer
            url={currentVideo}
            controls={false}
            playing={playing}
            muted={muted}
            loop
            autoPlay
            width="100%"
            height="100%"
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            {playing ? (
              <Pause className="text-white w-16 h-16" />
            ) : (
              <Play className="text-white w-16 h-16" />
            )}
          </div>
        </div>

        <div
          className="minimap absolute bottom-[5%] right-[50%] translate-x-[50%] md:right-[6vw]  md:translate-x-[0]  md:top-[50%] md:translate-y-[-50%]  w-[80%] md:w-[5%] h-[15%] md:h-[60%] overflow-x-auto overflow-y-hidden md:overflow-y-auto"
          ref={minimapRef}
        >
          <div
            ref={indicatorRef}
            className="indicator hidden md:flex absolute top-0 left-0 w-full h-24 bg-red-500 rounded-md transition-all duration-300"
          ></div>

          <div className="items relative h-full w-full flex md:flex-col   md:gap-0 ">
            {videos.map((elem, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="item shrink-0 w-16 md:w-full h-12 md:h-24 px-2 md:px-1 md:py-2 cursor-pointer"
              >
                <ReactPlayer
                  url={elem}
                  controls={false}
                  playing={false}
                  muted
                  loop
                  autoPlay
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSliderPage;

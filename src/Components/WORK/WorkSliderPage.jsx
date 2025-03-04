import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Play, Pause } from "lucide-react";

function WorkSliderPage({ hstart, setHstart }) {
  const videos = [
    "https://youtube.com/shorts/Mz0OdAQuyF8?si=8rnJt0QzEl0MXvsb",
    "https://youtube.com/shorts/UYNZ8zHgAKg?si=aWy4FEbidV2oDI1u",
    "https://youtube.com/shorts/VblPKIT1FGk?si=tcCPKMU-rDmYV-3h",
    "https://youtube.com/shorts/HqhwY-DFV-g?si=Uo01DUlqiUABfyVS",
    "https://youtube.com/shorts/ghgQhPAoPrs?si=9K5MRj6j5c0TD8RT",
    "https://youtube.com/shorts/ikC-5DqzWO0?si=8swu9sPtMenI1mAy",
    "https://youtube.com/shorts/2Dm3lxTOLcs?si=noJ7f_PiWqRBMRVS",
    "https://youtube.com/shorts/Ps37G0CNvBk?si=5fJobsA2n0PWHCXl",
    "https://youtube.com/shorts/7fnxOPrTn90?si=t2sPSDDc7j6ml5HB",
    "https://youtube.com/shorts/IEooX_pzPkQ?si=Hxq0hDOQTXwmKKvp",
    "https://youtube.com/shorts/d1J8KlwE428?si=WhfPQ5x06dzgSqJ_",
  ];

  const getThumbnailUrl = (videoUrl) => {
    const videoId = videoUrl.split("/shorts/")[1]?.split("?")[0];
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`; // Medium quality thumbnail
  };

  const [currentVideo, setCurrentVideo] = useState(videos[0]);
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

  const getThumbnail = (url) => {
    const match = url.match(/(?:\/|v=)([a-zA-Z0-9_-]{11})/);
    return match
      ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`
      : "";
  };

  return (
    <div className="workpage worksliding h-[90vh] md:h-[110vh] w-full flex items-start justify-center bg-[#D42A2A]">
      <div className="Container relative overflow-hidden bg-black origin-top h-full w-full scale-[0.65]">
        <div className="image-preview video-player absolute top-[40%] md:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[55%] w-[60%]  md:h-[75%] md:w-[45%] lg:w-[27%] cursor-pointer">
          <a
            className="inline-block  video-player h-full w-[100%] px-5 relative overflow-hidden select-none cursor-pointer"
            href={currentVideo}
            target="_blank"
          >
            <img
              src={getThumbnail(currentVideo)}
              alt="Video Thumbnail"
              className="w-full h-[80%] object-cover"
            />
          </a>
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
                <img
                  src={getThumbnailUrl(elem)}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover rounded-md"
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

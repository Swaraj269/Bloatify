import { useGSAP } from "@gsap/react";
import gsap, { Expo } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Video1 from "../assets/Videos/Video1.mp4";
import Video2 from "../assets/Videos/Video2.mp4";
import Video3 from "../assets/Videos/Video3.mp4";
import Video4 from "../assets/Videos/Video4.mp4";
import Video5 from "../assets/Videos/Video5.mp4";
import Video6 from "../assets/Videos/Video6.mp4";
import ReactPlayer from "react-player";
import { Play, Pause } from "lucide-react";
import { motion } from "motion/react";

function VideoSlider({ setHstart, hstart }) {
  useGSAP(() => {
    gsap.to(".Container", {
      scale: 1,
      borderRadius: "0%",
      scrollTrigger: {
        trigger: ".Container",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
        onLeave: function () {
          setHstart(true);
        },
        onEnterBack: function () {
          setHstart(false);
        },
      },
    });
  });

  const videos = [
    { src: Video6, title: "Video 6" },
    { src: Video5, title: "Video 5" },
    { src: Video4, title: "Video 4" },
    { src: Video3, title: "Video 3" },
    { src: Video2, title: "Video 2" },
    { src: Video1, title: "Intro Video" },
  ];

  const sliderRef = useRef(null);
  const playerRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (sliderRef.current) {
      initializeCards();
    }
  }, [sliderRef]);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const slider = sliderRef.current;
    const cards = Array.from(slider.querySelectorAll(".card"));
    const lastCard = cards.pop();

    gsap.to(lastCard, {
      y: "+=105%",
      duration: 0.95,
      ease: "power3.inOut",
      onStart: () => {
        setTimeout(() => {
          slider.prepend(lastCard);
          initializeCards();
          setTimeout(() => {
            setIsAnimating(false);
          }, 300);
        }, 300);
      },
    });
  };

  const initializeCards = () => {
    const cards = Array.from(sliderRef.current.querySelectorAll(".card"));
    gsap.to(cards, {
      y: (i) => 0 + 9 * i + "%",
      z: (i) => 15 * i,
      duration: 1,
      ease: "power3.out",
      stagger: -0.1,
    });
  };

  const toggleAudio = (index) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  return (
    <div className="workpage h-[120vh] lg:h-[150vh] w-full flex items-start justify-center bg-[#D42A2A]">
      <div
        onClick={handleClick}
        className="Container relative overflow-hidden bg-black origin-top h-full w-full scale-[0.65]"
      >
        <div className="textdiv pl-[4.6vw] flex flex-col justify-center sticky h-[20%] w-full   lg:h-[60%] left-0 top-[13%] lg:top-[50%] translate-y-[-50%] lg:w-[35%]">
          <div className="heading">
            <h1 className=" text-[5vw] md:text-[3.5vw] lg:text-3xl text-white overflow-hidden leading-[1.3] font-[Sregular] ">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 1.5,
                  ease: Expo.easeOut,
                }}
                className="inline-block "
              >
                More Than Videos — We
              </motion.span>
            </h1>
            <h1 className="text-[5vw] md:text-[3.5vw] lg:text-3xl text-white overflow-hidden leading-[1.3] font-[Sregular] ">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 1.5,
                  ease: Expo.easeOut,
                }}
                className="inline-block "
              >
                Build Legacies.
              </motion.span>
            </h1>
          </div>
          <div className="subheading mt-4">
            <h1 className="text-[3.5vw] md:text-[2.5vw]  lg:text-2xl text-white overflow-hidden leading-[1.3] font-[Slight] ">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 1.5,
                  ease: Expo.easeOut,
                }}
                className="inline-block "
              >
                Crafting Visuals That Captivate
              </motion.span>
            </h1>
            <h1 className="text-[3.5vw]  md:text-[2.5vw] lg:text-2xl text-white overflow-hidden leading-[1.3] font-[Slight] ">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 1.5,
                  ease: Expo.easeOut,
                }}
                className="inline-block "
              >
                & Convert.
              </motion.span>
            </h1>
          </div>
        </div>
        <div
          ref={sliderRef}
          className="slider absolute top-[4vh] perspective-[600px] perspective-origin-[50%_100%] text-white w-full h-full overflow-hidden"
        >
          {videos.map((elem, index) => (
            <div
              key={index}
              className="card absolute overflow-hidden top-[45%] lg:top-[32%] left-[50%] flex flex-col h-[40%] w-[65%] md:h-[40%] md:w-[50%] lg:h-[50%] lg:w-[25%]"
            >
              <div
                className="video-player h-full w-full relative overflow-hidden cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAudio(index);
                }}
              >
                <ReactPlayer
                  ref={(ref) => (playerRefs.current[index] = ref)}
                  url={elem.src}
                  controls={false}
                  playing
                  muted={playingIndex !== index}
                  loop={true}
                  width="100%"
                  height="100%"
                />
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  {playingIndex === index ? (
                    <Pause size={60} className="text-white opacity-90" />
                  ) : (
                    <Play size={60} className="text-white opacity-90" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoSlider;

import { useGSAP } from "@gsap/react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "motion/react";
import React from "react";
import VideoCard from "./VideoCard";
import Video1 from "../assets/Videos/Video1.mp4";
import Video2 from "../assets/Videos/Video2.mp4";
import Video3 from "../assets/Videos/Video3.mp4";
import Video4 from "../assets/Videos/Video4.mp4";
import Video5 from "../assets/Videos/Video5.mp4";
import Video6 from "../assets/Videos/Video6.mp4";
gsap.registerPlugin(ScrollTrigger);

function Horizontal({ setHstart, hstart }) {
  useGSAP(() => {
    gsap.to(".HorizontalScroll", {
      scale: 1,
      borderRadius: "0%",
      scrollTrigger: {
        trigger: ".HorizontalScroll",
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
    gsap.to(".hsCover", {
      x: "-56%",
      scrollTrigger: {
        trigger: ".workpage",
        pin: true,
        start: "top 0",
        end: "top -200%",
        scrub: true,
      },
    });
  });
  return (
    <div className="workpage h-screen w-full flex items-start justify-center bg-[#D42A2A]">
      <div className="HorizontalScroll overflow-hidden flex rounded-xl bg-black origin-top h-full w-full scale-[0.65] ">
        <div className="textpart h-full flex items-center pl-[5vw] w-[33vw] bg-black ">
          <div className="textcontent">
            <div className="textheading text-white ">
              <h1 className="text-[1.8vw] overflow-hidden leading-[1] font-[Sregular] ">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1.5, ease: Expo.easeOut }}
                  className="inline-block "
                >
                  More Than Videos — We
                </motion.span>
              </h1>
              <h1 className="text-[1.8vw] overflow-hidden font-[Sregular] ">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1.5, ease: Expo.easeOut }}
                  className="inline-block "
                >
                  Build Legacies.
                </motion.span>
              </h1>
            </div>
            <div className="textsubheading text-white mt-3 ">
              <h2 className="text-[1.2vw] overflow-hidden leading-[1] font-[Slight] ">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1.5, ease: Expo.easeOut }}
                  className="inline-block "
                >
                  Crafting Visuals That Captivate
                </motion.span>
              </h2>
              <h2 className="text-[1.2vw] overflow-hidden font-[Slight] ">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1.5, ease: Expo.easeOut }}
                  className="inline-block "
                >
                  & Convert.
                </motion.span>
              </h2>
            </div>
          </div>
        </div>
        <div className="hspart h-full overflow-hidden w-[67vw]  ">
          <div className="hsCover pl-[5vw] h-full w-[200vw] bg-black items-center gap-28 flex ">
            <VideoCard unique="opacity-100" Videosrc={Video1} />
            <VideoCard
              unique={`${
                hstart ? "opacity-100" : "opacity-0"
              } transition-opacity duration-600 ease-out  `}
              Videosrc={Video2}
            />
            <VideoCard
              unique={`${
                hstart ? "opacity-100" : "opacity-0"
              } transition-opacity duration-600 ease-out  `}
              Videosrc={Video3}
            />
            <VideoCard
              unique={`${
                hstart ? "opacity-100" : "opacity-0"
              } transition-opacity duration-600 ease-out  `}
              Videosrc={Video4}
            />
            <VideoCard
              unique={`${
                hstart ? "opacity-100" : "opacity-0"
              } transition-opacity duration-600 ease-out  `}
              Videosrc={Video5}
            />
            <VideoCard
              unique={`${
                hstart ? "opacity-100" : "opacity-0"
              } transition-opacity duration-600 ease-out  `}
              Videosrc={Video6}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horizontal;

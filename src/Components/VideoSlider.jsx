import { useGSAP } from "@gsap/react";
import gsap, { Expo } from "gsap";
import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import ReactPlayer from "react-player";
import { Play, Pause } from "lucide-react";
import { motion } from "motion/react";
gsap.registerPlugin(ScrollTrigger);

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
    {
      src: "https://youtube.com/shorts/6qNC87wqYw8?si=2-9tyf5r3LfSQqne",
      title: "Video 6",
    },
    {
      src: "https://youtube.com/shorts/ghgQhPAoPrs?si=9K5MRj6j5c0TD8RT",
      title: "Video 6",
    },
    {
      src: "https://youtube.com/shorts/Ps37G0CNvBk?si=z9yV9Dsxoqdc2Uop",
      title: "Video 6",
    },
    {
      src: "https://youtube.com/shorts/HqhwY-DFV-g?si=51eL054FOzcnGzO2",
      title: "Video 6",
    },{
      src: "https://youtube.com/shorts/UYNZ8zHgAKg?si=8-W7OP2YTls_y3hg",
      title: "Video 6",
    },
  ];

  const [playingIndex, setPlayingIndex] = useState(null);

  const toggleAudio = (index) => {
    setPlayingIndex(playingIndex === index ? null : index);
  };

  return (
    <div className="workpage h-[80vh] md:h-[90vh] lg:h-[140vh] w-full flex items-start justify-center bg-[#D42A2A]">
      <div className="Container relative overflow-hidden bg-black origin-top h-full w-full scale-[0.65]">
        <div className="textdiv pl-[4.6vw] flex flex-col justify-center items-center sticky h-[20%] lg:h-[60%] text-center left-[50%] top-[10%] lg:top-[10%] translate-x-[-50%] translate-y-[-50%] w-[55%]">
          <div className="heading">
            <h1 className=" text-[3.5vw] md:text-[3vw] lg:text-4xl text-white font-[Sregular]">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1.5, ease: Expo.easeOut }}
                className="inline-block"
              >
                More Than Videos — We
              </motion.span>
            </h1>
            <h1 className="text-[3.5vw] md:text-[3vw] lg:text-4xl text-white font-[Sregular]">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1.5, ease: Expo.easeOut }}
                className="inline-block"
              >
                Build Legacies.
              </motion.span>
            </h1>
          </div>
        </div>
        <div className="h-full w-[150vw] sm:w-full absolute left-[50%] translate-x-[-50%] md:top-[70%] top-[75%] translate-y-[-50%] mx-auto p-4">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            navigation
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
              scale: 0.6,
            }}
            modules={[Navigation, Pagination, EffectCoverflow]}
            className="rounded-2xl h-[60%] sm:h-[80%] md:h-[82%] w-full shadow-lg"
          >
            {videos.map((elem, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div
                  className="video-player h-full w-[100%] relative overflow-hidden cursor-pointer"
                  onClick={() => toggleAudio(index)}
                >
                  <ReactPlayer
                    url={elem.src}
                    width="100%"
                    height="90%"
                    className="transition-transform duration-500 ease-in-out transform scale-75 swiper-slide-active:scale-100"
                  />
                  {/* <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    {playingIndex === index ? (
                      <Pause size={60} className="text-white opacity-90" />
                    ) : (
                      <Play size={60} className="text-white opacity-90" />
                    )}
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default VideoSlider;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Cards from "./Cards";
import IntroVideo from "../../assets/Videos/IntroVideo.mp4";

function ServiceSliderPage({ setHstart }) {
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
  return (
    <div className="workpage h-[320vh] w-full flex items-start justify-center bg-[#D42A2A]">
      <div className="Container relative  bg-black origin-top h-full w-full scale-[0.65] flex items-center justify-center ">
        <Cards />
        <div className="videocontainer h-full w-full  ">
          <div className="videodiv hidden lg:flex justify-center items-center h-screen z-[-1] w-full sticky top-0 left-0  ">
            <video
              muted autoPlay loop
              className="h-[70%] w-[45%] rounded-md  object-cover"
              src={IntroVideo}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSliderPage;

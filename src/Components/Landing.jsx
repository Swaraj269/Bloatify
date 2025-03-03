import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Landing({ finish }) {
  useGSAP(() => {
    gsap.set(".heading h1 span,.subtext h1 span", {
      y: "80%",
    });
    var tl = gsap.timeline({ paused: true, delay: 0.5 });
    tl.to(
      ".heading h1 span",
      {
        y: "0%",
        duration: 1.5,
        stagger: 0.025,
        ease: "expo.out",
      },
      "a"
    ).to(
      ".subtext h1 span",
      {
        y: "0%",
        duration: 1.6,
        stagger: 0.025,
        ease: "expo.out",
      },
      "a"
    );
    if (finish === 1) {
      tl.play();
    }
  }, [finish]);

  return (
    <div className=" h-[64vh] md:h-[74vh] lg:h-[85vh] pt-[12vh] lg:pt-28 px-[4.6vw] text-black w-full bg-[#D42A2A]">
      <div className="heading">
        <h1 className=" text-[12vw]  md:text-[8.5vw] lg:text-[8.7vw] overflow-hidden leading-[1.2]  lg:leading-[1.1] pb-3  ">
          <span className="inline-block font-[Sbold]">
            Bringing Your Brand's
          </span>
        </h1>
        <h1 className=" text-[12vw] md:text-[8.5vw] lg:text-[8.7vw] overflow-hidden md:leading-[1] leading-[0.8]  lg:leading-[1.1] pb-3  ">
          <span className="inline-block font-[Sbold]">Story to Life.</span>
        </h1>
      </div>
      <div className="calltoAction mt-[3vh] lg:mt-12 gap-[4vh] md:gap-[20vw] lg:gap-[30vw] md:flex-row flex-col  flex lg:items-center">
        <div className="subtext">
          <h1 className=" text-[5vw] md:text-[2.5vw] lg:text-3xl overflow-hidden leading-[1.15] font-[Sregular]">
            <span className="inline-block font-[Sregular]">
              From Vision to Viral - Elevating Brands
            </span>
          </h1>
          <h1 className="text-[5vw] md:text-[2.5vw] lg:text-3xl overflow-hidden leading-[1.15] font-[Sregular]">
            <span className="inline-block font-[Sregular]">
              with Cinematic Excellence
            </span>
          </h1>
        </div>
        <div className="ctabutton w-fit relative overflow-hidden flex items-center justify-center cursor-pointer active:scale-[0.98] bg-black text-[#D42A2A] rounded-4xl  px-7 py-2 ">
          <div className="afterdiv h-[5vw] pointer-events-none  scale-[0] w-[5vw] bg-white absolute top-0 left-0 rounded-full "></div>
          <h1 className="ctatext md:text-[2vw]  text-[3.5vw] lg:text-lg relative z-[5] font-[Smedium]">
            Book A Call
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;

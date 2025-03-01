import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Cards from "./Cards";

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
        <Cards/>
      </div>
    </div>
  );
}

export default ServiceSliderPage;

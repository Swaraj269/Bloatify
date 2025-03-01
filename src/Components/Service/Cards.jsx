import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { FaVideo } from "react-icons/fa6";
import { IoBusiness } from "react-icons/io5";
import { MdBrandingWatermark } from "react-icons/md";
import { SiSocialblade } from "react-icons/si";
function Cards() {

  


  const card = [
    {
      icon: <FaVideo />,
      title: "Video Content Creation",
      description:
        "We craft high-quality, engaging video ads and promotional clips tailored to your brand's identity. From concept to execution, our team ensures visually stunning storytelling that captivates your audience and drives results. Whether it's a brand film, commercial, or social media video, we bring your vision to life with cinematic excellence.",
    },
    {
      icon: <IoBusiness />,
      title: "Business Consultancy",
      description:
        "We help local businesses grow through strategic insights and tailored solutions. Our consultancy services include market analysis, branding strategies, and content marketing plans designed to enhance your reach, optimize operations, and scale efficiently in today's competitive landscape.",
    },
    {
      icon: <MdBrandingWatermark />,
      title: "Branding & Identity",
      description:
        "A strong brand starts with a clear identity. We design impactful logos, cohesive brand guidelines, and unique visual elements that reflect your company's essence. Our goal is to create a recognizable and memorable brand presence that sets you apart from the competition.",
    },
    {
      icon: <SiSocialblade />,
      title: "Social Media Management",
      description:
        "We handle everything from content creation and scheduling to engagement and analytics. Our team develops strategic social media plans that enhance your brand's presence, boost audience interaction, and drive conversions. With data-driven insights, we ensure your social media channels are optimized for maximum impact.",
    },
  ];

  return (
    <div className="cards relative w-full h-full text-black flex flex-col gap-12 items-center py-[15vh]">
      {card.map((elem, index) => {
        return (
          <div
            key={index}
            className="card sticky top-[15vh] sm:w-[50vw] h-[60vh] w-[75vw] h-[50vh] md:h-[70vh] md:w-[45vw]  lg:w-[22vw] lg:h-[65vh] flex flex-col gap-5 px-8 py-8 rounded-lg bg-[#D42A2A]"
          >
            <div className="icon sm:text-[5vw] text-[8vw] md:text-[4vw] lg:text-4xl ">{elem.icon}</div>
            <div className="heading  md:mt-2">
              <h1 className="text-[8vw] sm:text-[5vw] leading-[1.15] md:text-[4vw] lg:text-4xl font-[Smedium]">{elem.title}</h1>
            </div>
            <div className="description md:mt-2">
              <p className=" sm:text-[2.5vw] text-[3.5vw] text-pretty md:text-[2vw] lg:text-[1vw]  font-[Sregular] ">{elem.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;

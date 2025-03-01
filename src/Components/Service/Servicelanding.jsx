import React from "react";

function Servicelanding() {
  return (
    <div className="lg:h-[80vh] md:h-[60vh] h-[45vh] pt-28 px-[4.6vw] text-black w-full bg-[#D42A2A]">
      <div className="heading">
        <h1 className="text-[12.2vw] overflow-hidden  leading-[1.1] pb-3  ">
          <span className="inline-block font-[Sbold]">OUR SERVICES</span>
        </h1>
      </div>
      <div className="calltoAction mt-[3vh] lg:mt-12 gap-[23vw] flex items-center">
        <div className="subtext">
          <h1 className="text-[5vw] md:text-[3vw] lg:text-3xl overflow-hidden leading-[1.15] font-[Sregular]">
            <span className="inline-block font-[Sregular]">
              Creative Direction That Turns Ideas
            </span>
          </h1>
          <h1 className="text-[5vw] md:text-[3vw] lg:text-3xl overflow-hidden leading-[1.15] font-[Sregular]">
            <span className="inline-block font-[Sregular]">
              into Iconic Content
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Servicelanding;

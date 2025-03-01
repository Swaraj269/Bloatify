import React from "react";
import { Link } from "react-router-dom";

function Navbar({ hstart }) {
  return (
    <div
      className={`h-18 md:h-20 w-full z-[500]  ${
        hstart ? "text-white" : "text-black"
      } backdrop-blur-xs flex items-center justify-between px-[4.6vw] lg:px-[5vw] fixed top-0 left-0`}
    >
      <div className="logopart">
        <div className="logotext">
          <Link
            to="/"
            className="cursor-pointer text-xl md:text-[3vw]  lg:text-3xl font-[Sblack] "
          >
            BLOATIFY
          </Link>
        </div>
      </div>
      <div className="navlinks">
        <div
          className={`navlinkCapsule flex items-center justify-center gap-5 lg:gap-10 ${
            hstart ? "bg-white" : "bg-black"
          }  rounded-full px-5 md:py-2 md:px-8  lg:px-10 py-1 lg:py-2 `}
        >
          <div className="navlink cursor-pointer active:scale-[0.96] ">
            <Link
              to="/work"
              className={` ${
                hstart
                  ? "text-black font-[Smedium]"
                  : "text-[#D42A2A] font-[Sbold]"
              } text-sm md:text-md lg:text-lg `}
            >
              Work
            </Link>
          </div>
          <div className="navlink cursor-pointer active:scale-[0.96] ">
            <Link
              to="/service"
              className={` ${
                hstart
                  ? "text-black font-[Smedium]"
                  : "text-[#D42A2A] font-[Sbold]"
              } text-sm md:text-md lg:text-lg `}
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

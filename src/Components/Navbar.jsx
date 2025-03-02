import React from "react";
import { Link, NavLink } from "react-router-dom";

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
          className={`navlinkCapsule flex items-center justify-center gap-1 lg:gap-2 ${
            hstart ? "bg-white" : "bg-black"
          }  rounded-full px-2 md:py-2 md:px-4  lg:px-5 py-1 lg:py-2 `}
        >
          <div className="navlink cursor-pointer active:scale-[0.96] ">
            <NavLink
              style={(e) => {
                return {
                  color: e.isActive ? "#000" : "",
                  backgroundColor: e.isActive ? "#fff" : "",
                };
              }}
              to="/work"
              className={` ${
                hstart
                  ? "text-black font-[Smedium]"
                  : "text-[#D42A2A] font-[Sbold]"
              } text-sm md:text-md hover:bg-white active:scale-[0.98] hover:text-black duration-[0.3s] h-full w-[50%] rounded-full px-2 md:py-2 md:px-4  lg:px-5 py-1 lg:py-2 lg:text-lg `}
            >
              Work
            </NavLink>
          </div>
          <div className="navlink cursor-pointer active:scale-[0.96] ">
            <NavLink
              style={(e) => {
                return {
                  color: e.isActive ? "#000" : "",
                  backgroundColor: e.isActive ? "#fff" : "",
                };
              }}
              to="/service"
              className={` ${
                hstart
                  ? "text-black font-[Smedium]"
                  : "text-[#D42A2A] font-[Sbold]"
              } text-sm md:text-md hover:bg-white active:scale-[0.98] hover:text-black duration-[0.3s] h-full w-[50%] rounded-full px-2 md:py-2 md:px-4  lg:px-5 py-1 lg:py-2 lg:text-lg  `}
            >
              Services
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

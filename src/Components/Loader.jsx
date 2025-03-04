import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
function Loader({ setFinish }) {
  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingPercent((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 300);
  });
  const [loadingPercent, setLoadingPercent] = useState(0);
  useGSAP(() => {
    gsap.to(".loadingbar", {
      duration: 1.4,
      translateX: "0%",
      ease: "expoInOut",
    });
    gsap.set(".topwindow,.bottomwindow", {
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
    });
    var tl = gsap.timeline({ paused: true });
    tl.to(
      ".loadingBar",
      {
        opacity: 0,
        delay: 0.4,
        duration: 0.6,
      },
      "a"
    )
      .to(
        ".bottomwindow",
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        },
        "a"
      )
      .to(
        ".topwindow",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
          onComplete: function () {
            setFinish((prev) => prev + 1);
          },
        },
        "a"
      );
    if (loadingPercent === 100) tl.play();
  }, [loadingPercent]);
  return (
    <div className="h-screen flex flex-col gap-0 w-full pointer-events-none fixed z-[1000] top-0 left-0 ">
      <div className="topwindow bg-[#000] h-[50%] w-full "></div>
      <div className="bottomwindow bg-[#000] h-[50%] w-full "></div>
      <div className="loadingBar absolute top-[50%] left-0 translate-y-[-50%] h-10 w-full">
        <div className="loadingbar translate-x-[-100%] h-full w-full bg-[#D42A2A]"></div>
        <div className="overlay px-4 lg:px-10 absolute top-0 left-0 h-full w-full flex items-center justify-between">
          <h1 className=" text-white font-[Slight] text-sm lg:text-md">
            Your Story Is About to Begin...
          </h1>
          <h1 className=" text-white font-[Slight] text-sm lg:text-md">
            {loadingPercent}%
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Loader;

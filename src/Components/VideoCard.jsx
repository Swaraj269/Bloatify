import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

function VideoCard({ Videosrc, unique }) {
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current || !videoRef.current) return;
      const parentRect = videoRef.current.parentElement.getBoundingClientRect();
      const x = e.clientX - parentRect.left - 50;
      const y = e.clientY - parentRect.top - 50;

      gsap.to(cursorRef.current, {
        x: x,
        y: y,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      className={`relative ${unique}  overflow-hidden  h-[70%] w-[22vw] bg-white `}
      onClick={toggleMute}
    >
      <div
        ref={cursorRef}
        className="customCursor h-[5vw] w-[5vw] rounded-full absolute bg-[#D42A2A] flex items-center justify-center pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="text-black text-sm leading-[1] text-center font-[Sregular]">
          {isMuted ? "Click to Unmute" : "Click to Mute"}
        </h1>
      </div>
      <video
        ref={videoRef}
        src={Videosrc}
        autoPlay
        muted
        loop
        className="h-full w-full object-cover "
      ></video>
    </div>
  );
}

export default VideoCard;

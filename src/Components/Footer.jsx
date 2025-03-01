import React from "react";
import { motion } from "motion/react";
import gsap, { Expo } from "gsap";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import footerlogo from "../assets/Images/Footerlogo.png";
import { useGSAP } from "@gsap/react";
function Footer({ setHstart, hstart }) {
  useGSAP(() => {
    gsap.to(".footerdiv", {
      scrollTrigger: {
        trigger: ".footerdiv",
        start: "top top",
        end: "top bottom",
        onLeave: function () {
          setHstart(false);
        },
        onEnterBack: function () {
          setHstart(true);
        },
      },
    });
  });
  return (
    <div className="footerdiv  h-[120vh] md:h-[150vh] lg:h-[170vh] px-[3vw] lg:px-[5vw] w-full bg-[#D42A2A]">
      <div className="calldiv flex items-center h-[30%]  lg:h-[45%] w-full">
        <div className="callcontentdiv">
          <div className="heading ">
            <h1 className=" text-[10vw] sm:text-[8vw] md:text-[7vw]  lg:text-9xl overflow-hidden leading-[1.3] lg:leading-[1.3] font-[Sbold] ">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 1.5,
                  ease: Expo.easeOut,
                }}
                className="inline-block "
              >
                Ready to Bring Your
              </motion.span>
            </h1>
            <h1 className="text-[10vw] sm:text-[8vw] md:text-[7vw]  lg:text-9xl overflow-hidden leading-[1.1] font-[Sbold] ">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 1.5,
                  ease: Expo.easeOut,
                }}
                className="inline-block "
              >
                Brand to Life?
              </motion.span>
            </h1>
          </div>
          <div className="calltoactiondiv lg:items-center w-[93%] flex lg:flex-row flex-col lg:gap-0 gap-8 lg:justify-between mt-[2.5vh] lg:mt-10 ">
            <div className="leftsidetext w-full lg:w-[50%] ">
              <h1 className=" text-[6vw]  sm:text-[4.5vw] md:text-[4vw]  lg:text-4xl overflow-hidden leading-[1.3] font-[Sregular] ">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5,
                    duration: 1.5,
                    ease: Expo.easeOut,
                  }}
                  className="inline-block "
                >
                  Let's Turn Your Vision into a
                </motion.span>
              </h1>
              <h1 className="text-[6vw] sm:text-[4.5vw] md:text-[4vw] lg:text-4xl overflow-hidden leading-[1.3] font-[Sregular] ">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5,
                    duration: 1.5,
                    ease: Expo.easeOut,
                  }}
                  className="inline-block "
                >
                  Cinematic Masterpiece!
                </motion.span>
              </h1>
            </div>
            <div className="rightsidetext w-fit">
              <div className="ctabutton relative overflow-hidden cursor-pointer active:scale-[0.98] bg-black text-[#D42A2A] rounded-full px-7 py-2 ">
                <div className="afterdiv h-[2vw] pointer-events-none  scale-[0] w-[2vw] bg-white absolute top-0 left-0 rounded-full "></div>
                <h1 className="ctatext text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-lg relative z-[5] font-[Smedium]">
                  Book A Call
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footercontent h-[70%] lg:h-[55%] w-full ">
        <div className="upperpart flex justify-center lg:justify-start flex-col lg:flex-row lg:gap-40 h-[70%] lg:h-[50%] ">
          <div className="contactdiv pt-0 lg:pt-15">
            <h1 className="text-[6vw] sm:text-[4.5vw] md:text-[4vw] lg:text-3xl text-black font-[Smedium] ">
              Contact
            </h1>
            <div className="contactinfo flex flex-col gap-1 lg:gap-3 mt-[3vh] lg:mt-10 ">
              <div className="iconandtextdiv cursor-pointer   flex items-center gap-3">
                <div className="icon text-black text-[6vw] sm:text-[4.5vw] md:text-[4vw] lg:text-2xl ">
                  <IoMdMail />
                </div>
                <h1 className="text-black text-[6vw] sm:text-[4.5vw] md:text-[4vw] lg:text-2xl font-[Sregular]">
                  info@bloatify.com
                </h1>
              </div>
              <div className="iconandtextdiv cursor-pointer flex items-center gap-3">
                <div className="icon text-black text-[6vw]  sm:text-[4.5vw] md:text-[4vw] lg:text-2xl">
                  <IoCall />
                </div>
                <h1 className="text-black text-[6vw] sm:text-[4.5vw] md:text-[4vw] lg:text-2xl font-[Sregular]">
                  0123 22123 2323
                </h1>
              </div>
            </div>
          </div>
          <div className="socialsdiv pt-[5vh] lg:pt-15">
            <h1 className="text-[6vw] sm:text-[4.5vw] md:text-[4vw] lg:text-3xl text-black font-[Smedium] ">
              Socials
            </h1>
            <div className="contactinfo flex flex-col gap-1 lg:gap-3 mt-[3vh]  lg:mt-10 ">
              <div className="iconandtextdiv cursor-pointer   flex items-center gap-3">
                <div className="icon text-black text-[6vw] sm:text-[4.5vw] md:text-[4vw] lg:text-2xl ">
                  <FaLinkedinIn />
                </div>
                <h1 className="text-black sm:text-[4.5vw] md:text-[4vw] text-[6vw] lg:text-2xl font-[Sregular]">
                  LinkedIn
                </h1>
              </div>
              <div className="iconandtextdiv cursor-pointer flex items-center gap-3">
                <div className="icon text-black text-[6vw] sm:text-[4.5vw] md:text-[4vw] lg:text-2xl ">
                  <FaInstagram />
                </div>
                <h1 className="text-black text-[6vw] sm:text-[4.5vw] md:text-[4vw] lg:text-2xl font-[Sregular]">
                  Instagram
                </h1>
              </div>
            </div>
          </div>
          <div className="sometext pt-[5vh] lg:pt-10 w-full sm:w-[80%] md:w-[70%] lg:w-[50%] ">
            <h1 className=" text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6.2vw] font-[Sregular] leading-[1.2] lg:leading-[1]">
              Lights, Camera, Brand Success!
            </h1>
          </div>
        </div>
        <div className="lowerpart flex flex-col justify-end lg:mt-5 h-[25%] lg:h-[47%] w-full ">
          <div className="footerlogo overflow-hidden h-[43%] md:h-[70%] lg:h-[85%] w-full">
            <img
              className="h-full w-full object-cover"
              src={footerlogo}
              alt=""
            />
          </div>
          <div className="copyright h-[20%] lg:h-[10%] flex items-center justify-center ">
            <h1 className="text-black text-sm lg:text-lg font-[Smedium] ">
              © Copyright 2025 bloatify. All right reserved.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import { Expo } from "gsap";
import { motion } from "motion/react";
import React from "react";
import ServiceImage from "../assets/Images/ServiceImage.png";
function Service() {
  return (
    <div className=" h-[140vh] lg:h-[200vh]  flex px-[3vw] lg:px-[5vw] w-full text-white bg-[#010101]">
      <div className="leftpart pt-5 h-full w-full md:w-[60%] ">
        <div className="pagename ">
          <h1 className=" text-[10vw] md:text-[5vw] lg:text-6xl overflow-hidden leading-[1.2] lg:leading-[1] font-[Smedium] ">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.5, ease: Expo.easeOut }}
              className="inline-block "
            >
              What We Offer?
            </motion.span>
          </h1>
        </div>
        <div className="services mt-[7vh] lg:mt-32 ">
          <div className="service  ">
            <div className="whatname flex items-center gap-3 lg:gap-5 ">
              <div className="number">
                <h1 className=" text-[5vw]  md:text-[3vw] lg:text-[2.5vw] overflow-hidden leading-[1] font-[Sregular] ">
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
                    1.
                  </motion.span>
                </h1>
              </div>
              <div className="content">
                <h1 className=" text-[5vw] md:text-[3vw] lg:text-[2.5vw] overflow-hidden leading-[1] font-[Sregular] ">
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
                    Video Content Creation
                  </motion.span>
                </h1>
              </div>
            </div>
            <div className="description">
              <h1 className="text-[3.5vw] md:text-[2vw] lg:text-[1.15vw] text-pretty ml-8 lg:ml-10 mt-6 w-[80%] lg:w-[60%] overflow-hidden leading-[1.45] font-[Slight] ">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1.5, ease: Expo.easeOut }}
                  className="inline-block text-pretty "
                >
                  We craft high-quality, engaging video ads and promotional
                  clips tailored to your brand's identity. From concept to
                  execution, our team ensures visually stunning storytelling
                  that captivates your audience and drives results. Whether it's
                  a brand film, commercial, or social media video, we bring your
                  vision to life with cinematic excellence.
                </motion.span>
              </h1>
            </div>
          </div>
          <div className="service mt-[5vh] lg:mt-24  ">
            <div className="whatname flex gap-3 lg:gap-5 ">
              <div className="number">
                <h1 className=" text-[5vw] md:text-[3vw] lg:text-[2.5vw] overflow-hidden leading-[1] font-[Sregular] ">
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
                    2.
                  </motion.span>
                </h1>
              </div>
              <div className="content">
                <h1 className="text-[5vw] md:text-[3vw] lg:text-[2.5vw] overflow-hidden leading-[1.2] font-[Sregular] ">
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
                    Business Consultancy
                  </motion.span>
                </h1>
              </div>
            </div>
            <div className="description">
              <h1 className="text-[3.5vw] md:text-[2vw] lg:text-[1.15vw] text-pretty ml-8 lg:ml-12 mt-6 w-[80%] lg:w-[60%] overflow-hidden leading-[1.45] font-[Slight] ">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1.5, ease: Expo.easeOut }}
                  className="inline-block "
                >
                  We help local businesses grow through strategic insights and
                  tailored solutions. Our consultancy services include market
                  analysis, branding strategies, and content marketing plans
                  designed to enhance your reach, optimize operations, and scale
                  efficiently in today’s competitive landscape.
                </motion.span>
              </h1>
            </div>
          </div>
          <div className="service mt-[5vh] lg:mt-24 ">
            <div className="whatname flex gap-3 lg:gap-5 ">
              <div className="number">
                <h1 className="text-[5vw] md:text-[3vw] lg:text-[2.5vw]  overflow-hidden leading-[1] font-[Sregular] ">
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
                    3.
                  </motion.span>
                </h1>
              </div>
              <div className="content">
                <h1 className="text-[5vw] md:text-[3vw] lg:text-[2.5vw]  overflow-hidden leading-[1.2] font-[Sregular] ">
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
                    Branding & Identity
                  </motion.span>
                </h1>
              </div>
            </div>
            <div className="description">
              <h1 className="text-[3.5vw] md:text-[2vw] lg:text-[1.15vw] text-pretty ml-8 lg:ml-12 mt-6 w-[80%] lg:w-[60%] overflow-hidden leading-[1.45] font-[Slight] ">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1.5, ease: Expo.easeOut }}
                  className="inline-block "
                >
                  A strong brand starts with a clear identity. We design
                  impactful logos, cohesive brand guidelines, and unique visual
                  elements that reflect your company's essence. Our goal is to
                  create a recognizable and memorable brand presence that sets
                  you apart from the competition.
                </motion.span>
              </h1>
            </div>
          </div>
          <div className="service mt-[5vh] lg:mt-24  ">
            <div className="whatname flex gap-3 lg:gap-5 ">
              <div className="number">
                <h1 className="text-[5vw] md:text-[3vw] lg:text-[2.5vw]  overflow-hidden leading-[1] font-[Sregular] ">
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
                    4.
                  </motion.span>
                </h1>
              </div>
              <div className="content">
                <h1 className="text-[5vw] md:text-[3vw] lg:text-[2.5vw] overflow-hidden leading-[1.2] font-[Sregular] ">
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
                    Social Media Management
                  </motion.span>
                </h1>
              </div>
            </div>
            <div className="description">
              <h1 className="text-[3.5vw] md:text-[2vw] lg:text-[1.15vw]  text-pretty ml-8 lg:ml-12 mt-6 w-[80%] lg:w-[60%] overflow-hidden leading-[1.45] font-[Slight] ">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1.5, ease: Expo.easeOut }}
                  className="inline-block text-blance "
                >
                  We handle everything from content creation and scheduling to
                  engagement and analytics. Our team develops strategic social
                  media plans that enhance your brand's presence, boost audience
                  interaction, and drive conversions. With data-driven insights,
                  we ensure your social media channels are optimized for maximum
                  impact.
                </motion.span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden md:flex  rightpart relative  h-full md:w-[40%]  ">
        <div className="child sticky top-0 left-0 flex items-center justify-center h-screen w-full ">
          <div className="imageframe md:h-[60%] md:w-full lg:h-[85%] lg:w-[80%] bg-[#D42A2A] ">
            <img
              className="h-full w-full object-cover"
              src={ServiceImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

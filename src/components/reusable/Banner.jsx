import React from "react";
import Nav from "@/src/components/reusable/NavBar";
import Button from "@/src/components/reusable/Button";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";

import { motion, AnimatePresence } from "framer-motion";

function scrollToElement(elementID) {
  const element = document.getElementById(elementID);
  element?.scrollIntoView({
    behavior: "smooth",
  });
}

const Banner = ({
  image,
  active,
  subActive = 0,
  firstText,
  secondText,
  subtitle,
  hideExplore,
  swapRedText = false,
  hidePinText = true,
  pinText = "",
  includeButton = true,
  scrollTo = "",
}) => {
  return (
    <AnimatePresence>
      <motion.div className="relative">
        <Image
          src={Shadow}
          alt="Shadow"
          className="absolute top-0 left-0 -z-10 w-full"
        />
        <Nav active={active} sub={subActive} />
        <div className="py-20  lg:px-[10%] px-[5%] flex flex-col lg:flex">
          <div className="flex gap-10 items-start justify-between">
            <div className="lg:w-[50%] w-full flex flex-col">
              <div className="flex flex-col gap-5 mt-5">
                <div className="w-full flex-shrink">
                  {!hidePinText && (
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[14px]">
                        <Image src={Pin} alt="pin" />
                      </div>
                      <p className="text-maroon text-base font-medium leading-loose">
                        {pinText}
                      </p>
                    </div>
                  )}
                  <h1
                    className={`${
                      swapRedText ? "text-red-950" : "text-slate-950"
                    } lg:text-[64px] text-[32px] font-[500] leading-[48px] lg:leading-[88px]`}
                  >
                    {firstText}{" "}
                    <span
                      className={`${
                        !swapRedText ? "text-red-950" : "text-slate-950"
                      }`}
                    >
                      {secondText}
                    </span>
                  </h1>
                </div>

                <div className="lg:w-[90%] w-full text-slate-950 text-base font-normal leading-loose">
                  {subtitle}
                </div>

                <motion.div
                  className="flex flex-col lg:flex-row w-full justify-start items-center gap-[20px]"
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      ease: "easeIn",
                      duration: 1,
                    },
                  }}
                >
                  {includeButton && (
                    <Button
                      style="w-full lg:w-[200px] text-center text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200"
                      destination={"/contact-us"}
                    >
                      Get In Touch
                    </Button>
                  )}
                  {!hideExplore && (
                    <Button
                      style="w-full lg:w-[200px] text-center text-darkBlue bg-blandGrey px-5 py-3 font-[500] rounded-md"
                      onClick={() => scrollToElement(scrollTo)}
                    >
                      Explore More
                    </Button>
                  )}
                </motion.div>
              </div>
            </div>

            <motion.div
              animate={{
                y: ["10%", "0%", "10%"],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                },
              }}
              className="lg:w-[50%] h-auto hidden lg:block"
            >
              <Image src={image} alt="image" />
            </motion.div>
          </div>

          <motion.div
            animate={{
              y: ["10%", "0%", "10%"],
              transition: {
                duration: 5,
                repeat: Infinity,
              },
            }}
            className="w-full mt-10 lg:mt-0 h-auto lg:hidden"
          >
            <Image src={image} alt="image" />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Banner;

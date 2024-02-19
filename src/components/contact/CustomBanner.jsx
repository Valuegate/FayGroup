import React from "react";
import Nav from "@/src/components/reusable/NavBar";
import Button from "@/src/components/reusable/Button";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";

import Background from "@/public/assets/contact/Background.svg";

import { motion, AnimatePresence } from "framer-motion";

function scrollToElement(elementID) {
  const element = document.getElementById(elementID);
  element?.scrollIntoView({
    behavior: "smooth",
  });
}

const CustomBanner = ({
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
  child,
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

            <div className="lg:w-[50%] h-auto hidden lg:block">{child}</div>
          </div>

          <div className="w-full mt-10 lg:mt-0 h-auto lg:hidden">{child}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const ContactInfo = () => {
  return (
    <div className="flex h-full pt-20 lg:pb-20 flex-col bg-offWhite lg:flex-row lg:px-[10%] px-[5%] justify-between items-start lg:items-center gap-10 lg:gap-[10%]">
      <Info />
      <Content />
    </div>
  );
};

const Info = () => {
  return (
    <div className="flex flex-col lg:w-[50%] w-full px-0">
      <div className="flex items-center gap-[10px]">
        <div className="w-[14px]">
          <Image src={Pin} alt="pin" />
        </div>
        <p className="text-maroon text-base text-xs font-medium leading-loose">
          MESSAGE
        </p>
      </div>
      <p className="text-slate-950 lg:text-4xl text-2xl leading-9 font-medium lg:leading-[48px]">
        Turn your <span className="text-red-950">ideas</span> into reality
      </p>
      <p className="text-slate-950 text-base font-normal leading-loose mt-5">
        Connect with us and let's get started.
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div className="relative">
      <Image src={Background} alt="background" className="h-auto" />
      <div className="w-[92%] lg:w-[80%] h-[90%] overflow-y-scroll flex flex-col bg-white absolute z-10 top-[5%] left-[4%] lg:left-[10%] rounded-[12px] items-center px-[7%] py-[5%]">
        <p className="text-slate-950 lg:text-2xl text-xl font-medium leading-9">
          Get in Touch
        </p>
        <div className="flex flex-col items-start mt-[8%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Full Name
          </p>
          <input
            type="text"
            className="w-full bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm"
            placeholder="Enter Full Name"
          />
        </div>
        <div className="flex flex-col items-start mt-[2%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Email Address
          </p>
          <input
            type="email"
            className="w-full bg-blandGrey border px-2 py-2.5 font-normal focus:outline-none rounded-sm"
            placeholder="Enter Email Address"
          />
        </div>
        <div className="flex flex-col items-start mt-[2%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Phone Number
          </p>
          <input
            type="text"
            className="w-full bg-blandGrey border px-2 py-2.5 font-normal focus:outline-none rounded-sm"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="flex flex-col items-start mt-[2%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Message
          </p>
          <textarea
            type="text"
            className="w-full bg-blandGrey border px-2 py-3 h-[100px] font-normal resize-none focus:outline-none rounded-sm"
            placeholder="Type Here..."
          />
        </div>

        <Button style="w-full mt-10 text-center text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200">
          Send
        </Button>
      </div>
    </div>
  );
};

export default CustomBanner;

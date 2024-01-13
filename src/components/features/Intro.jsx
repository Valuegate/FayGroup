"use client";

import React from "react";
import Nav from "../reusable/NavBar";
import Button from "../reusable/Button";

import Image from "next/image";

import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";

import { motion } from "framer-motion";

function scrollToElement(elementID) {
  const element = document.getElementById(elementID);
  element?.scrollIntoView({
    behavior: "smooth",
  });
}

const Intro = ({
  One,
  Two,
  Three,
  Four,
  pinText,
  preRedSubtitle,
  redSubtitle,
  postRedSubtitle,
  content,
  scrollTo = "",
  subActiveNav = 0,
}) => {
  return (
    <div className="relative bg-slightRedBackground">
      <Image
        src={Shadow}
        alt="shadow"
        className="absolute top-0 left-0 -z-10 w-full h-[50%]"
      />
      <Nav active={1} sub={subActiveNav} />
      <motion.div
        animate={{
          y: ["0%", "10%", "0%"],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}
        className="absolute z-10 top-[30%] right-[15%] hidden lg:block"
      >
        <Image src={One} alt="one" className="" />
      </motion.div>
      <motion.div
        animate={{
          y: ["10%", "0%", "10%"],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}
        className="absolute z-10 top-[30%] left-[15%] hidden lg:block"
      >
        <Image src={Two} alt="one" className="" />
      </motion.div>

      <motion.div
        animate={{
          x: ["0%", "10%", "0%"],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}
        className="absolute z-10 top-[65%] left-[25%] hidden lg:block"
      >
        <Image src={Three} alt="one" className="" />
      </motion.div>

      <motion.div
        animate={{
          x: ["10%", "0%", "10%"],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}
        className="absolute z-10 top-[65%] right-[25%] hidden lg:block"
      >
        <Image src={Four} alt="one" className="" />
      </motion.div>

      <div className="lg:mt-32 mt-20 px-[5%] lg:px-[10%] flex flex-col w-full items-center relative">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-medium leading-loose">
            {pinText}
          </p>
        </div>

        <div className="lg:px-[20%] px-0 lg:w-[80%] w-full">
          <motion.h1
            animate={{
              scale: [1.0, 1.1, 1.0],
              transition: {
                duration: 5,
                repeat: Infinity,
              },
            }}
            className="text-slate-950 text-4xl mt-5 sm:text-[32px] text-center font-medium sm:leading-9 leading-[44px] "
          >
            {preRedSubtitle} <span className="text-red-950">{redSubtitle}</span>{" "}
            {postRedSubtitle}
          </motion.h1>
        </div>

        <p className="text-normal lg:w-[40%] w-full lg:mt-10 mt-5 text-base leading-loose text-center">
          {content}
        </p>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "easeIn",
              duration: 2,
            },
          }}
          className="flex w-full flex-col lg:flex-row justify-start lg:justify-center items-center gap-[20px] mt-5 lg:mt-10"
        >
          <Button
            style="text-white text-center w-full lg:w-[200px] bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200"
            destination={"/contact-us"}
          >
            Get In Touch
          </Button>
          <Button
            style="text-darkBlue text-center w-full lg:w-[200px] bg-blandGrey px-5 py-3 font-[500] rounded-md"
            onClick={() => scrollToElement(scrollTo)}
          >
            Explore More
          </Button>
        </motion.div>
      </div>

      <div className="lg:h-32 h-20" />
    </div>
  );
};

export default Intro;

import React from "react";
import Nav from "../reusable/NavBar";
import Link from "next/link";
import Button from "../reusable/Button";
import { FaArrowRight } from "react-icons/fa";

import Image from "next/image";

import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import One from "@/public/assets/our-works/One.svg";
import Two from "@/public/assets/our-works/Two.svg";
import Three from "@/public/assets/our-works/Three.svg";
import Four from "@/public/assets/our-works/Four.svg";

import { motion } from "framer-motion";

const Intro = ({ scrollTo }) => {
  function scrollToElement(elementID) {
    const element = document.getElementById(elementID);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="relative bg-slightRedBackground">
      <Image
        src={Shadow}
        alt=""
        className="absolute top-0 left-0 -z-10 w-full h-[50%]"
      />
      <Nav active={1} />
      <motion.div
        animate={{
          y: ["0%", "10%", "0%"],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
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
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
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
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
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
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute z-10 top-[65%] right-[25%] hidden lg:block"
      >
        <Image src={Four} alt="one" className="" />
      </motion.div>

      <div className="lg:mt-32 mt-20 px-[5%] pb-20 lg:pb-28 lg:px-0 flex flex-col items-center relative">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
            OUR WORKS
          </p>
        </div>

        <h1 className="text-slate-950 lg:text-4xl w-full lg:w-[40%] mt-5 text-[32px] text-center font-medium leading-9 lg:leading-[44px]">
          Unlock our Portfolio of Past{" "}
          <span className="text-red-950">Tech Triumphs</span>
        </h1>

        <p className="text-normal lg:w-[40%] w-full lg:mt-10 mt-5 text-base leading-loose text-center">
          Explore a showcase of our remarkable past projects, where ideas have
          transformed into extraordinary tech solutions. Our commitment to
          innovation and excellence shines through every venture.
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
          className="flex w-full flex-col lg:flex-row lg:justify-center justify-start items-center gap-[20px] mt-10"
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
    </div>
  );
};

export default Intro;

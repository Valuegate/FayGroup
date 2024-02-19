import Nav from "@/src/components/reusable/NavBar";
import Button from "@/src/components/reusable/Button";
import React from "react";

import Shadow from "@/public/assets/shadow.svg";
import Hero from "@/public/assets/landing-page/Hero.svg";
import Welcome from "@/public/assets/landing-page/Welcome.svg";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

const MainInformation = () => {
  function scrollToElement(elementID) {
    const element = document.getElementById(elementID);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <AnimatePresence>
      <motion.div className="relative w-full">
        <Image
          src={Shadow}
          alt="shadow"
          className="block absolute top-0 left-0 -z-10 w-full h-[100vh]"
        />

        <Nav />
        <div className="lg:flex-row flex flex-col gap-[10%] items-start justify-between lg:px-[10%] px-[5%] mt-[5%] mb-[10%]">
          <div className="lg:w-[50%] w-full flex flex-col">
            <motion.div
              animate={{
                y: ["5%", "0%", "5%"],
                transition: {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}
              className="flex items-center"
            >
              <div>
                <Image src={Welcome} alt="welcome" className="w-[100px]" />
              </div>
              <p className="text-white text-center text-[14px] lg:text-[14px] font-[500] leading-loose bg-extraDarkRed rounded-[40px] py-3 px-4">
                WELCOME TO FAYGROUP 👋
              </p>
            </motion.div>
            <div className="flex flex-col lg:gap-[32px] gap-[16px] mt-[5%]">
              <div className="w-full flex-shrink">
                <h1 className="text-slate-950 lg:text-[64px] text-[32px] font-[500] leading-[48px] lg:leading-[88px]">
                  Grow your Business with{" "}
                  <span className="text-red-950">Our Solutions</span>
                </h1>
              </div>

              <p className="w-[90%] sm:w-full text-slate-950 text-base font-normal leading-loose">
                Unleash your business potential. Explore Our Range of Services
                Tailored to Boost Your Success.
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
                    duration: 1,
                  },
                }}
                className="flex-col lg:flex-row lg:flex flex justify-start items-center gap-5"
              >
                <Button
                  style="w-full lg:w-[200px] text-center text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200"
                  destination={"/contact-us"}
                >
                  Get In Touch
                </Button>
                <Button
                  style="w-full lg:w-[200px] text-center text-darkBlue bg-blandGrey px-5 py-3 font-[500] rounded-md"
                  onClick={() => scrollToElement("landing-page-service")}
                >
                  Explore More
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-[40%] w-full mt-5 mb-10 relative">
            <Image
              src={Shadow}
              alt="shadow"
              className="sm:block hidden absolute top-0 left-0 -z-10 w-full h-auto"
            />
            <motion.div
              animate={{
                y: ["10%", "0%", "10%"],
                transition: {
                  duration: 3,
                  repeatDelay: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}
            >
              <Image src={Hero} alt="Hero" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MainInformation;

import React from "react";

import { FaArrowRight } from "react-icons/fa";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";
import Link from "next/link";

import DS from "@/public/assets/product development/DS.svg";
import MS from "@/public/assets/product development/MS.svg";
import SC from "@/public/assets/product development/SC.svg";
import SD from "@/public/assets/product development/SD.svg";
import SE from "@/public/assets/product development/SE.svg";
import UD from "@/public/assets/product development/UD.svg";

import {motion} from "framer-motion";

const Services = () => {
  const services = [
    {
      name: "Software Development",
      subtitle:
        "Elevate your business with our exceptional software development service. FayGroup excels at delivering top-notch solutions.",
      image: SD,
      link: "/features/software-development",
      color: "bg-sdOrange",
      text: "text-thickSdOrange",
    },
    {
      name: "UI/UX Design",
      subtitle:
        "Improve your user experience with our impeccable UI/UX Design service. At FayGroup, we create intuitive interfaces and deliver excellence.",
      image: UD,
      link: "/features/ui-ux",
      color: "bg-udGreen",
      text: "text-thickUdGreen",
    },
    {
      name: "Mobile Solutions",
      subtitle:
        "Transform your vision into a dynamic reality with our Mobile App Development service.  Experience the pinnacle of excellence with us.",
      image: MS,
      link: "/features/mobile-solution",
      color: "bg-msRed",
      text: "text-thickMsRed",
    },
    {
      name: "System Engineering",
      subtitle:
        "Elevate your business standards with our System Engineering service. At FayGroup we guarantees your operations aligns with outstanding quality standards.",
      image: SE,
      link: "/features/system-engineering",
      color: "bg-seBlue",
      text: "text-thickSeBlue",
    },
    {
      name: "Data Science",
      subtitle:
        "Unlock the power of data with our Data Engineering service. At FayGroup, we transform raw information into valuable insights, fuelling your business decisions with precision and efficiency.",
      image: DS,
      link: "/features/data-science",
      color: "bg-deYellow",
      text: "text-thickDeYellow",
    },
    {
      name: "Strategy Consulting",
      subtitle:
        "At FayGroup, our seasoned experts collaborate with you to strategize, innovate, and optimize your business operations. Your venture is finely tuned for growth and prosperity.",
      image: SC,
      link: "/features/strategy-consulting",
      color: "bg-scBlue",
      text: "text-thickScBlue",
    },
  ];

  return (
    <div className="flex flex-col items-center mb-20">
      <div className="flex flex-col gap-[20px] items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-medium leading-loose">
            SERVICES
          </p>
        </div>

        <p className="text-slate-950 lg:text-4xl text-center px-[10%] text-2xl font-medium leading-9 lg:leading-[44px]">
          Providing <span className="text-red-950">Best Services</span> for
          Every Client
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:gap-0 lg:justify-evenly mt-20 gap-16 px-[5%] lg:px-[10%]">
        {services.map((service, i) => {
          return i >= 3 ? (
            <></>
          ) : (
            <motion.div
            whileHover={{
              scale: 1.05
            }}
              key={i}
              className={`flex flex-col ${service.color} lg:w-[30%] w-full h-[465px] items-center rounded-[12px]`}
            >
              <Image
                src={service.image}
                alt="service image"
                className="w-[60px] h-[60px] mt-16"
              />

              <p
                className={`mt-10 lg:text-2xl text-xl font-medium leading-9 ${service.text}`}
              >
                {service.name}
              </p>

              <p className="mt-5 lg:px-[10%] px-[5%] text-center text-slate-950 text-base font-normal leading-loose">
                {service.subtitle}
              </p>

              <Link
                href={service.link}
                className="mt-5 flex items-center justify-center gap-[10px] text-slate-950"
              >
                <p className="font-[500] leading-loose">Explore More</p>
                <FaArrowRight />
              </Link>
            </motion.div>
          );
        })}
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:gap-0 lg:justify-evenly lg:mt-10 mt-20 gap-16 px-[5%] lg:px-[10%]">
        {services.map((service, i) => {
          return i < 3 ? (
            <></>
          ) : (
            <motion.div
            whileHover={{
              scale: 1.05
            }}
              key={i}
              className={`flex flex-col ${service.color} lg:w-[30%] w-full h-[465px] items-center rounded-[12px]`}
            >
              <Image
                src={service.image}
                alt="service image"
                className="w-[60px] h-[60px] mt-16"
              />

              <p
                className={`mt-10 lg:text-2xl text-xl font-medium leading-9 ${service.text}`}
              >
                {service.name}
              </p>

              <p className={`mt-5 ${i === 4 ? "lg:px-[5%]" : "lg:px-[10%]"} px-[5%] text-center text-slate-950 text-base font-normal leading-loose`}>
                {service.subtitle}
              </p>

              <Link
                href={service.link}
                className="mt-5 flex items-center justify-center gap-[10px] text-slate-950"
              >
                <p className="font-[500] leading-loose">Explore More</p>
                <FaArrowRight />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

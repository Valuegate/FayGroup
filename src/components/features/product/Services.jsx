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

const Services = () => {
  const services = [
    {
      name: "Software Development",
      subtitle:
        "Elevate your business with our exceptional software development service. FayGroup excels at delivering top-notch solutions.",
      image: SD,
      link: "/features/software-development",
      color: "bg-sdOrange",
    },
    {
      name: "UI/UX Design",
      subtitle:
        "Improve your user experience with our impeccable UI/UX Design service. At FayGroup, we create intuitive interfaces and deliver excellence.",
      image: UD,
      link: "/features/ui-ux",
      color: "bg-udGreen",
    },
    {
      name: "Mobile Solutions",
      subtitle:
        "Transform your vision into a dynamic reality with our Mobile App Development service.  Experience the pinnacle of excellence with us.",
      image: MS,
      link: "/features/mobile-solution",
      color: "bg-msRed",
    },
    {
      name: "System Engineering",
      subtitle:
        "Elevate your business standards with our System Engineering service. At FayGroup we guarantees your operations aligns with outstanding quality standards.",
      image: SE,
      link: "/features/system-engineering",
      color: "bg-seBlue",
    },
    {
      name: "Data Science",
      subtitle:
        "Unlock the power of data with our Data Engineering service. At FayGroup, we transform raw information into valuable insights, fuelling your business decisions with precision and efficiency.",
      image: DS,
      link: "/features/data-science",
      color: "bg-deYellow",
    },
    {
      name: "Strategy Consulting",
      subtitle:
        "At FayGroup, our seasoned experts collaborate with you to strategize, innovate, and optimize your business operations. Your venture is finely tuned for growth and prosperity.",
      image: SC,
      link: "/features/strategy-consulting",
      color: "bg-scBlue",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-[15px]">
        <div className="w-[18px]">
          <Image src={Pin} alt="pin" />
        </div>
        <p className="text-maroon text-base font-[600] leading-loose">
          SERVICES
        </p>
      </div>
      <p className="text-slate-950 text-4xl font-[600] leading-[44px]">
        Providing <span className="text-red-950">The Best Service</span> for
        Every Client
      </p>

      <div className="grid grid-cols-3 gap-10 w-[80%] mt-20">
        {services.map((service, i) => {
        
          return (
            <div
              key={i}
              className={`flex flex-col ${service.color} w-[416px] h-[462px] items-center rounded-[12px]`}
            >
              <Image
                src={service.image}
                alt="service image"
                className="w-[60px] h[60px] mt-[54px]"
              />

              <p className="mt-[34px] text-2xl font-[600] leading-9">
                {service.name}
              </p>

              <p className="mt-[20px] px-[40px] text-center text-slate-950 text-base font-normal leading-loose">
                {service.subtitle}
              </p>

              <Link
                href={service.link}
                className="mt-[16px] flex items-center justify-center gap-[10px] text-slate-950"
              >
                <p className="font-[500] leading-loose">Explore More</p>
                <FaArrowRight />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

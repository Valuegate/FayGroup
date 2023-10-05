import React from "react";

import { FaArrowRight } from "react-icons/fa";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import Left from "@/public/assets/landing-page/Left Arrow.svg";
import Right from "@/public/assets/landing-page/Right Arrow.svg";

const Services = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[20px] items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
            SERVICES
          </p>
        </div>

        <p className="text-slate-950 text-4xl sm:text-2xl font-medium sm:leading-9 leading-[44px]">
          Our Provided <span className="text-red-950">Services</span>
        </p>
      </div>

      <div className="flex gap-10 w-full sm:px-0 px-[10%] mt-20 items-center justify-between sm:overflow-x-auto">
        <div className="w-[20%] sm:w-[70%] h-[350px] bg-blandGrey rounded-lg" />
        <div className="w-[20%] sm:w-[70%] h-[350px] bg-blandGrey rounded-lg" />
        <div className="w-[15%] h-[250px] bg-blandGrey rounded-lg" />
        <div className="w-[10%] h-[150px] bg-blandGrey rounded-lg" />
        <div className="w-[15%] h-[250px] bg-blandGrey rounded-lg" />
      </div>

      <div className="flex gap-[20px] mt-5">
        <div>
          <Image src={Left} alt="arrow" className="cursor-pointer" />
        </div>
        <div>
          <Image src={Right} alt="arrow" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Services;

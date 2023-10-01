import React from "react";

import { FaArrowRight } from "react-icons/fa";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import Left from "@/public/assets/landing-page/Left Arrow.svg";
import Right from "@/public/assets/landing-page/Right Arrow.svg";

const Services = () => {
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
        Our Provided <span className="text-red-950">Services</span>
      </p>

      <div className="flex gap-10 w-[75%] mt-20 items-center justify-between">
        <div className="w-[250px] h-[350px] bg-blandGrey rounded-lg" />
        <div className="w-[250px] h-[350px] bg-blandGrey rounded-lg" />
        <div className="w-[200px] h-[250px] bg-blandGrey rounded-lg" />
        <div className="w-[100px] h-[150px] bg-blandGrey rounded-lg" />
        <div className="w-[200px] h-[250px] bg-blandGrey rounded-lg" />
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

import React from "react";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import Left from "@/public/assets/landing-page/Left Arrow.svg";
import Right from "@/public/assets/landing-page/Right Arrow.svg";

const Services = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center">
      <div className="flex flex-col gap-[20px] items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-medium leading-loose">
            SERVICES
          </p>
        </div>

        <p className="text-slate-950 lg:text-4xl text-2xl font-medium leading-9 lg:leading-[44px]">
          Our Provided <span className="text-red-950">Services</span>
        </p>
      </div>

      <div className="flex gap-10 w-full px-[10%] mt-20 items-center justify-between overflow-scroll scrollbar-custom">
        <div className="lg:w-[20%] w-[300px] h-[350px] bg-blandGrey rounded-lg">
          <div className="w-[300px]" />
        </div>
        <div className="lg:w-[20%] w-[300px] h-[350px] bg-blandGrey rounded-lg">
          <div className="w-[300px]" />
        </div>
        <div className="lg:w-[15%] h-[250px] w-[240px] bg-blandGrey rounded-lg">
          <div className="w-[240px]" />
        </div>
        <div className="lg:w-[10%] h-[150px] w-[180px] bg-blandGrey rounded-lg">
          <div className="w-[180px]" />
        </div>
        <div className="lg:w-[15%] h-[250px] w-[240px] bg-blandGrey rounded-lg">
          <div className="w-[240px]" />
        </div>
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

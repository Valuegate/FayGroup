import React from "react";
import TextWithImage from "../reusable/TextWithImage";
import InsightsInfo from "../reusable/InsightsInfo";
import Button from "@/src/components/reusable/Button";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

import SI from "@/public/assets/landing-page/standout/image.svg";
import C1 from "@/public/assets/landing-page/standout/c1.svg";
import C2 from "@/public/assets/landing-page/standout/c2.svg";

const Standout = () => {
  return (
    <div className="sm:flex sm:flex-col">
      <div
        className={`flex w-full gap-[10%] items-center relative py-[5%] px-[10%] sm:px-[5%]`}
      >
        <div className="flex flex-col w-[50%] sm:w-full">
          <div className="flex items-center gap-[15px]">
            <div className="w-[18px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base font-[600] leading-loose">
              ACHIEVE MORE
            </p>
          </div>

          <div className="mt-[3%]" />

          <p className="text-slate-950 text-4xl font-[600] leading-[48px]">
            Why does <span className="text-red-950">FayGroup</span> Standout?
          </p>

          <div className="mt-[5%]" />

          <p className="text-slate-950 text-base font-normal leading-loose">
            As a full-service agency, we work closely with our clients to
            define, consult, design and develop transformative user experiences
            across all platforms and brand’s touchpoints.
          </p>

          <InsightsInfo />

          <Button
            style="sm:w-full text-white mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md w-[160px] text-center hover:bg-extraDarkRed transition ease-in-out duration-200"
            destination={"/contact-us"}
          >
            Get In Touch
          </Button>
        </div>

        <div className="w-full block sm:hidden">
          <StandoutImage />
        </div>
      </div>
      <div className="w-full hidden sm:block">
        <StandoutImage />
      </div>
    </div>
  );
};

export default Standout;

const StandoutImage = () => {
  return (
    <div className="w-[50%] relative">
      <Image src={SI} alt="image" className="" />
      <Image
        src={C1}
        alt="c1"
        className="absolute -z-10 top-0 -right-[3%] w-[30%]"
      />
      <Image
        src={C2}
        alt="c2"
        className="absolute z-10 bottom-0 -left-[3%] w-[20%]"
      />
    </div>
  );
};

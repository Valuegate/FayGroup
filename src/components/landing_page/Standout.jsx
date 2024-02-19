import React from "react";
import InsightsInfo from "@/src/components/reusable/InsightsInfo";
import Button from "@/src/components/reusable/Button";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

import SI from "@/public/assets/landing-page/standout/Standout.svg";

const Standout = () => {
  return (
    <div className="flex flex-col lg:flex-row my-16">
      <div
        className={`flex w-full gap-[10%] items-center pt-10 lg:pb-10 lg:px-[10%] px-[5%]`}
      >
        <div className="flex flex-col lg:w-[50%] w-full">
          <div className="flex items-center gap-[10px]">
            <div className="w-[14px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
              ACHIEVE MORE
            </p>
          </div>

          <p className="text-slate-950 lg:text-4xl mt-5 text-2xl leading-9 font-medium lg:leading-[48px]">
            Why does <span className="text-red-950">FayGroup</span> Standout?
          </p>

          <p className="text-slate-950 mt-5 text-base font-normal leading-loose">
            As a full-service agency, we work closely with our clients to
            define, consult, design and develop transformative user experiences
            across all platforms and brand’s touchpoints.
          </p>

          <InsightsInfo />

          <Button
            style="w-full lg:w-[200px] text-white text-center mt-12 bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200"
            destination={"/contact-us"}
          >
            Get In Touch
          </Button>
        </div>

        <div className="w-[50%] lg:block hidden">
          <Image src={SI} alt="Standout" />
        </div>
      </div>
      <div className="lg:hidden w-full px-[5%] mt-16">
        <Image src={SI} alt="Standout" />
      </div>
    </div>
  );
};

export default Standout;

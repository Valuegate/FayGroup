import React from "react";
import InsightsInfo from "@/src/components/reusable/InsightsInfo";
import Button from "@/src/components/reusable/Button";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

import SI from "@/public/assets/product development/Frame 36182.svg";

const Standout = () => {
  return (
    <div className="sm:flex sm:flex-col">
      <div
        className={`flex w-full gap-[10%] items-center relative py-[5%] px-[10%] sm:px-[5%] bg-slightRedBackground`}
      >
        <div className="w-[50%] block sm:hidden">
          <Image src={SI} alt="Standout" />
        </div>

        <div className="flex flex-col w-[50%] sm:mt-10 sm:w-full">
          <div className="flex items-center gap-[10px]">
            <div className="w-[14px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
              ACHIEVE MORE
            </p>
          </div>

          <div className="mt-[3%]" />

          <p className="text-slate-950 text-4xl sm:text-2xl sm:leading-9 font-medium leading-[48px]">
            Why you should{" "}
            <span className="text-red-950">Choose FayGroup?</span>
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
      </div>
      <div className="w-full hidden sm:block sm:px-[5%] sm:py-[10%]  bg-slightRedBackground">
        <Image src={SI} alt="Standout" />
      </div>
    </div>
  );
};

export default Standout;

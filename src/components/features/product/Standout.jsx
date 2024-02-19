import React from "react";
import InsightsInfo from "@/src/components/reusable/InsightsInfo";
import Button from "@/src/components/reusable/Button";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

import SI from "@/public/assets/product development/Frame 36182.svg";

const Standout = () => {
  return (
    <div className="flex flex-col mt-20">
      <div
        className={`flex w-full gap-[10%] items-center relative py-20 lg:px-[10%] px-[5%] bg-slightRedBackground`}
      >
        <div className="lg:w-[50%] lg:block hidden">
          <Image src={SI} alt="Standout" />
        </div>

        <div className="flex flex-col lg:w-[50%]  w-full">
          <div className="flex items-center gap-[10px]">
            <div className="w-[14px]">  
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base font-medium leading-loose">
              ACHIEVE MORE
            </p>
          </div>

          <p className="text-slate-950 lg:text-4xl mt-5 text-2xl leading-9 font-medium lg:leading-[48px]">
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
            style="w-full text-white mt-12 bg-darkBlue px-5 py-3 font-[500] rounded-md lg:w-[200px] text-center hover:bg-extraDarkRed transition ease-in-out duration-200"
            destination={"/contact-us"}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      <div className="w-full lg:hidden px-[5%] pb-20 bg-slightRedBackground">
        <Image src={SI} alt="Standout" />
      </div>
    </div>
  );
};

export default Standout;

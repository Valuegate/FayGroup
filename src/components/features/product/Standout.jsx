import React from "react";
import Button from "@/src/components/reusable/Button";
import InsightsInfo from "../../reusable/InsightsInfo";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

import SI from "@/public/assets/product development/Frame 36182.png";

const Standout = () => {
  return (
    <>
      <div
        className={`flex w-full gap-[10%] items-center relative py-[5%] px-[10%] bg-slightRedBackground`}
      >
        <div className="w-[50%] block sm:hidden">
          <Image src={SI} alt="Standout" />
        </div>

        <div className="flex flex-col w-[50%]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[18px]">
              <Image src={Pin} alt="pin" />
            </div>
            <div className="text-maroon text-base font-[600] leading-loose">
              ACHIEVE MORE
            </div>
          </div>

          <div className="mt-[3%]" />

          <div className="text-slate-950 text-4xl font-[600] leading-[48px]">
            Why you should{" "}
            <span className="text-red-950">Choose FayGroup?</span>
          </div>

          <div className="mt-[5%]" />

          <div className="text-slate-950 text-base font-normal leading-loose">
            As a full-service agency, we work closely with our clients to
            define, consult, design and develop transformative user experiences
            across all platforms and brand’s touchpoints.
          </div>

          <InsightsInfo />

          <Button style="text-white text-center mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md w-[160px] hover:bg-extraDarkRed transition ease-in-out duration-200" destination="/contact-us">
            Get In Touch
          </Button>
        </div>
      </div>
    </>
  );
};

export default Standout;


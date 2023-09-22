import React from "react";
import TextWithImage from "../reusable/TextWithImage";
import InsightsInfo from "./InsightsInfo";
import Button from "@/src/components/reusable/Button";

const Standout = () => {
  return (
    <>
      <div
        className={`flex w-full gap-[10%] items-center relative py-[5%] px-[10%]`}
      >
        <div className="flex flex-col w-[50%]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[18px]">
              <img src="./Pin.svg" alt="pin" />
            </div>
            <div className="text-maroon text-base font-[600] leading-loose">
              ACHIEVE MORE
            </div>
          </div>

          <div className="mt-[3%]" />

          <div className="text-slate-950 text-4xl font-[600] leading-[48px]">
            Why does <span className="text-red-950">FayGroup</span> Standout?
          </div>

          <div className="mt-[5%]" />

          <div className="text-slate-950 text-base font-normal leading-loose">
            As a full-service agency, we work closely with our clients to
            define, consult, design and develop transformative user experiences
            across all platforms and brand’s touchpoints.
          </div>

          <InsightsInfo />

          <Button style="text-white mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md w-[160px] hover:bg-extraDarkRed">
            Get In Touch
          </Button>
        </div>

        <StandoutImage />
      </div>
    </>
  );
};

export default Standout;

const StandoutImage = () => {
  return (
    <div className="w-[50%] relative">
      <img src="./landing-page/standout/image.svg" alt="image" className="" />
      <img
        src="./landing-page/standout/c1.svg"
        alt="c1"
        className="absolute -z-10 top-0 -right-[3%] w-[30%]"
      />
      <img
        src="./landing-page/standout/c2.svg"
        alt="c2"
        className="absolute z-10 bottom-0 -left-[3%] w-[20%]"
      />
    </div>
  );
};

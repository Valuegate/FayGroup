import React from "react";
import EllipseStack from "./EllipseStack";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

const Purpose = () => {
  return (
    <div className="flex sm:flex-col justify-between bg-blandGrey pt-[60px] pb-[90px] sm:px-[5%] px-[10%] w-full">
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
            ACHIEVE MORE
          </p>
        </div>

        <p className="text-slate-950 text-4xl sm:text-2xl font-medium sm:leading-9 leading-[48px] w-[320px] sm:w-full">
          Purpose of a convoy is to keep{" "}
          <span className="text-red-950">FayGroup</span>
        </p>
      </div>

      <div className="flex justify-between items-start gap-10 sm:mt-10">
        <EllipseStack />
        <div className="flex flex-col gap-5 sm:gap-2 sm:w-[90%]">
          <p className="text-black text-base font-medium sm:text-xl sm:leading-10 leading-loose">
            Built for impact
          </p>
          <p className="w-[307px] sm:w-full text-slate-950 text-base font-normal leading-loose">
            Our focus is not only on crafting cutting-edge digital solutions but
            also on ensuring that every project we undertake leaves a lasting
            mark.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-start gap-10 sm:mt-10">
        <EllipseStack />
        <div className="flex flex-col gap-5 sm:gap-2 sm:w-[90%]">
          <p className="text-black text-base font-medium sm:text-xl sm:leading-10 leading-loose">
            Empowering Innovation
          </p>
          <p className="w-[307px] sm:w-full text-slate-950 text-base font-normal leading-loose">
            Our team will work hand in hand with your organization to understand
            your unique needs, challenges, and goals to drive growth and
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Purpose;

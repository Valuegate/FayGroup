import React from "react";
import EllipseStack from "./EllipseStack";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

const Purpose = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-blandGrey pt-20 pb-20 sm:px-[5%] px-[10%] w-full">
      <div className="flex flex-col gap-[12px] lg:w-[30%] w-full">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
            ACHIEVE MORE
          </p>
        </div>

        <p className="text-slate-950 lg:text-4xl text-2xl font-medium leading-9 lg:leading-[48px]">
          Connect for more: your success,
          <span className="text-red-950"> our business</span>!
        </p>
      </div>

      <div className="flex justify-between items-start gap-10 mt-10 lg:mt-0 lg:w-[30%] w-full">
        {/* <EllipseStack /> */}
        <div className="flex flex-col gap-5 sm:gap-2">
          <p className="text-black text-base font-medium sm:text-xl sm:leading-10 leading-loose">
            Built for impact
          </p>
          <p className="w-full text-slate-950 text-base font-normal leading-loose">
            Our focus is not only on crafting cutting-edge digital solutions but
            also on ensuring that every project we undertake leaves a lasting
            mark.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-start gap-10 mt-10 lg:mt-0 lg:w-[30%] w-full">
        {/* <EllipseStack /> */}
        <div className="flex flex-col gap-5 sm:gap-2">
          <p className="text-black text-base font-medium sm:text-xl sm:leading-10 leading-loose">
            Empowering Innovation
          </p>
          <p className="w-full text-slate-950 text-base font-normal leading-loose">
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

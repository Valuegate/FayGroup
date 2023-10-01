import React from "react";
import EllipseStack from "./EllipseStack";

import Image from 'next/image';
import Pin from '@/public/assets/Pin.svg';

const Purpose = () => {
  return (
    <div className="flex justify-between bg-blandGrey pt-[60px] pb-[90px] px-[200px] w-full">
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[18px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-[600] leading-loose">
            ACHIEVE MORE
          </p>
        </div>

        <p className="text-slate-950 text-4xl font-[600] leading-[48px] w-[320px]">
          Purpose of a convoy is to keep{" "}
          <span className="text-red-950">FayGroup</span>
        </p>
      </div>

      <div className="flex items-start gap-[30px]">
        <EllipseStack />
        <div className="flex flex-col gap-[17px]">
          <p className="text-black text-base font-[800] leading-loose">
            Built for impact
          </p>
          <p className="w-[307px] text-slate-950 text-base font-normal leading-loose">
            Our focus is not only on crafting cutting-edge digital solutions but
            also on ensuring that every project we undertake leaves a lasting
            mark.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-[30px]">
        <EllipseStack />
        <div className="flex flex-col gap-[17px]">
          <p className="text-black text-base font-[800] leading-loose">
            Empowering Innovation
          </p>
          <p className="w-[307px] text-slate-950 text-base font-normal leading-loose">
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

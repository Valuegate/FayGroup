import React from "react";
import EllipseStack from "./EllipseStack";

const Purpose = () => {
  return (
    <div className="flex justify-between bg-blandGrey pt-[60px] pb-[90px] px-[200px] w-full">
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[18px]">
            <img src="./Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            ACHIEVE MORE
          </div>
        </div>

        <div className="text-slate-950 text-4xl font-[600] leading-[48px] w-[320px]">
          Purpose of a convoy is to keep{" "}
          <span className="text-red-950">FayGroup</span>
        </div>
      </div>

      <div className="flex items-start gap-[30px]">
        <EllipseStack />
        <div className="flex flex-col gap-[17px]">
          <div className="text-black text-base font-[800] leading-loose">
            Built for impact
          </div>
          <div className="w-[307px] text-slate-950 text-base font-normal leading-loose">
            Our focus is not only on crafting cutting-edge digital solutions but
            also on ensuring that every project we undertake leaves a lasting
            mark.
          </div>
        </div>
      </div>

      <div className="flex items-start gap-[30px]">
        <EllipseStack />
        <div className="flex flex-col gap-[17px]">
          <div className="text-black text-base font-[800] leading-loose">
            Empowering Innovation
          </div>
          <div className="w-[307px] text-slate-950 text-base font-normal leading-loose">
            Our team will work hand in hand with your organization to understand
            your unique needs, challenges, and goals to drive growth and
            efficiency.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;

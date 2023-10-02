import React from "react";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";
import Pen from "@/public/assets/Pen.svg";
import Rectangle from "@/public/assets/ui-ux/Rectangle 1.png";

import Button from "../../reusable/Button";

const Design = () => {
  return (
    <div
      className={`flex w-full gap-[10%] items-center bg-slightRedBackground py-[5%] px-[10%]`}
    >
      <div className="w-[50%]">
        <Image src={Rectangle} alt="image" />
      </div>

      <div className="flex flex-col w-[50%] justify-start items-start">
        <div className="flex items-center gap-[15px]">
          <div className="w-[18px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-[600] leading-loose">
            SERVICES
          </p>
        </div>

        <div className="mt-[3%]" />
        <p className="text-slate-950 text-4xl font-[600] leading-[48px]">
          These are the <span className="text-red-950">Design Services</span> we
          Provide
        </p>
        <div className="mt-[3%]" />
        <p className="text-slate-950 text-base font-normal leading-loose">
          We are idea generators, goal seekers, challenge-thirty proffessionals,
          creators of unique internet project.
        </p>
        <div className="mt-[5%]" />

        <div className="flex justify-between mb-[5%] items-start gap-5">
          <Image src={Pen} alt="Pen" className="w-[35px]" />
          <div className="flex flex-col">
            <p className="text-slate-950 text-xl font-medium leading-loose">
              Research
            </p>
            <p className="text-slate-950 text-base font-normal leading-loose">
              Unlock deep insights and transform your design process with
              efficient research.
            </p>
          </div>
        </div>

        <div className="flex justify-between mb-[5%] items-start gap-5">
          <Image src={Pen} alt="Pen" className="w-[35px]" />
          <div className="flex flex-col">
            <p className="text-slate-950 text-xl font-medium leading-loose">
              Design
            </p>
            <p className="text-slate-950 text-base font-normal leading-loose">
              Creating digital experiences that are nothing short of exceptional
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-[5%] items-start gap-5">
          <Image src={Pen} alt="Pen" className="w-[35px]" />
          <div className="flex flex-col">
            <p className="text-slate-950 text-xl font-medium leading-loose">
              Prototyping
            </p>
            <p className="text-slate-950 text-base font-normal leading-loose">
              Turn your vision into reality with our Prototyping service,
              creating interactive and user-friendly designs.
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-[5%] items-start gap-5">
          <Image src={Pen} alt="Pen" className="w-[35px]" />
          <div className="flex flex-col">
            <p className="text-slate-950 text-xl font-medium leading-loose">
              Branding
            </p>
            <p className="text-slate-950 text-base font-normal leading-loose">
              Enhance your brand's identity and user experience with our UI/UX
              Branding service, ensuring a memorable and cohesive design.
            </p>
          </div>
        </div>

        <Button style="text-white text-center mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md w-[160px] hover:bg-extraDarkRed" destination="/contact-us">
          Get In Touch
        </Button>
      </div>
    </div>
  );
};

export default Design;

import React from "react";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";
import Pen from "@/public/assets/Pen.svg";
import Rectangle from "@/public/assets/ui-ux/Rectangle 1.png";

import Button from "../../reusable/Button";

const Design = () => {
  return (
    <div
      className={`flex w-full sm:flex-col gap-[10%] items-center bg-slightRedBackground py-[5%] sm:px-[5%]  px-[10%]`}
    >
      <div className="w-[50%] sm:hidden">
        <Image src={Rectangle} alt="image" />
      </div>

      <div className="flex flex-col w-[50%] justify-start items-start sm:w-full">
        <div className="flex flex-col gap-[20px] items-start sm:mt-10">
          <div className="flex items-center gap-[10px]">
            <div className="w-[14px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
              SERVICES
            </p>
          </div>

          <p className="text-slate-950 text-4xl sm:text-2xl font-medium sm:leading-9 leading-[44px]">
            These are the <span className="text-red-950">Design Services</span>{" "}
            we Provide
          </p>
        </div>

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
          <div className="flex flex-col items-start">
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

        <Button
          style="text-white sm:w-full text-center mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md w-[160px] hover:bg-extraDarkRed transition ease-in-out duration-200"
          destination="/contact-us"
        >
          Get In Touch
        </Button>
      </div>

      <div className="sm:block mt-10 mb-10">
        <Image src={Rectangle} alt="image" />
      </div>
    </div>
  );
};

export default Design;

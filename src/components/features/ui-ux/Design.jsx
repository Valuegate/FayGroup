import React from "react";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";
import Pen from "@/public/assets/Pen.svg";
import Rectangle from "@/public/assets/ui-ux/Rectangle 1.svg";

import Button from "../../reusable/Button";

const Design = () => {
  return (
    <div
      className={`flex w-full flex-col lg:flex-row gap-[10%] items-center bg-slightRedBackground py-[5%] sm:px-[5%] mt-20  px-[10%]`}
    >
      <div className="lg:w-[50%] lg:block hidden">
        <Image src={Rectangle} alt="image" />
      </div>

      <div className="flex flex-col lg:w-[50%] justify-start items-start w-full">
        <div className="flex flex-col gap-[20px] items-start lg:mt-0 mt-10">
          <div className="flex items-center gap-[10px]">
            <div className="w-[14px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base font-medium leading-loose">
              SERVICES
            </p>
          </div>

          <p className="text-slate-950 lg:text-4xl text-2xl font-medium leading-9 lg:eading-[44px]">
            These are the <span className="text-red-950">Design Services</span>{" "}
            we Provide
          </p>
        </div>

        <p className="text-slate-950 mt-5 text-base font-normal leading-loose">
          We are idea generators, goal seekers, challenge-thirty proffessionals,
          creators of unique internet project.
        </p>
        

        <div className="flex justify-between my-[5%] items-start gap-5">
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
          style="text-white w-full text-center mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md lg:w-[200px] hover:bg-extraDarkRed transition ease-in-out duration-200"
          destination="/contact-us"
        >
          Get In Touch
        </Button>
      </div>

      <div className="lg:hidden my-10">
        <Image src={Rectangle} alt="image" />
      </div>
    </div>
  );
};

export default Design;

import React from "react";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import Frame from "@/public/assets/ui-ux/Frame 60.svg";

import one from "@/public/assets/ui-ux/Frame 36189.svg";
import two from "@/public/assets/ui-ux/Frame 36190.svg";
import three from "@/public/assets/ui-ux/Frame 36191.svg";
import four from "@/public/assets/ui-ux/Frame 36192.svg";
import five from "@/public/assets/ui-ux/Frame 36193.svg";

const Services = () => {
  const images = [one, two, three, four, five];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[10px] items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-medium leading-loose">
            SERVICES
          </p>
        </div>

        <p className="text-slate-950 lg:text-4xl text-2xl font-medium leading-9 lg:leading-[44px]">
          Our <span className="text-red-950">Design Process</span>
        </p>
      </div>
      <Image src={Frame} alt="frame" className="lg:w-[80%] lg:block my-20 hidden" />
      <div className="lg:hidden w-full gap-2 flex flex-col items-center mt-10">
        {images.map((image, i) => {
          return <Image key={i} src={image} alt="design process image" className="w-[50%]"/>;
        })}
      </div>
    </div>
  );
};

export default Services;

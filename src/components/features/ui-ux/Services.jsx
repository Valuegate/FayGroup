import React from "react";


import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import Frame from "@/public/assets/ui-ux/Frame 60.svg";


const Services = () => {
  

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-[15px]">
        <div className="w-[18px]">
          <Image src={Pin} alt="pin" />
        </div>
        <p className="text-maroon text-base font-[600] leading-loose">
          SERVICES
        </p>
      </div>
      <p className="text-slate-950 text-4xl font-[600] leading-[44px]">
        Our <span className="text-red-950">Design Process</span>
      </p>
      <Image src={Frame} alt="frame" className="w-[80%] mt-20"/>
    </div>
  );
};

export default Services;

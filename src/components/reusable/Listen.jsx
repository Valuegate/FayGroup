import React from "react";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

import HappyMan from "@/public/assets/landing-page/Listen.svg";
import Client from "@/public/assets/landing-page/Client Image.svg";
import Stars from "@/public/assets/landing-page/Stars.svg";

import Left from "@/public/assets/landing-page/Left Arrow.svg";
import Right from "@/public/assets/landing-page/Right Arrow.svg";

const Listen = () => {
  return (
    <div className="sm:flex sm:flex-col">
      <div className="flex w-full items-center px-[10%] sm:px-[5%] gap-[10%] bg-slightRedBackground">
        <Image src={HappyMan} alt="Happy Man" className="w-[50%] sm:hidden" />

        <div className="flex flex-col w-[50%] sm:w-full sm:mt-20">
          <div className="flex flex-col gap-[20px] items-start">
            <div className="flex items-center gap-[10px]">
              <div className="w-[14px]">
                <Image src={Pin} alt="pin" />
              </div>
              <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
                TESTIMONIALS
              </p>
            </div>

            <p className="text-slate-950 text-4xl sm:text-2xl font-medium sm:leading-9 leading-[44px]">
              Listen to what <span className="text-red-950">Our Clients</span>{" "}
              say
            </p>
          </div>

          <div className="mt-[5%]" />

          <p className="text-slate-950 text-base font-normal leading-loose">
            “Our website has transformed from a good to the best. We are super
            thrilled about our new website! They don’t act like a typical
            agency, they are more like on honest business partner who is truly
            invested.”
          </p>

          <div className="mt-[29px] flex gap-2 items-start sm:w-full">
            <Image src={Client} alt="client" className="w-[20%]"/>

            <div className="flex flex-col justify-between items-start">
              <p className="text-slate-950 sm:text-xl text-2xl font-medium sm:leading-10 leading-9">
                Olagunju David
              </p>
              <p className="text-slate-950 text-base font-normal leading-loose">
                CEO of Digitata
              </p>
            </div>
            <Image src={Stars} alt="client" className="w-[30%] sm:w-[25%] sm:mt-3"/>
          </div>

          <div className="mt-[5%]" />

          <div className="flex gap-[20px] sm:justify-center">
            <div>
              <Image src={Left} alt="arrow" className="cursor-pointer" />
            </div>
            <div>
              <Image src={Right} alt="arrow" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block sm:w-full sm:px-[5%] bg-slightRedBackground">
        <Image src={HappyMan} alt="HappyMan" className="sm:mt-10 sm:mb-10" />
      </div>
    </div>
  );
};

export default Listen;

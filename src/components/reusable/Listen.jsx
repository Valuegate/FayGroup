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
    <div className="flex w-full items-center pr-[10%] gap-[10%] bg-slightRedBackground">
      <Image src={HappyMan} alt="Happy Man"  className="w-[50%]"/>

      <div className="flex flex-col w-[50%]">
        <div className="flex items-center gap-[15px]">
          <div className="w-[18px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-[600] leading-loose">
            TESTIMONIALS
          </p>
        </div>

        <div className="mt-[3%]" />

        <div className="flex gap-[10px] w-full">
          <p className="text-slate-950 text-4xl font-[600] leading-[48px]">
            Listen to what
          </p>
          <p className="text-red-950 text-4xl font-[600] leading-[48px]">
            Our Clients
          </p>
          <p className="text-slate-950 text-4xl font-[600] leading-[48px]">
            say
          </p>
        </div>

        <div className="mt-[5%]" />

        <p className="text-slate-950 text-base font-normal leading-loose">
          “Our website has transformed from a good to the best. We are super
          thrilled about our new website! They don’t act like a typical agency,
          they are more like on honest business partner who is truly invested.”
        </p>

        <div className="mt-[29px] flex gap-[20px] items-start">
          <div>
            <Image src={Client} alt="client" />
          </div>

          <div className="flex flex-col justify-between items-start">
            <p className="text-slate-950 text-2xl font-[600] leading-9">
              Olagunju David
            </p>
            <p className="text-slate-950 text-base font-[400] leading-loose">
              CEO of Digitata
            </p>
          </div>
          <div>
            <Image src={Stars} alt="client" />
          </div>
        </div>

        <div className="mt-[5%]" />

        <div className="flex gap-[20px]">
          <div>
            <Image src={Left} alt="arrow" className="cursor-pointer"/>
          </div>
          <div>
            <Image src={Right} alt="arrow" className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listen;


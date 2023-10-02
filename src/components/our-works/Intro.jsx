import React from "react";
import Nav from "../reusable/Nav";
import Link from "next/link";
import Button from "../reusable/Button";
import { FaArrowRight } from "react-icons/fa";

import Image from "next/image";

import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import One from "@/public/assets/our-works/One.svg";
import Two from "@/public/assets/our-works/Two.svg";
import Three from "@/public/assets/our-works/Three.svg";
import Four from "@/public/assets/our-works/Four.svg";

const Intro = () => {
  return (
    <div className="relative mb-[100px] bg-slightRedBackground">
      <Image
        src={Shadow}
        alt=""
        className="absolute top-0 left-0 -z-10 w-full h-[50%]"
      />
      <Nav active={2} />
      <div className="absolute z-10 top-[30%] right-[15%]">
        <Image src={One} alt="one" className="" />
      </div>
      <div className="absolute z-10 top-[30%] left-[15%]">
        <Image src={Two} alt="one" className="" />
      </div>

      <div className="absolute z-10 top-[65%] left-[25%]">
        <Image src={Three} alt="one" className="" />
      </div>

      <div className="absolute z-10 top-[65%] right-[25%]">
        <Image src={Four} alt="one" className="" />
      </div>

      <div className="mt-[150px] flex flex-col items-center relative">
        <div className="flex items-center gap-[10px]">
          <div className="w-[18px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-[600] leading-loose">
            OUR WORKS
          </p>
        </div>

        <p className="text-slate-950 text-4xl font-[600] w-[30%] leading-[48px] mt-5 text-center">
          Unlock our Portfolio of Past{" "}
          <span className="text-red-950">Tech Triumphs</span>
        </p>

        <p className="text-normal w-[40%] mt-[10px] text-center">
          Explore a showcase of our remarkable past projects, where ideas have
          transformed into extraordinary tech solutions. Our commitment to
          innovation and excellence shines through every venture.
        </p>

        <div className="flex justify-start items-center gap-[20px] mt-[25px]">
          <Button style="text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200" destination={"/contact-us"}>
            Get In Touch
          </Button>
          <Button style="text-darkBlue bg-blandGrey px-5 py-3 font-[500] rounded-md">
            Explore More
          </Button>
        </div>
      </div>

      <div className="h-[200px]" />
    </div>
  );
};

export default Intro;

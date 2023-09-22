import React from "react";
import Nav from "../reusable/Nav";
import Link from "next/link";
import Button from "../reusable/Button";
import { FaArrowRight } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="relative mb-[200px]">
      <img
        src="./shadow.svg"
        alt=""
        className="absolute top-0 left-0 -z-10 w-full h-[50%]"
      />
      <Nav active={2} />
      <div className="absolute z-10 top-[30%] right-[15%]">
        <img src="./our-works/One.svg" alt="one" className="" />
      </div>
      <div className="absolute z-10 top-[30%] left-[15%]">
        <img src="./our-works/Two.svg" alt="one" className="" />
      </div>

      <div className="absolute z-10 top-[85%] left-[25%]">
        <img src="./our-works/Three.svg" alt="one" className="" />
      </div>

      <div className="absolute z-10 top-[85%] right-[25%]">
        <img src="./our-works/Four.svg" alt="one" className="" />
      </div>

      <div className="mt-[150px] flex flex-col items-center relative">
        <div className="flex items-center gap-[10px]">
          <div className="w-[18px]">
            <img src="./Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            OUR WORKS
          </div>
        </div>

        <div className="text-slate-950 text-4xl font-[600] w-[30%] leading-[48px] mt-5 text-center">
          Unlock our Portfolio of Past{" "}
          <span className="text-red-950">Tech Triumphs</span>
        </div>

        <div className="text-normal w-[40%] mt-[10px] text-center">
          Explore a showcase of our remarkable past projects, where ideas have
          transformed into extraordinary tech solutions. Our commitment to
          innovation and excellence shines through every venture.
        </div>

        <div className="flex justify-start items-center gap-[20px] mt-[25px]">
          <Button style="text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed">
            Get In Touch
          </Button>
          <Button style="text-darkBlue bg-blandGrey px-5 py-3 font-[500] rounded-md">
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;

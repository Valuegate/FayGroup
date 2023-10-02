import React from "react";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import Button from "../../reusable/Button";
import { FaArrowRight } from "react-icons/fa";

import one from "@/public/assets/ui-ux/Rectangle 4.png";
import two from "@/public/assets/ui-ux/Rectangle 4-1.png";

const Projects = () => {
  const projects = [one, two, one];

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-[15px]">
        <div className="w-[18px]">
          <Image src={Pin} alt="pin" />
        </div>
        <p className="text-maroon text-base font-[600] leading-loose">
          Portfolio
        </p>
      </div>
      <p className="text-slate-950 text-4xl font-[600] leading-[44px]">
        Our Latest <span className="text-red-950">Projects</span>
      </p>
      <div className="flex mt-5 mb-10 justify-around items-center w-[80%]">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="opacity-80 text-center text-slate-950 text-base font-normal leading-loose"
            >
              <Image src={project} alt="Project Image" className="w-[100%]" />
            </div>
          );
        })}
      </div>
      <Button style="text-white mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md flex gap-2 items-center hover:bg-extraDarkRed transition ease-in-out duration-200">
        Explore More
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default Projects;

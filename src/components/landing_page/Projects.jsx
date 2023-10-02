import React from "react";

import Button from "@/src/components/reusable/Button";
import { FaArrowRight } from "react-icons/fa";

import Image from 'next/image';
import Pin from "@/public/assets/Pin.svg";

import Project1 from "@/public/assets/landing-page/Project 1.png";
import Project2 from "@/public/assets/landing-page/Project 2.png";
import Project3 from "@/public/assets/landing-page/Project 3.png";

const Projects = () => {
  const titles = [
    "UI Design",
    "Web Development",
    "Mobile App",
    "SEO",
    "Branding",
  ];

  const projects = [
    Project1,
    Project2,
    Project3,
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[20px] items-center">
        <div className="flex items-center gap-[15px]">
          <div className="w-[18px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-[600] leading-loose">
            Portfolio
          </p>
        </div>

        <div className="flex gap-[10px]">
          <p className="text-slate-950 text-4xl font-[600] leading-[44px]">
            Our Latest
          </p>
          <p className="text-red-950 text-4xl font-[600] leading-[44px]">
            Projects
          </p>
        </div>
      </div>

      <div className="mt-[40px] flex items-center justify-center gap-[99px]">
        {titles.map((title, i) => {
          return (
            <p
              key={i}
              className={`opacity-80 text-center ${
                i == 0 ? "text-maroon font-[700]" : "text-slate-950"
              } text-base font-normal leading-loose`}
            >
              {title}
            </p>
          );
        })}
      </div>
      <div className="flex gap-[40px] mt-[20px] mb-[67px] items-center px-[200px]">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="opacity-80 text-center text-slate-950 text-base font-normal leading-loose"
            >
              <Image src={project} alt="Project Image" />
            </div>
          );
        })}
      </div>
      <Button style="text-white mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md flex gap-2 items-center hover:bg-extraDarkRed" destination={"/contact-us"}>
        Get In Touch
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default Projects;

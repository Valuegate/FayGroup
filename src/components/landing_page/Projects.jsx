import React from "react";

import Button from "@/src/components/reusable/Button";
import { FaArrowRight } from "react-icons/fa";

import Image from "next/image";
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

  const projects = [Project1, Project2, Project3];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[20px] items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
            Portfolio
          </p>
        </div>

        <p className="text-slate-950 text-4xl sm:text-2xl font-medium sm:leading-9 leading-[44px]">
          Our Latest <span className="text-red-950">Projects</span>
        </p>
      </div>

      <div className="mt-20 sm:overflow-x-auto sm:w-full sm:px-[5%] flex items-center gap-20">
        {titles.map((title, i) => {
          return (
            <p
              key={i}
              className={`opacity-80 cursor-pointer text-center
              
              ${
                i == 0 ? "text-maroon font-medium" : "text-slate-950 font-normal"
              } 
              
              
              text-base`}
            >
              {title}
            </p>
          );
        })}
      </div>
      <div className="flex sm:flex-col gap-10 mt-10 mb-30 items-center px-[10%] sm:px-[5%]">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="opacity-80 text-center text-slate-950 text-base font-normal leading-loose"
            >
              <Image src={project} alt="Project Image" className="sm:w-full" />
            </div>
          );
        })}
      </div>
      <Button
        style="text-white mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md flex gap-2 items-center hover:bg-extraDarkRed transition ease-in-out duration-200"
        destination={"/our-works"}
      >
        Explore More
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default Projects;

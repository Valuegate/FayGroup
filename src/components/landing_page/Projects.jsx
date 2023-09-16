import React from "react";

import Button from "@/src/components/reusable/Button";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const titles = [
    "UI Design",
    "Web Development",
    "Mobile App",
    "SEO",
    "Branding",
  ];

  const projects = [
    "./LandingPage/Project 1.png",
    "./LandingPage/Project 2.png",
    "./LandingPage/Project 3.png",
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[20px] items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[18px]">
            <img src="./LandingPage/Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            Portfolio
          </div>
        </div>

        <div className="flex gap-[10px]">
          <div className="text-slate-950 text-4xl font-[600] leading-[44px]">
            Our Latest
          </div>
          <div className="text-red-950 text-4xl font-[600] leading-[44px]">
            Projects
          </div>
        </div>
      </div>

      <div className="mt-[40px] flex items-center justify-center gap-[99px]">
        {titles.map((titles, i) => {
          return (
            <div
              key={i}
              className={`opacity-80 text-center ${
                i == 0 ? "text-extraDarkRed" : "text-slate-950"
              } text-base font-normal leading-loose`}
            >
              {titles}
            </div>
          );
        })}
      </div>
      <div className="flex gap-[40px] py-[67px] items-center px-[200px]">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="opacity-80 text-center text-slate-950 text-base font-normal leading-loose"
            >
              <img src={project} alt="Project Image" />
            </div>
          );
        })}
      </div>
      <Button style="text-white mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md flex gap-2 items-center">
        Get In Touch
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default Projects;

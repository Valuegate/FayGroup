"use client";

import React from "react";

import { useState } from "react";

import Button from "@/src/components/reusable/Button";
import { FaArrowRight } from "react-icons/fa";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

import Project1 from "@/public/assets/landing-page/Project 1.svg";
import Project2 from "@/public/assets/landing-page/Project 2.svg";
import Project3 from "@/public/assets/landing-page/Project 3.svg";

const Projects = () => {
  const projects = [Project1, Project2, Project3];
  const [active, setActive] = useState(0);
  const selectTab = (index) => setActive(index);

  const children = [
    <>
      {active == 0 && (
        <div
          key={0}
          className="flex flex-col lg:flex-row gap-10 my-16 items-center lg:px-[10%] px-[5%]"
        >
          {projects.map((project, i) => {
            return (
              <div key={i}>
                <Image
                  src={project}
                  alt="Project Image"
                />
              </div>
            );
          })}
        </div>
      )}
      ,
    </>,
  ];

  return (
    <div
      className="flex flex-col items-center mt-20"
      id="landing-page-projects"
    >
      <div className="flex items-center gap-[10px]">
        <div className="w-[14px]">
          <Image src={Pin} alt="pin" />
        </div>
        <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
          PORTFOLIO
        </p>
      </div>

      <p className="text-slate-950 mt-5 lg:text-4xl text-2xl font-medium leading-9 lg:leading-[44px]">
        Our Latest <span className="text-red-950">Projects</span>
      </p>

      <div className="w-full flex lg:justify-center lg:items-center overflow-x-auto scrollbar-custom px-[5%]">
        <button
          key={6000}
          onClick={() => selectTab(0)}
          className={` p-4 border-b-2 border-transparent ${
            active == 0 && "text-maroon border-maroon"
          } rounded-t-lg hover:text-maroon lg:w-[180px] w-[250px]`}
        >
          UI Design
        </button>
        <button
          key={6100}
          onClick={() => selectTab(1)}
          className={`inline-block p-4 border-b-2 border-transparent ${
            active == 1 && "text-maroon border-maroon"
          } rounded-t-lg hover:text-maroon w-[200px]`}
        >
          Web Development
        </button>

        <button
          key={6200}
          onClick={() => selectTab(2)}
          className={`inline-block p-4 border-b-2 ${
            active == 2 && "text-maroon border-maroon"
          } border-transparent rounded-t-lg hover:text-maroon w-[150px]`}
        >
          Mobile App
        </button>

        <button
          key={6300}
          onClick={() => selectTab(3)}
          className={`inline-block p-4 border-b-2 ${
            active == 3 && "text-maroon border-maroon"
          } border-transparent rounded-t-lg hover:text-maroon w-[80px]`}
        >
          SEO
        </button>

        <button
          key={6400}
          onClick={() => selectTab(4)}
          className={`inline-block p-4 border-b-2 ${
            active == 4 && "text-maroon border-maroon"
          } border-transparent rounded-t-lg hover:text-maroon w-[120px]`}
        >
          Branding
        </button>
      </div>

      <div key={active}>{children}</div>

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

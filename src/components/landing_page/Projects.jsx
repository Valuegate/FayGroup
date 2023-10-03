"use client";

import React from "react";

import { useState } from "react";

import Button from "@/src/components/reusable/Button";
import { FaArrowRight } from "react-icons/fa";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

import Project1 from "@/public/assets/landing-page/Project 1.png";
import Project2 from "@/public/assets/landing-page/Project 2.png";
import Project3 from "@/public/assets/landing-page/Project 3.png";

const Projects = () => {
  const projects = [Project1, Project2, Project3];
  const [active, setActive] = useState(0);
  const selectTab = (index) => setActive(index);

  const children = [
    <>
      {active == 0 && (
        <div key={0} className="flex sm:flex-col gap-5 mt-10 mb-30 items-center px-[10%] sm:px-[5%]">
          {projects.map((project, i) => {
            return (
              <div
                key={i}
                className=""
              >
                <Image
                  src={project}
                  alt="Project Image"
                  className="sm:w-full"
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

      <div className="sm:w-full sm:overflow-x-auto scrollbar-custom sm:px-[5%]">
        <ul
          className="flex text-sm leading-loose sm:w-full font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li role="presentation">
            <button
              onClick={() => selectTab(0)}
              className={`inline-block p-4 border-b-2 border-transparent ${
                active == 0 && "text-maroon border-maroon"
              } rounded-t-lg hover:text-maroon w-[150px] sm:w-[100px]`}
              id="design-tab"
              data-tabs-target="#design"
              type="button"
              role="tab"
              aria-controls="design"
              aria-selected="true"
            >
              UI Design
            </button>
          </li>
          <li role="presentation">
            <button
              onClick={() => selectTab(1)}
              className={`inline-block p-4 border-b-2 border-transparent ${
                active == 1 && "text-maroon border-maroon"
              } rounded-t-lg hover:text-maroon sm:w-[150px] w-[180px]`}
              id="web-tab"
              data-tabs-target="#web"
              type="button"
              role="tab"
              aria-controls="web"
              aria-selected="false"
            >
              Web Development
            </button>
          </li>
          <li role="presentation">
            <button
              onClick={() => selectTab(2)}
              className={`inline-block p-4 border-b-2 ${
                active == 2 && "text-maroon border-maroon"
              } border-transparent rounded-t-lg hover:text-maroon w-[120px]`}
              id="mobile-tab"
              data-tabs-target="#mobile"
              type="button"
              role="tab"
              aria-controls="mobile"
              aria-selected="false"
            >
              Mobile App
            </button>
          </li>
          <li role="presentation">
            <button
              onClick={() => selectTab(3)}
              className={`inline-block p-4 border-b-2 ${
                active == 3 && "text-maroon border-maroon"
              } border-transparent rounded-t-lg hover:text-maroon w-[80px]`}
              id="seo-tab"
              data-tabs-target="#seo"
              type="button"
              role="tab"
              aria-controls="seo"
              aria-selected="false"
            >
              SEO
            </button>
          </li>
          <li role="presentation" className="pr-5">
            <button
              onClick={() => selectTab(4)}
              className={`inline-block p-4 border-b-2 ${
                active == 4 && "text-maroon border-maroon"
              } border-transparent rounded-t-lg hover:text-maroon w-[120px]`}
              id="brand-tab"
              data-tabs-target="#brand"
              type="button"
              role="tab"
              aria-controls="brand"
              aria-selected="false"
            >
              Branding
            </button>
          </li>
        </ul>
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

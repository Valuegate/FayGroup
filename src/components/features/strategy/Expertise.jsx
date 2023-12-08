import React from "react";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import one from "@/public/assets/strategy/Rectangle 4.svg";
import two from "@/public/assets/strategy/Rectangle 4-1.svg";
import three from "@/public/assets/strategy/Rectangle 4-2.svg";
import four from "@/public/assets/strategy/Rectangle 4-3.svg";
import five from "@/public/assets/strategy/Rectangle 4-4.svg";
import six from "@/public/assets/strategy/Rectangle 4-5.svg";

const Expertise = () => {
  const professions = [
    {
      title: "Performance Metrics",
      content:
        "Defining key performance indicators (KPIs) and measuring progress.",
      image: one,
    },
    {
      title: "Market Research and Analysis",
      content:
        "In-depth research to understand market dynamics and opportunities.",
      image: two,
    },
    {
      title: "Financial Strategy",
      content:
        "Developing financial plans, forecasts, and investment strategies.",
      image: three,
    },
    {
      title: "Operational Efficiency",
      content:
        "Identifying and implementing improvements in business processes.",
      image: four,
    },
    {
      title: "Marketing and Branding Strategy",
      content: "Creating effective marketing campaigns and brand development.",
      image: five,
    },
    {
      title: "Risk Management",
      content:
        "Analyzing and mitigating potential risks to business operations.",
      image: six,
    },
  ];

  return (
    <div className="flex flex-col items-center pt-20" id="strategy-service">
      <div className="flex flex-col gap-[10px] items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-medium leading-loose">
            EXPERRTISE
          </p>
        </div>

        <p className="text-slate-950 lg:text-4xl text-2xl text-center font-medium leading-9 lg:leading-[44px]">
          Let's know Details from{" "}
          <span className="text-red-950">our Professions</span>
        </p>
      </div>

      <div className="flex lg:flex-row flex-col w-full lg:justify-around mt-20 lg:gap-0 gap-16 px-[5%] lg:px-[10%]">
        {professions.map((profession, i) => {
          return i >= 3 ? (
            <></>
          ) : (
            <div
              key={i}
              className="flex flex-col items-start justify-start lg:w-[30%] w-full"
            >
              <Image
                src={profession.image}
                alt="Profession Image"
                className=""
              />
              <p className="text-slate-950 lg:text-2xl font-medium text-xl w-full leading-9 px-10">
                {profession.title}
              </p>
              <p className="mt-2 text-slate-950 text-base font-normal leading-loose px-10">
                {profession.content}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex lg:flex-row flex-col w-full lg:justify-around mt-20 lg:mt-10 lg:gap-0 gap-16 px-[5%] lg:px-[10%]">
        {professions.map((profession, i) => {
          return i < 3 ? (
            <></>
          ) : (
            <div
              key={i}
              className="flex flex-col items-start justify-start lg:w-[30%] w-full"
            >
              <Image
                src={profession.image}
                alt="Profession Image"
                className=""
              />
              <p className="text-slate-950 lg:text-2xl font-medium text-xl w-full leading-9 px-10">
                {profession.title}
              </p>
              <p className="mt-2 text-slate-950 text-base font-normal leading-loose px-10">
                {profession.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expertise;

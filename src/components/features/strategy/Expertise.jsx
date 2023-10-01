import React from "react";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import one from "@/public/assets/strategy/Rectangle 4.png";
import two from "@/public/assets/strategy/Rectangle 4-1.png";
import three from "@/public/assets/strategy/Rectangle 4-2.png";
import four from "@/public/assets/strategy/Rectangle 4-3.png";
import five from "@/public/assets/strategy/Rectangle 4-4.png";
import six from "@/public/assets/strategy/Rectangle 4-5.png";

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
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-[15px]">
        <div className="w-[18px]">
          <Image src={Pin} alt="pin" />
        </div>
        <p className="text-maroon text-base font-[600] leading-loose">
          EXPERTISE
        </p>
      </div>
      <p className="text-slate-950 text-4xl font-[600] leading-[44px] mt-2">
        Let's know Details from{" "}
        <span className="text-red-950">our Professions</span>
      </p>
      <div className="grid grid-cols-3 w-[80%] mt-10 mb-[200px]">
        {professions.map((profession, i) => {
          return (
            <div key={i} className="flex flex-col items-start justify-start w-[80%]">
              <Image src={profession.image} alt="Profession Image" className="w-[100%]" />
              <p className="text-slate-950 text-2xl font-[600] leading-9 w-[80%]">
                {profession.title}
              </p>
              <p className="mt-[20px] text-slate-950 text-base font-normal leading-loose">{profession.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expertise;

import React from "react";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import Rectangle from "@/public/assets/data science/Rectangle 4.png";

const Services = () => {
  const services = [
    {
      title: "Data Visualization",
      content:
        "Insights at a Glance: Transforming Data into Visual Stories",
    },
    {
      title: "Big Data Processing",
      content:
        "Unlocking Potential in Vast Data Resources",
    },
    {
      title: "Customer Segmentation",
      content: "Precision Marketing: Customer Segmentation for Targeted Engagement",
    },
    {
      title: "Statistical Analysis",
      content:
        "Unlocking market Insights: Statistical Analysis for Informed Decision-Making",
    },
  ];

  return (
    <div className="flex flex-col items-center">
        <div className="flex items-center gap-[15px]">
          <div className="w-[18px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-[600] leading-loose">
            SERVICES
          </p>
        </div>
        <p className="text-slate-950 text-4xl font-[600] leading-[44px] mt-2">
          Our Technology <span className="text-red-950">Capabilities</span>
        </p>
        <p className="text-center text-slate-950 text-base font-normal leading-loose mt-2">
          Transforming Information into Valuable Insights.
        </p>
      <div className="flex justify-between w-full mt-20 h-[800px]">
      <Image src={Rectangle} alt="image" className="w-[40%] h-full"/>

      <div className="grid grid-cols-2 gap-10 w-[55%] py-[100px]">
        {services.map((service, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col bg-white transition ease-in-out duration-200 hover:bg-palePink shadow-lg w-[400px] h-[280px] items-start rounded-[12px] px-8 py-5`}
            >
              <p className="mt-[34px] text-2xl font-[600] leading-9">
                {service.title}
              </p>

              <p className="mt-[20px] text-slate-950 text-base font-normal leading-loose">
                {service.content}
              </p>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Services;

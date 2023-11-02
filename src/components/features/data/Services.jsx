import React from "react";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import Rectangle from "@/public/assets/data science/Rectangle 4.svg";

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
        <div className="flex flex-col gap-[20px] items-center">
          <div className="flex items-center gap-[10px]">
            <div className="w-[14px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
              SERVICES
            </p>
          </div>

          <p className="text-slate-950 text-4xl sm:text-2xl font-medium sm:leading-9 leading-[44px]">
            Our Technology <span className="text-red-950">Capabilities</span>
          </p>
        </div>
        <p className="text-center text-slate-950 text-base font-normal leading-loose mt-2 sm:px-[10%]">
          Transforming Information into Valuable Insights.
        </p>
      <div className="flex justify-between w-full mt-20 sm:mt-0 h-[800px] sm:h-auto">
      <Image src={Rectangle} alt="image" className="w-[40%] h-full sm:hidden"/>

      <div className="sm:flex sm:mt-10 sm:w-full sm:flex-col items-center grid grid-cols-2 gap-10 w-[55%] py-[100px] sm:py-0">
        {services.map((service, i) => {
          return (
            <div
              key={i}
              className={`flex sm:w-[90%] sm:h-[200px] flex-col bg-white transition ease-in-out duration-200 hover:bg-palePink shadow-lg w-[400px] h-[280px] items-start rounded-[12px] px-8 py-5 sm:py-2`}
            >
              <p className="mt-[34px] text-2xl sm:text-xl font-medium leading-9">
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

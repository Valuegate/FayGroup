import React from "react";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import Rectangle from "@/public/assets/data science/Rectangle 4.svg";

const Services = () => {
  const services = [
    {
      title: "Data Visualization",
      content: "Insights at a Glance: Transforming Data into Visual Stories",
    },
    {
      title: "Big Data Processing",
      content: "Unlocking Potential in Vast Data Resources",
    },
    {
      title: "Customer Segmentation",
      content:
        "Precision Marketing: Customer Segmentation for Targeted Engagement",
    },
    {
      title: "Statistical Analysis",
      content:
        "Unlocking market Insights: Statistical Analysis for Informed Decision-Making",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-offWhite pt-20">
      <div className="flex flex-col gap-[10px] items-center" id="data-service">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-medium leading-loose">
            SERVICES
          </p>
        </div>

        <p className="text-slate-950 lg:text-4xl text-2xl font-medium leading-9 lg:leading-[44px]">
          Our Technology <span className="text-red-950">Capabilities</span>
        </p>
      </div>
      <p className="text-center text-slate-950 text-base font-normal leading-loose mt-2 px-[10%]">
        Transforming Information into Valuable Insights.
      </p>
      <div className="flex justify-between w-full items-start lg:mt-20 mt-0 h-auto">
        <Image
          src={Rectangle}
          alt="image"
          className="lg:w-[40%] lg:block h-full hidden"
        />

        <div className="lg:w-[55%] flex flex-col w-full mt-10 px-[5%] lg:px-0 gap-10">
          <div className="flex lg:flex-row flex-col gap-10">
            <ServiceCard
              content={services[0].content}
              title={services[0].title}
            />
            <ServiceCard
              content={services[1].content}
              title={services[1].title}
            />
          </div>
          <div className="flex lg:flex-row flex-col gap-10">
            <ServiceCard
              content={services[2].content}
              title={services[2].title}
            />
            <ServiceCard
              content={services[3].content}
              title={services[3].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

const ServiceCard = ({ title = "", content = "" }) => {
  return (
    <div
      className={`flex w-full justify-center flex-col bg-white transition ease-in-out duration-200 hover:bg-palePink shadow-lg lg:w-[40%] h-[250px] items-start rounded-[12px] px-8 py-5 sm:py-2`}
    >
      <p className="mt-5 lg:text-2xl text-xl font-medium leading-9">{title}</p>

      <p className="mt-2 text-slate-950 text-base font-normal leading-loose">
        {content}
      </p>
    </div>
  );
};

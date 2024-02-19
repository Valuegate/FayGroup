import React from "react";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Network Design and Optimization",
      content:
        "We create and enhance network infrastructure for optimal performance.",
    },
    {
      title: "Systems Monitoring and Maintenance:",
      content:
        "We keep your systems running smoothly with continuous monitoring and maintenance.",
    },
    {
      title: "Performance Tuning",
      content: "Fine-tune your systems for optimal speed and efficiency.",
    },
    {
      title: "Infrasructure Automation",
      content:
        "Streamline operations with automated infrastructure management.",
    },
    {
      title: "Disaster Recovery Planning",
      content:
        "Prepare your business for unexpected events with our recovery strategies.",
    },
    {
      title: "Cloud Integration",
      content:
        "We seamlessly integrate cloud solutions into your existing systems.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-offWhite py-20" id="system-service">
      <div
        className="flex flex-col gap-[10px] items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-medium leading-loose">
            SERVICES
          </p>
        </div>

        <p className="text-slate-950 lg:text-4xl text-2xl font-medium leading-9 lg:leading-[44px]">
          Our Provided <span className="text-red-950">Services</span>
        </p>
      </div>
      <p className="text-center text-slate-950 text-base font-normal leading-loose mt-2 px-[10%]">
        Embrace the power of optimizing your business systems and processes
      </p>
      <div className="flex lg:flex-row flex-col w-full lg:justify-around mt-20 lg:gap-0 gap-16 px-[5%] lg:px-[10%]">
        {services.map((service, i) => {
          return i >= 3 ? (
            <></>
          ) : (
            <div
              key={i}
              className={`flex flex-col w-full sm:h-[250px] bg-white transition ease-in-out duration-200 hover:bg-palePink shadow-lg lg:w-[30%] h-[280px] items-start rounded-[12px] px-8 py-5`}
            >
              <p className="mt-[34px] text-2xl font-medium sm:text-xl leading-9">
                {service.title}
              </p>

              <p className="mt-[20px] text-slate-950 text-base font-normal leading-loose">
                {service.content}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex lg:flex-row flex-col w-full lg:justify-around mt-20 lg:mt-10 lg:gap-0 gap-16 px-[5%] lg:px-[10%]">
        {services.map((service, i) => {
          return i < 3 ? (
            <></>
          ) : (
            <div
              key={i}
              className={`flex flex-col w-full sm:h-[250px] bg-white transition ease-in-out duration-200 hover:bg-palePink shadow-lg  lg:w-[30%] h-[280px] items-start rounded-[12px] px-8 py-5`}
            >
              <p className="mt-[34px] text-2xl font-medium sm:text-xl leading-9">
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
  );
};

export default Services;

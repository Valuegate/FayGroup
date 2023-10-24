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
    <div className="flex flex-col items-center" id="system-service">
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
          Our Provided <span className="text-red-950">Services</span>
        </p>
      </div>
      <p className="text-center text-slate-950 text-base font-normal leading-loose mt-2 px-[10%]">
        Embrace the power of optimizing your business systems and processes
      </p>
      <div className="sm:flex sm:flex-col sm:w-full items-center grid grid-cols-3 gap-10 w-[80%] mt-20">
        {services.map((service, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col sm:w-[90%] sm:h-[250px] bg-white transition ease-in-out duration-200 hover:bg-palePink shadow-lg w-[400px] h-[280px] items-start rounded-[12px] px-8 py-5`}
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

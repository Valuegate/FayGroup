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
        Our Provided <span className="text-red-950">Services</span>
      </p>
      <p className="text-center text-slate-950 text-base font-normal leading-loose mt-2">
        Embrace the power of optimizing your business systems and processes
      </p>
      <div className="grid grid-cols-3 gap-10 w-[80%] mt-20">
        {services.map((service, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col bg-white hover:bg-palePink shadow-lg w-[400px] h-[280px] items-start rounded-[12px] px-8 py-5`}
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
  );
};

export default Services;

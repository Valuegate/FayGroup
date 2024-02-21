import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Pin from "@/public/assets/Pin.svg";
import PD from "@/public/assets/landing-page/Product Development.svg";
import BC from "@/public/assets/landing-page/Business Consulting.svg";
import DT from "@/public/assets/landing-page/Digital Transformation.svg";

import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      name: "Product Development",
      subtitle:
        "Embark on a journey of innovation with our product development expertise. Let your ideas flourish and take shape in the tech world.",
      image: PD,
      link: "/features/product-development",
    },
    {
      name: "Business Consulting",
      subtitle:
        "Navigate your business's success path with our expert business consulting services. Let us guide you through strategy, innovation, and growth.",
      image: BC,
      link: "/features/business-consulting",
    },
    {
      name: "Digital Transformation",
      subtitle:
        "Embark on a journey of digital evolution with our transformative solutions. Harness the power of technology to revolutionize your business.",
      image: DT,
      link: "/features/digital-transformation",
    },
  ];

  return (
    <div
      className="py-20 lg:px-[10%] px-[5%] flex flex-col w-full items-center bg-offWhite"
      id="landing-page-service"
    >
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex items-center gap-[10px]">
            <div className="w-[14px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
              SERVICES
            </p>
          </div>

          <p className="text-slate-950 lg:text-4xl text-2xl font-medium leading-9 lg:leading-[44px]">
            Our Provided <span className="text-red-950">Services</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {services.map((service, i) => {
            return (
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                key={i}
                onClick={() => {
                  window.location.assign(service.link);
                }}
                className="flex flex-col cursor-pointer px-5 bg-white lg:w-[30%] w-full h-[470px] justify-center items-center rounded-[12px] sm:shadow-lg shadow-xl"
              >
                <div className="lg:w-[90px] h-auto w-[80px] ">
                  <Image src={service.image} alt="service image" />
                </div>

                <p className="mt-8 lg:text-2xl text-xl font-medium leading-9">
                  {service.name}
                </p>

                <p className="mt-4 lg:text-[18px]  text-[16px] text-center text-slate-950 text-base font-normal leading-loose">
                  {service.subtitle}
                </p>

                <div className="mt-4 flex items-center justify-center gap-3 text-maroon">
                  <p className="font-medium leading-loose">Explore More</p>
                  <FaArrowRight />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;

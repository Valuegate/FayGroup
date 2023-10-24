import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Pin from "@/public/assets/Pin.svg";
import PD from "@/public/assets/landing-page/Product Development.svg";
import BC from "@/public/assets/landing-page/Business Consulting.svg";
import DT from "@/public/assets/landing-page/Digital Transformation.svg";

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
    <div className="pt-[100px] pb-[150px] flex flex-col w-full items-center" id="landing-page-service">
      <div className="flex flex-col gap-[60px]">
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

        <div className="flex sm:flex-col items-center justify-center gap-[40px]">
          {services.map((service, i) => {
            return (
              <div
                key={i}
                className="flex flex-col bg-white w-[416px] sm:w-[90%] h-[462px] items-center rounded-[12px] sm:shadow-lg shadow-2xl"
              >
                <div className="w-[90px] h-auto mt-[54px]">
                  <Image src={service.image} alt="service image" />
                </div>

                <p className="mt-[34px] text-2xl font-medium leading-9 sm:text-xl sm:leading-10">
                  {service.name}
                </p>

                <p className="mt-[20px] px-[20px] text-center text-slate-950 text-base font-normal leading-loose">
                  {service.subtitle}
                </p>

                <Link
                  href={service.link}
                  className="mt-[16px] flex items-center justify-center gap-[10px] text-maroon"
                >
                  <p className="font-medium leading-loose">Explore More</p>
                  <FaArrowRight />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;

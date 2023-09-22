import React from "react";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      name: "Product Development",
      subtitle:
        "Embark on a journey of innovation with our product development expertise. Let your ideas flourish and take shape in the tech world.",
      image: "./landing-page/Product Development.svg",
      link: "/",
    },
    {
      name: "Business Consulting",
      subtitle:
        "Navigate your business's success path with our expert business consulting services. Let us guide you through strategy, innovation, and growth.",
      image: "./landing-page/Business Consulting.svg",
      link: "/",
    },
    {
      name: "Digital Transformation",
      subtitle:
        "Embark on a journey of digital evolution with our transformative solutions. Harness the power of technology to revolutionize your business.",
      image: "./landing-page/Digital Transformation.svg",
      link: "/",
    },
  ];

  return (
    <div className="pt-[100px] pb-[150px] flex flex-col w-full items-center">
      <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[20px] items-center">
            <div className="flex items-center gap-[15px]">
              <div className="w-[18px]">
                <img src="./Pin.svg" alt="pin" />
              </div>
              <div className="text-maroon text-base font-[600] leading-loose">
                SERVICES
              </div>
            </div>

            <div className="text-slate-950 text-4xl font-[600] leading-[44px]">
                Our Provided <span className="text-red-950">Services</span>
              </div>
          </div>

        <div className="flex items-center justify-center gap-[40px]">
          {services.map((service, i) => {
            return (
              <div
                key={i}
                className="flex flex-col bg-white w-[416px] h-[462px] items-center rounded-[12px] drop-shadow-2xl"
              >
                <div className="w-[90px] h-auto mt-[54px]">
                  <img src={service.image} alt="service image" />
                </div>

                <div className="mt-[34px] text-2xl font-[600] leading-9">
                  {service.name}
                </div>

                <div className="mt-[20px] px-[40px] text-center text-slate-950 text-base font-normal leading-loose">
                  {service.subtitle}
                </div>

                <Link href={service.link} className="mt-[16px] flex items-center justify-center gap-[10px] text-maroon">
                  <div className="font-[500] leading-loose">Explore More</div>
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

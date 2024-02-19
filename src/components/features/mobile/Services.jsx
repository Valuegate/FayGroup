import React from "react";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import one from "@/public/assets/mobile solution/Frame 36183.svg";
import two from "@/public/assets/mobile solution/Frame 36184.svg";
import three from "@/public/assets/mobile solution/Frame 36186.svg";
import four from "@/public/assets/mobile solution/Frame 36185.svg";
import five from "@/public/assets/mobile solution/Frame 36187.svg";
import six from "@/public/assets/mobile solution/Frame 36188.svg";

const Services = () => {
  const services = [
    {
      name: "Mobile App Development",
      subtitle:
        "Creating customized mobile applications tailored to your business needs.",
      image: one,
    },
    {
      name: "Mobile Analytics",
      subtitle:
        "Gain insights into user behavior and app performance to drive data-driven decisions.",
      image: two,
    },
    {
      name: "Payment Integration",
      subtitle:
        "Seamlessly integrate mobile payment options for user convenience.",
      image: three,
    },
    {
      name: "E-commerce Solutions",
      subtitle:
        "Enhance your online retail presence with mobile e-commerce platforms.",
      image: four,
    },
    {
      name: "Cross-Platform Development",
      subtitle:
        "Reach a wider audience by developing mobile apps compatible with multiple operating systems.",
      image: five,
    },
    {
      name: "Enterprise Mobility Solutions",
      subtitle:
        "Streamline business operations with mobile solutions tailored for enterprises.",
      image: six,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-offWhite py-20">
      <div className="flex flex-col gap-[20px] items-center">
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

      <div className="flex lg:flex-row flex-col w-full lg:justify-around mt-20 lg:gap-0 gap-16 px-[5%] lg:px-[10%]">
        {services.map((service, i) => {
          return i >= 3 ? (
            <></>
          ) : (
            <div
              key={i}
              className={`flex flex-col bg-white shadow-lg lg:w-[30%] w-full h-[430px] items-center rounded-[12px]`}
            >
              <Image
                src={service.image}
                alt="service image"
                className="w-[80px] h[80px] mt-16"
              />

              <p
                className={`mt-10 lg:text-2xl text-xl text-center font-medium leading-9`}
              >
                {service.name}
              </p>

              <p className="mt-10 lg:px-[10%] px-[5%] text-center text-slate-950 text-base font-normal leading-loose">
                {service.subtitle}
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
              className={`flex flex-col bg-white shadow-lg lg:w-[30%] w-full h-[430px] items-center rounded-[12px]`}
            >
              <Image
                src={service.image}
                alt="service image"
                className="w-[80px] h[80px] mt-16"
              />

              <p
                className={`mt-10 lg:text-2xl text-xl text-center font-medium leading-9`}
              >
                {service.name}
              </p>

              <p className="mt-10 lg:px-[10%] px-[5%] text-center text-slate-950 text-base font-normal leading-loose">
                {service.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

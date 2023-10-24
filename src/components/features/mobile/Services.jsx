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
    <div className="flex flex-col items-center" id="mobile-service">
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
      <div className="sm:flex sm:flex-col items-center sm:w-full grid grid-cols-3 gap-10 w-[80%] mt-20">
        {services.map((service, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col bg-white shadow-lg w-[400px] sm:w-[90%] h-[430px] items-center rounded-[12px]`}
            >
              <Image
                src={service.image}
                alt="service image"
                className="w-[80px] h[80px] mt-[54px]"
              />

              <p
                className={`mt-[34px] text-2xl sm:text-xl font-medium leading-9`}
              >
                {service.name}
              </p>

              <p className="mt-[20px] px-[40px] sm:px-[5%] text-center text-slate-950 text-base font-normal leading-loose">
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

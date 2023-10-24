import React from "react";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import one from "@/public/assets/business consulting/Frame 36195.svg";
import two from "@/public/assets/business consulting/Frame 36196.svg";
import three from "@/public/assets/business consulting/Frame 36197.svg";
import four from "@/public/assets/business consulting/Frame 36198.svg";
import five from "@/public/assets/business consulting/Frame 36199.svg";

const Services = () => {
  const services = [
    {
      subtitle: "Expert view from thought leaders",
      image: one,
    },
    {
      subtitle: "Practical guidance to improve businesses",
      image: two,
    },
    {
      subtitle: "Efficient solutions to easily upgrade",
      image: three,
    },
    {
      subtitle: "Compliance with industry standards",
      image: four,
    },
    {
      subtitle: "Clear technical and product strategy",
      image: five,
    },
  ];

  return (
    <div className="flex flex-col items-center" id="business-service">
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
            Benefits of a <span className="text-red-950">Consultancy</span>
          </p>
        </div>

      <div className="flex sm:flex-col items-center gap-10 w-[80%] mt-5">
        {services.map((service, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-5 items-center"
            >
              <Image
                src={service.image}
                alt="service image"
                className="w-[60px] h[60px] mt-[54px]"
              />
              <p className="mt-[20px] px-[40px] sm:px-[20%] text-center text-slate-950 text-base font-normal leading-loose">
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

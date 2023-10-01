import React from "react";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import one from "@/public/assets/digital transformation/Vector.svg";
import two from "@/public/assets/digital transformation/Group.svg";
import three from "@/public/assets/digital transformation/Vector-1.svg";
import four from "@/public/assets/digital transformation/Vector-2.svg";
import five from "@/public/assets/digital transformation/Vector-3.svg";
import six from "@/public/assets/digital transformation/Vector-4.svg";

const Services = () => {
  const services = [
    {
      name: "Adopting Technology",
      subtitle:
        "We Embrace new digital technologies e.g cloud computing, data analytics, artificial intelligence, and automation to optimize operations and decision-making.",
      image: one,
    },
    {
      name: "Process Optimization",
      subtitle:
        "Redesigning business processes to be more efficient, responsive, and customer-centric through digital tools and automation.",
      image: two,
    },
    {
      name: "Enhancing Experience",
      subtitle:
        "Leveraging digital channels and data analytics to create personalized and seamless experiences for customers across all touchpoints.",
      image: three,
    },
    {
      name: "Innovation",
      subtitle:
        "Using digital capabilities to develop new products, services, and business models that can disrupt markets and create competitive advantages.",
      image: four,
    },
    {
      name: "Data-Driven Insights",
      subtitle:
        "Harnessing data and analytics to gain deeper insights into customer behaviour, and business performance, leading to more informed decisions.",
      image: five,
    },
    {
      name: "Agility and Flexibility",
      subtitle:
        "Creating an environment that enables quick adaptation to change market conditions, customer needs, and technological advancements.",
      image: six,
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
      <p className="text-slate-950 text-4xl font-[600] leading-[44px]">
        Our Provided<span className="text-red-950"> Services</span>
      </p>

      <div className="grid grid-cols-3 gap-10 w-[80%] mt-10">
        {services.map((service, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col w-[80%] pb-10 bg-white shadow-xl items-center rounded-lg`}
            >
              <Image
                src={service.image}
                alt="service image"
                className="w-[60px] h[60px] mt-[54px]"
              />

              <p className="mt-[34px] text-2xl font-[600] leading-9">
                {service.name}
              </p>

              <p className="mt-[20px] px-[40px] text-center text-slate-950 text-base font-normal leading-loose">
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

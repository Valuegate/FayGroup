"use client";
import React, { useState } from "react";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

import HappyMan from "@/public/assets/landing-page/Listen.svg";
import Client from "@/public/assets/landing-page/Client Image.svg";
import Stars from "@/public/assets/landing-page/Stars.svg";

import Left from "@/public/assets/landing-page/Left Arrow.svg";
import Right from "@/public/assets/landing-page/Right Arrow.svg";

import { motion, AnimatePresence } from "framer-motion";

const Listen = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      text: '"Working with FayGroup has been an absolute delight. Their team of experts has transformed our business with their innovative solutions and unwavering dedication. From the moment we partnered with them, they took the time to understabd our unique needs and crafted a strategy that perfectly aligned with our goals."',
      title: "CEO of Digitata",
      name: "Olagunju David",
      image: Client,
    },
    {
      text: '"When I first partnered with FayGroup, I was hoping for a tcehnology driven solution that would streamline my business processes and boost productivity. What I received was far beyond my expectations. Their expertise, professionalism and commitment to my success transformed my business, taking it to new heights I never imagined possible."',
      title: "CEO of Digitata",
      name: "Olagunju David",
      image: Client,
    },
    {
      text: '"I worked with FayGroup to implement a new technology solution across my organization and I could not be more happier with the results. Their team of experts was incrdible knowledgeable and guided us through the entire process, from planning and deployment to training and support. They were always available to answer our questions and address our concerns, and they went the extra mile to ensure that we were satisfied with the outcome."',
      title: "CEO of Digitata",
      name: "Olagunju David",
      image: Client,
    },
  ];

  function change(value) {
    let newIndex = index + value;
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setIndex(newIndex);
    }
  }

  return (
    <div className="sm:flex sm:flex-col">
      <div className="flex w-full items-center px-[10%] py-[5%] sm:px-[5%] gap-[10%] bg-slightRedBackground">
        <Image
          src={HappyMan}
          alt="Happy Man"
          className="w-[45%] h-auto sm:hidden"
        />

        <div className="flex flex-col w-[50%] sm:w-full sm:pt-20">
          <div className="flex flex-col gap-[20px] items-start">
            <div className="flex items-center gap-[10px]">
              <div className="w-[14px]">
                <Image src={Pin} alt="pin" />
              </div>
              <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
                TESTIMONIALS
              </p>
            </div>

            <p className="text-slate-950 text-4xl sm:text-2xl font-medium sm:leading-9 leading-[44px]">
              Listen to what <span className="text-red-950">Our Clients</span>{" "}
              say
            </p>
          </div>

          <div className="mt-[5%]" />

          <AnimatePresence>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
            >
              <p className="text-slate-950 text-base font-normal leading-loose">
                {testimonials[index].text}
              </p>

              <div className="mt-[29px] flex gap-3 items-start sm:w-full">
                <Image
                  src={testimonials[index].image}
                  alt="client"
                  className="w-[90px] h-[90px]"
                />

                <div className="flex flex-col justify-between items-start">
                  <p className="text-slate-950 sm:text-xl text-2xl font-medium sm:leading-10 leading-9">
                    {testimonials[index].name}
                  </p>
                  <p className="text-slate-950 text-base font-normal leading-loose">
                    {testimonials[index].title}
                  </p>
                </div>
                <Image
                  src={Stars}
                  alt="client"
                  className="w-[25%] sm:mt-3"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-[5%]" />

          <div className="flex gap-[20px] sm:justify-center">
            <div onClick={() => change(-1)}>
              <Image
                src={Left}
                alt="arrow"
                className={`cursor-pointer ${index == 0 && "opacity-30"}`}
              />
            </div>
            <div onClick={() => change(1)}>
              <Image
                src={Right}
                alt="arrow"
                className={`cursor-pointer ${
                  index == testimonials.length - 1 && "opacity-30"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block sm:w-full sm:px-[5%] bg-slightRedBackground">
        <Image src={HappyMan} alt="HappyMan" className="sm:mt-10 sm:mb-10" />
      </div>
    </div>
  );
};

export default Listen;

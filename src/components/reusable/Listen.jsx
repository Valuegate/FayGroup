"use client";
import React, { useState } from "react";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

import HappyMan from "@/public/assets/landing-page/Listen.svg";
import Client from "@/public/assets/landing-page/Client Image.svg";
import Stars from "@/public/assets/landing-page/Stars.svg";

import Left from "@/public/assets/landing-page/Left Arrow.svg";
import Right from "@/public/assets/landing-page/Right Arrow.svg";

import { motion } from "framer-motion";

import Client1 from "@/public/assets/Client1.jpg";
import Client2 from "@/public/assets/Client2.jpg";
import Client3 from "@/public/assets/Client3.jpg";

const Listen = () => {
  
  //Photo by <a href="https://unsplash.com/@linkedinsalesnavigator?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">LinkedIn Sales Solutions</a> on <a href="">Unsplash</a>
  //Photo by <a href="https://unsplash.com/@austindistel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Austin Distel</a> on <a href="">Unsplash</a>
  

  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      text: '"Working with FayGroup has been an absolute delight. Their team of experts has transformed our business with their innovative solutions and unwavering dedication. From the moment we partnered with them, they took the time to understabd our unique needs and crafted a strategy that perfectly aligned with our goals."',
      title: "CEO of Digitata",
      name: "Samantha James",
      image: Client1,
      link: "https://unsplash.com/photos/shallow-focus-photo-of-woman-in-gray-jacket-0Zx1bDv5BNY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
      text: '"When I first partnered with FayGroup, I was hoping for a technology driven solution that would streamline my business processes and boost productivity. What I received was far beyond my expectations. Their expertise, professionalism and commitment to my success transformed my business, taking it to new heights I never imagined possible."',
      title: "CEO of The Russo Foundation",
      name: "Richard Del Russo",
      image: Client2,
      link: "https://unsplash.com/photos/man-standing-beside-wall-pAtA8xe_iVM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
      text: '"I worked with FayGroup to implement a new technology solution across my organization and I could not be more happier with the results. Their team of experts was incrdible knowledgeable and guided us through the entire process, from planning and deployment to training and support. They were always available to answer our questions and address our concerns, and they went the extra mile to ensure that we were satisfied with the outcome."',
      title: "CEO of Barzz",
      name: "Mike Stringer",
      image: Client3,
      link: "https://unsplash.com/photos/woman-wearing-blue-coat-7uoMmzPd2JA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
  ];

  function change(value) {
    let newIndex = index + value;
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setIndex(newIndex);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row mt-20">
      <div className="flex w-full items-center lg:px-[10%] py-16 px-[5%] gap-[10%] bg-slightRedBackground">
        <Image
          src={HappyMan}
          alt="Happy Man"
          className="w-[45%] h-auto hidden lg:block"
        />

        <div className="flex flex-col lg:w-[50%] w-full">
          <div className="flex flex-col gap-10 items-start">
            <div className="flex items-center gap-[10px]">
              <div className="w-[14px]">
                <Image src={Pin} alt="pin" />
              </div>
              <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
                TESTIMONIALS
              </p>
            </div>
          </div>
          <p className="text-slate-950 my-5 lg:text-4xl text-2xl font-medium leading-9 lg:leading-[44px]">
            Listen to what <span className="text-red-950">Our Clients</span> say
          </p>

          <div>
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="text-slate-950 text-base font-normal leading-loose"
            >
              {testimonials[index].text}
            </motion.p>

            <div className="mt-10 flex gap-3 lg:flex-row flex-col items-center lg:items-start w-full">
              <a href={testimonials[index].link} target="__blank">
              <Image
                src={testimonials[index].image}
                alt="client"
                className="w-[90px] h-[90px] rounded-full object-cover"
              />
              </a>

              <div className="flex flex-col justify-between lg:items-start items-center">
                <p className="text-slate-950 sm:text-xl text-2xl font-medium sm:leading-10 leading-9">
                  {testimonials[index].name}
                </p>
                <p className="text-slate-950 text-base font-normal leading-loose">
                  {testimonials[index].title}
                </p>
              </div>
              <Image src={Stars} alt="client" className="w-[25%] sm:mt-3" />
            </div>
          </div>

      
          {/* FUNNEL CREATION, LEAD GEBERATION */}
          <div className="flex mt-5 gap-[20px] justify-center">
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

      <div className="lg:hidden w-full sm:px-[5%] bg-slightRedBackground">
        <Image src={HappyMan} alt="HappyMan" className="sm:mt-10 sm:mb-10" />
      </div>
    </div>
  );
};

export default Listen;

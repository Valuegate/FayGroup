import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";
import Dev from "@/public/assets/Dev.png";
import Left from "@/public/assets/landing-page/Left Arrow.svg";
import Right from "@/public/assets/landing-page/Right Arrow.svg";

const MiniBlog = () => {
  const blogs = [
    {
      name: "Introducing MB FAY GROUP",
      image: Dev,
      link: "/",
    },
    {
      name: "Tech & Innovation",
      image: Dev,
      link: "/",
    },
    {
      name: "Software Development: How to start as a newbie",
      image: Dev,
      link: "/",
    },
  ];
  return (
    <div className="flex flex-col w-full items-center justify-center sm:hidden">
      <div className="flex items-center gap-[10px]">
        <div className="w-[18px]">
          <Image src={Pin} alt="pin" />
        </div>
        <p className="text-maroon text-base font-[600] leading-loose">BLOG</p>
      </div>
      <p className="text-slate-950 text-4xl font-[600] leading-[44px] mt-[20px]">
        Let's know Details from <span className="text-red-950">our Blogs</span>
      </p>
      <div className="grid grid-cols-3 gap-1 w-[80%] mt-[50px] mb-[50px]">
        {blogs.map((blog, i) => {
          return (
            <div key={i} className="flex flex-col items-center justify-start">
              <Image src={blog.image} alt="Blog Image" />
              <p className="text-slate-950 text-2xl font-[600] leading-9 w-[80%]">
                {blog.name}
              </p>
              <Link
                href={blog.link}
                className="text-maroon w-[80%] mt-[20px] flex gap-2 items-center"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex gap-[20px]">
          <div>
            <Image src={Left} alt="arrow" className="cursor-pointer"/>
          </div>
          <div>
            <Image src={Right} alt="arrow" className="cursor-pointer"/>
          </div>
        </div>
    </div>
  );
};

export default MiniBlog;

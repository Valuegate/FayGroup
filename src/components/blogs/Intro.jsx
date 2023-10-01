import React from "react";
import Nav from "../reusable/Nav";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import Dev from "@/public/assets/Dev.png";
import Image from "next/image";

const Intro = () => {
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
    <div className="relative">
      <Image
        src={Shadow}
        alt="shadow"
        className="absolute top-0 left-0 -z-10 w-full"
      />
      <Nav active={3} />
      <div className="mt-[150px] flex flex-col items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[18px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-[600] leading-loose">BLOG</p>
        </div>

        <p className="text-slate-950 text-4xl font-[600] w-[35%] leading-[48px] text-center">
          Step into the World of Tech{" "}
          <span className="text-red-950">Insights and Innnovation</span> at our
          Blog
        </p>

        <div className="grid grid-cols-3 gap-1 w-[80%] mt-[100px] mb-[200px]">
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
                  Read More
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

export default Intro;

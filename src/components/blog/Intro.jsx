import React from "react";
import Nav from "../reusable/Nav";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Intro = () => {
  const blogs = [
    {
      name: "Introducing MB FAY GROUP",
      image: "./Dev.png",
      link: "/",
    },
    {
      name: "Tech & Innovation",
      image: "./Dev.png",
      link: "/",
    },
    {
      name: "Software Development: How to start as a newbie",
      image: "./Dev.png",
      link: "/",
    },
  ];
  return (
    <div className="relative">
      <img
        src="./shadow.svg"
        alt=""
        className="absolute top-0 left-0 -z-10 w-full"
      />
      <Nav active={3} />
      <div className="mt-[150px] flex flex-col items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[18px]">
            <img src="./Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            BLOG
          </div>
        </div>

        <div className="text-slate-950 text-4xl font-[600] w-[35%] leading-[48px] text-center">
          Step into the World of Tech{" "}
          <span className="text-red-950">Insights and Innnovation</span> at our
          Blog
        </div>

        <div className="grid grid-cols-3 gap-1 w-[80%] mt-[100px] mb-[200px]">
          {blogs.map((blog, i) => {
            return (
              <div key={i} className="flex flex-col items-center justify-start">
                <img src={blog.image} alt="Blog Image" />
                <div className="text-slate-950 text-2xl font-[600] leading-9 w-[80%]">
                  {blog.name}
                </div>
                <Link href={blog.link} className="text-maroon w-[80%] mt-[20px] flex gap-2 items-center">
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

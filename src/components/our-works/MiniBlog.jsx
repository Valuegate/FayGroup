import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const MiniBlog = () => {
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
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex items-center gap-[10px]">
        <div className="w-[18px]">
          <img src="./Pin.svg" alt="pin" />
        </div>
        <div className="text-maroon text-base font-[600] leading-loose">
          BLOG
        </div>
      </div>
      <div className="text-slate-950 text-4xl font-[600] leading-[44px] mt-[20px]">
        Let's know Details from <span className="text-red-950">our Blogs</span>
      </div>
      <div className="grid grid-cols-3 gap-1 w-[80%] mt-[50px] mb-[50px]">
        {blogs.map((blog, i) => {
          return (
            <div key={i} className="flex flex-col items-center justify-start">
              <img src={blog.image} alt="Blog Image" />
              <div className="text-slate-950 text-2xl font-[600] leading-9 w-[80%]">
                {blog.name}
              </div>
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
            <img src="./landing-page/Left Arrow.svg" alt="arrow" />
          </div>
          <div>
            <img src="./landing-page/Right Arrow.svg" alt="arrow" />
          </div>
        </div>
    </div>
  );
};

export default MiniBlog;

import React from "react";
import Nav from "../reusable/Nav";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import Image from "next/image";

const Intro = () => {
  const blogs = [
    {
      name: "Introducing AI Assist for Better, Faster Responses",
      link: "/blogs/1",
      content:
        "At Help Scout, we believe that AI won't replace the teams that talk with customers every day. Instead, it will help them work more efficiently, enhance their skills, and strengthen customer relationships...",
    },
    {
      name: "Tech & Innovation",
      link: "/blogs/1",
    },
    {
      name: "Software Development: How to start as a newbie",
      link: "/blogs/1",
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
      <div className="mt-[150px] sm:mt-20 sm:px-[5%] flex flex-col items-center relative">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
            BLOGS
          </p>
        </div>

        <p className="text-slate-950 text-4xl px-[35%] sm:px-[5%] sm:w-full mt-5 sm:text-[32px] text-center font-medium sm:leading-9 leading-[44px]">
          Step Into The World of Tech{" "}
          <span className="text-red-950">Insights and Innovation</span> at our
          Blog
        </p>

        <div className="flex sm:flex-col gap-[5%] items-start px-[10%] sm:px-[5%] mt-32 mb-20">
          <div className="flex flex-col w-[60%] sm:w-full">
            <div className="flex flex-col items-start justify-start">
              {/* <Image src={blogs[0].image} alt="Blog Image" /> */}
              <img src={"https://res.cloudinary.com/devemmy/image/upload/v1681343921/home_p4un4n.jpg"} alt="blog image" className="h-[700px]"/>
              <p className="text-slate-950 sm:text-xl text-2xl mt-5 font-medium leading-9 w-[80%]">
                {blogs[0].name}
              </p>
              <p className="text-slate-950 text-base font-normal leading-loose mt-5">
                {blogs[0]?.content}
              </p>
              <Link
                href={blogs[0].link}
                className="text-maroon w-[80%] mt-5 flex gap-2 items-center"
              >
                Read More
                <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-10 w-[30%] sm:w-full sm:mt-10">
            {blogs.map((blog, i) => {
              return i == 0 ? (
                <></>
              ) : (
                <div
                  key={i}
                  className="flex flex-col items-start justify-start"
                >
                  {/* <Image src={blog.image} alt="Blog Image" /> */}
                  <img src={"https://res.cloudinary.com/devemmy/image/upload/v1681343921/home_p4un4n.jpg"} alt="blog image" className="h-[400px]"/>
                  <p className="text-slate-950 mt-5 sm:text-xl text-2xl font-medium leading-9 w-[80%]">
                    {blog.name}
                  </p>
                  <Link
                    href={blog.link}
                    className="text-maroon w-[80%] mt-2 flex gap-2 items-center"
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
    </div>
  );
};

export default Intro;

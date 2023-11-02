import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";
import Dev from "@/public/assets/Dev.jpg";
import Left from "@/public/assets/landing-page/Left Arrow.svg";
import Right from "@/public/assets/landing-page/Right Arrow.svg";

const MiniBlog = ({
  preRedText = "Let's know Details from",
  redText = "our Blogs",
  postRedText = "",
  pinText = "BLOGS",
}) => {
  const blogs = [
    {
      name: "Front End Development",
      image: Dev,
      link: "/blogs/1",
    },
    {
      name: "Front End Development",
      image: Dev,
      link: "/blogs/1",
    },
    {
      name: "Front End Development",
      image: Dev,
      link: "/blogs/1",
    },
  ];
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex flex-col gap-[20px] items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
            {pinText}
          </p>
        </div>
        <p className="text-slate-950 text-4xl sm:text-2xl font-medium sm:leading-9 leading-[44px]">
          {preRedText} <span className="text-red-950">{redText}</span>{" "}
          {postRedText}
        </p>
      </div>
      <div className="sm:flex sm:flex-col grid grid-cols-3 gap-5 w-full px-[10%] mt-[50px] mb-[50px]">
        {blogs.map((blog, i) => {
          return (
            <div key={i} className="flex flex-col items-start justify-start">
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
      <div className="flex gap-[20px]">
        <div>
          <Image src={Left} alt="arrow" className="cursor-pointer" />
        </div>
        <div>
          <Image src={Right} alt="arrow" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MiniBlog;

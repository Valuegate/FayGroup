"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

import Pin from "@/public/assets/Pin.svg";
import Left from "@/public/assets/landing-page/Left Arrow.svg";
import Right from "@/public/assets/landing-page/Right Arrow.svg";

import { allBlogs } from "@/src/constants/blogs";

const MiniBlog = ({
  preRedText = "Let's know Details from",
  redText = "our Blogs",
  postRedText = "",
  pinText = "BLOGS",
}) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    setEnd(allBlogs.length >= 3 ? 2 : allBlogs.length - 1);
  }, []);

  function navigate(step) {
    let newStart = start + step * 3;
    if (newStart < 0) newStart = 0;
    if (newStart > allBlogs.length - 3) newStart = allBlogs.length - 3;

    let newEnd = newStart + 2;
    if (newEnd > allBlogs.length) newEnd = allBlogs.length;

    setStart(newStart);
    setEnd(newEnd);
  }

  return (
    <div className="flex flex-col w-full items-center justify-center my-20">
      <div className="flex flex-col gap-[20px] items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-medium leading-loose">
            {pinText}
          </p>
        </div>
        <p className="text-slate-950 lg:text-4xl text-center text-2xl font-medium leading-9 lg:leading-[44px]">
          {preRedText} <span className="text-red-950">{redText}</span>{" "}
          {postRedText}
        </p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 w-full lg:px-[10%] px-[5%] my-[50px]">
        {allBlogs.map((blog, i) => {
          return i >= start && i <= end ? (
            <Link
              key={i}
              href={`/blogs/${blog.link}`}
              className="flex flex-col items-start justify-start"
            >
              <Image
                src={blog.image}
                alt={blog.alt}
                className="h-[250px] w-full object-cover"
              />
              <p className="text-slate-950 mt-5 text-xl lg:text-2xl font-medium leading-9 w-[80%] line-clamp-2">
                {blog.title}
              </p>
              <div className="text-maroon w-[80%] mt-2 flex gap-2 items-center">
                Read More
                <FaArrowRight />
              </div>
            </Link>
          ) : null;
        })}
      </div>
      <div className={`flex gap-[20px] `}>
        <div
          onClick={() => {
            if (start > 0) {
              navigate(-1);
            }
          }}
        >
          <Image
            src={Left}
            alt="arrow"
            className={`cursor-pointer ${start === 0 && "opacity-40"}`}
          />
        </div>

        <div
          onClick={() => {
            if (end !== allBlogs.length - 1) {
              navigate(1);
            }
          }}
        >
          <Image
            src={Right}
            alt="arrow"
            className={`cursor-pointer ${
              end === allBlogs.length - 1 && "opacity-40"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default MiniBlog;

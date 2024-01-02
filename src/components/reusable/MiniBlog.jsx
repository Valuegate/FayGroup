"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";

import Pin from "@/public/assets/Pin.svg";
import Left from "@/public/assets/landing-page/Left Arrow.svg";
import Right from "@/public/assets/landing-page/Right Arrow.svg";

const axios = require("axios");


const MiniBlog = ({
  preRedText = "Let's know Details from",
  redText = "our Blogs",
  postRedText = "",
  pinText = "BLOGS",
}) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://faysolutions.com:3000/api/blog/get-blogs`,
    })
      .then((res) => {
        setLoading(false);
        setBlogs(res.data.blogs);
      })
      .catch((err) => {
        console.error(err);
        setBlogs([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);



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
      <div className="sm:flex sm:flex-col grid grid-cols-3 gap-5 w-full px-[10%] mt-[50px] mb-[50px]">
        {blogs.map((blog, i) => {
          return (
            <div key={i} className="flex flex-col items-start justify-start">
              <img src={blog.blogPictureUrl} alt="blog image" className="h-[400px] w-full object-contain"/>
              <p className="text-slate-950 mt-5 sm:text-xl text-2xl font-medium leading-9 w-[80%]">
                {blog.title}
              </p>
              <Link
                href={`/blogs/${blog._id}`}
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

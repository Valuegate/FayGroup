"use client";

import React, { useEffect, useState } from "react";
import Nav from "../reusable/NavBar";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import Image from "next/image";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";

const axios = require("axios");

const Intro = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

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
    <div className="relative">
      <Image
        src={Shadow}
        alt="shadow"
        className="absolute top-0 left-0 -z-10 w-full"
      />
      <Nav active={3} />
      <div className="lg:mt-40 mt-20 sm:px-[5%] flex flex-col items-center relative">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-medium leading-loose">
            BLOGS
          </p>
        </div>

        <p className="text-slate-950 text-4xl px-[35%] sm:px-[5%] sm:w-full mt-5 sm:text-[32px] text-center font-medium sm:leading-9 leading-[44px]">
          Step Into The World of Tech{" "}
          <span className="text-red-950">Insights and Innovation</span> at our
          Blog
        </p>

        <div
          className={`flex sm:flex-col gap-[5%] items-start px-[10%] sm:px-[5%] mt-32 mb-20 ${
            loading && "hidden"
          }`}
        >
          <div className="flex flex-col w-[60%] sm:w-full">
            <div className="flex flex-col items-start justify-start">
              <img
                src={blogs[0]?.blogPictureUrl}
                alt="blog image"
                className="h-[700px] w-full object-contain"
              />
              <p className="text-slate-950 sm:text-xl text-2xl mt-5 font-medium leading-9 w-[80%]">
                {blogs[0]?.title}
              </p>
              <p className="text-slate-950 text-base font-normal leading-loose mt-5">
                {blogs[0]?.content}
              </p>
              <Link
                href={`/blogs/${blogs[0]?._id}`}
                className="text-maroon w-[80%] mt-5 flex gap-2 items-center"
              >
                Read More
                <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className={`flex flex-col gap-10 w-[30%] sm:w-full sm:mt-10`}>
            {blogs.map((blog, i) => {
              return i == 0 || i > 2 ? (
                <></>
              ) : (
                <div
                  key={i}
                  className="flex flex-col items-start justify-start"
                >
                  <img
                    src={blog.blogPictureUrl}
                    alt="blog image"
                    className="h-[400px] w-full object-contain"
                  />
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
        </div>

        <div
          className={`
            ${!loading && "hidden"} 
            w-full mt-32 h-20 flex flex-col items-center justify-center`}
        >
          <SpinningCircles fill="#A2393F" />
        </div>
      </div>
    </div>
  );
};

export default Intro;

"use client";

import React, { useEffect, useState } from "react";
import Nav from "../reusable/NavBar";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import Image from "next/image";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";

import axios from "axios";
const { convert } = require("html-to-text");

const Intro = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://faysolutions.com:3001/api/blog/get-blogs`,
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
      <div className="lg:mt-40 mt-20 px-[5%] flex flex-col items-center relative">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-medium leading-loose">
            BLOGS
          </p>
        </div>

        <h1 className="text-slate-950 lg:text-4xl text-2xl lg:px-[20%] px-[5%] w-full mt-5 text-center font-medium leading-9 lg:leading-[44px]">
          Step Into The World of Tech{" "}
          <span className="text-red-950">Insights and Innovation</span> at our
          Blog
        </h1>

        <div
          className={`flex flex-col lg:flex-row lg:gap-24 lg:justify-between items-start w-[90%] mt-32 mb-20 ${
            loading && "hidden"
          }`}
        >
          {!loading && blogs.length === 0 && (
            <div className="flex flex-col justify-center text-maroon items-center w-full lg:h-[300px] h-[200px] text-center lg:text-2xl text-xl">
              There are no blogs posted yet
            </div>
          )}

          {blogs.length > 0 && (
            <div
              className={`flex flex-col items-start justify-start ${
                blogs.length === 1 ? "lg:w-full" : "lg:w-[60%]"
              } w-full`}
            >
              <img
                src={blogs[0]?.blogPictureUrl}
                alt="blog image"
                className="lg:h-[700px] w-full h-auto object-contain"
              />
              <p
                className={`text-slate-950 text-xl lg:text-2xl mt-5 font-medium leading-9 ${
                  blogs.length === 1 ? "w-full" : "w-[80%]"
                }`}
              >
                {blogs[0]?.title}
              </p>
              <p
                className={`text-slate-950 text-base font-normal leading-loose mt-5 ${
                  blogs.length === 1 ? "w-full" : "w-[80%]"
                }`}
              >
                {convert(blogs[0]?.content).substring(0, 180)}...
              </p>
              <Link
                href={`/blogs/${blogs[0]?._id}`}
                className="text-maroon w-[80%] mt-5 flex gap-2 items-center"
              >
                Read More
                <FaArrowRight />
              </Link>
            </div>
          )}

          <div
            className={`flex flex-col gap-20 ${
              blogs.length === 1 ? "hidden" : "lg:w-[40%]"
            } w-full mt-10 lg:mt-0`}
          >
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
                    className="lg:h-[350px] h-auto object-cover"
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

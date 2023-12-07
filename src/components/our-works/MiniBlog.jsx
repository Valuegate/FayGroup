"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";
import Left from "@/public/assets/landing-page/Left Arrow.svg";
import Right from "@/public/assets/landing-page/Right Arrow.svg";

const axios = require("axios");

const MiniBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  

  const paginate = ({ left = true }) => {
    setCurrentPage((page) => page + (left ? -1 : 1));
  };
  
  
   
  const fetchBlogs = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: `http://62.72.22.207:3000/api/blog/get-blogs`,
    })
      .then((res) => {
        setLoading(false);
        setBlogs(res.data.blogs);
      })
      .catch((err) => {
        console.error(`Get Blogs In Miniblogs error: ${err}`);
        setBlogs([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);


  return (
    <div className="flex flex-col w-full items-center justify-center py-20">
      <div className="flex flex-col gap-[20px] items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base text-xs font-medium leading-loose">
            BLOGS
          </p>
        </div>

        <p className="text-slate-950 lg:text-4xl text-2xl text-center font-medium leading-9 lg:leading-[44px]">
          Let's know Details from{" "}
          <span className="text-red-950">our Blogs</span>
        </p>
      </div>
      <div
        className={`grid grid-cols-3 gap-5 w-full px-[10%] mt-[50px] mb-[50px] sm:flex sm:flex-col ${
          loading && "hidden"
        }`}
      >
        {currentBlogs.map((blog, i) => {
          return (
            <div key={i} className="flex flex-col items-start justify-start">
              <img src={blog.blogPictureUrl} alt="blog image" />
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

      <div className={`flex gap-[20px] ${(loading || blogs.length <= 3) && "hidden"}`}>
        <div onClick={() => paginate(true)}>
          <Image src={Left} alt="arrow" className="cursor-pointer" />
        </div>
        <div onClick={() => paginate(false)}>
          <Image src={Right} alt="arrow" className="cursor-pointer" />
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
  );
};

export default MiniBlog;

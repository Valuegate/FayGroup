"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";

import Pin from "@/public/assets/Pin.svg";
import Left from "@/public/assets/landing-page/Left Arrow.svg";
import Right from "@/public/assets/landing-page/Right Arrow.svg";

import axios from "axios";

const MiniBlog = ({
  preRedText = "Let's know Details from",
  redText = "our Blogs",
  postRedText = "",
  pinText = "BLOGS",
}) => {
  const [blogs, setBlogs] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
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
        setEnd(res.data.blogs.length >= 3 ? 2 : res.data.blogs.length);
      })
      .catch((err) => {
        console.error(err);
        setBlogs([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (blogs.length === 0) {
      fetchBlogs();
    }
  }, []);

  function navigate(step) {
    let newStart = start;
    let newEnd = end;

    if (step < 0) {
      newStart = Math.max(0, start - 3);
      newEnd = Math.min(blogs.length, newStart + 3);
    } else if (step > 0) {
      newStart = Math.min(blogs.length - 3, start + 3);
      newEnd = newStart + 3;
    }

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

      {!loading && blogs.length > 0 && (
        <>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 w-full lg:px-[10%] px-[5%] my-[50px]">
            {blogs.map((blog, i) => {
              return i >= start && i <= end ? (
                <div
                  key={i}
                  className="flex flex-col items-start justify-start"
                >
                  <img
                    src={blog.blogPictureUrl}
                    alt="blog image"
                    className="h-[250px] w-full object-cover"
                  />
                  <p className="text-slate-950 mt-5 text-xl lg:text-2xl font-medium leading-9 w-[80%]">
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
              ) : null;
            })}
          </div>
          <div className={`flex gap-[20px] ${loading && "hidden"}`}>
            <div onClick={() => navigate(-1)}>
              <Image
                src={Left}
                alt="arrow"
                className={`cursor-pointer ${start === 0 && "opacity-40"}`}
              />
            </div>

            <div onClick={() => navigate(1)}>
              <Image
                src={Right}
                alt="arrow"
                className={`cursor-pointer ${
                  end < blogs.length - 1 && "opacity-40"
                }`}
              />
            </div>
          </div>
        </>
      )}
      {loading && (
        <div className="flex justify-center items-center w-full h-56">
          <SpinningCircles fill="#A2393F" />
        </div>
      )}
    </div>
  );
};

export default MiniBlog;

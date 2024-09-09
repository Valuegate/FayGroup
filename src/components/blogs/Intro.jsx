import React from "react";
import Nav from "../reusable/NavBar";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import Image from "next/image";

import { allBlogs } from "@/src/constants/blogs";

const Intro = () => {
  return (
    <div className="relative">
      <Image
        src={Shadow}
        alt="shadow"
        className="absolute top-0 left-0 -z-10 w-full"
      />
      <Nav active={2} />
      <div className="lg:mt-40 mt-20 lg:px-[10%] px-0 flex flex-col items-center relative">
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
          className={`flex flex-col lg:flex-row lg:gap-24 lg:justify-between items-start w-[90%] mt-32 mb-20`}
        >
          <div className={`flex flex-col items-start justify-start w-full`}>
            <Image
              src={allBlogs[0].image}
              alt={allBlogs[0].alt}
              className="lg:h-[700px] w-full h-auto object-cover"
            />
            <p
              className={`text-slate-950 text-xl lg:text-2xl mt-5 font-medium leading-9 w-full`}
            >
              {allBlogs[0].title}
            </p>
            <p
              className={`text-slate-950 text-base font-normal leading-loose w-full`}
            >
              {allBlogs[0].description}
            </p>
            <Link
              href={`/blogs/${allBlogs[0].link}`}
              className="text-maroon w-fit flex gap-2 items-center"
            >
              Read More
              <FaArrowRight />
            </Link>
          </div>

          {/* <div
          className={`flex flex-col lg:flex-row lg:gap-24 lg:justify-between items-start w-[90%] mt-32 mb-20`}
        >
          <div
            className={`flex flex-col items-start justify-start ${
              allBlogs.length === 1 ? "lg:w-full" : "lg:w-[60%]"
            } w-full`}
          >
            <Image
              src={allBlogs[0].image}
              alt={allBlogs[0].alt}
              className="lg:h-[700px] w-full h-auto object-cover"
            />
            <p
              className={`text-slate-950 text-xl lg:text-2xl mt-5 font-medium leading-9 ${
                allBlogs.length === 1 ? "w-full" : "w-[80%]"
              }`}
            >
              {allBlogs[0].title}
            </p>
            <p
              className={`text-slate-950 text-base font-normal leading-loose mt-5 ${
                allBlogs.length === 1 ? "w-full" : "w-[80%]"
              }`}
            >
              {allBlogs[0].description}
            </p>
            <Link
              href={`/blogs/${allBlogs[0].link}`}
              className="text-maroon w-[80%] flex gap-2 items-center"
            >
              Read More
              <FaArrowRight />
            </Link>
          </div> */}

          {/* <div
            className={`flex flex-col gap-20 ${
              allBlogs.length === 1 ? "hidden" : "lg:w-[40%]"
            } w-full mt-10 lg:mt-0`}
          >
            {allBlogs.map((blog, i) => {
              return i == 0 || i > 2 ? (
                <div key={i} />
              ) : (
                <div
                  key={i}
                  className="flex flex-col items-start justify-start"
                >
                  <Image
                    src={blog.image}
                    alt={blog.alt}
                    className="lg:h-[350px] h-auto object-cover"
                  />
                  <p className="text-slate-950 mt-5 sm:text-xl text-2xl font-medium leading-9 w-[80%]">
                    {blog.title}
                  </p>
                  <Link
                    href={`/blogs/${blog.link}`}
                    className="text-maroon w-[80%] mt-2 flex gap-2 items-center"
                  >
                    Read More
                    <FaArrowRight />
                  </Link>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;

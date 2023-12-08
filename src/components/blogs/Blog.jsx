"use client";

import React, { useState, useEffect } from "react";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";

import Nav from "../reusable/NavBar";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import Client from "@/public/assets/landing-page/Client Image.svg";
import MiniBlog from "../reusable/MiniBlog";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";
import useLocalStorage from "use-local-storage";

const axios = require("axios");

const Blog = ({ blog }) => {
  const [loading, setLoading] = useState(true);

  function convertDate(date) {
    let dateObject = new Date(date);

    let day = dateObject.getDate();
    let month = dateObject.getMonth();
    let year = dateObject.getFullYear();

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[month];

    let dayWithSuffix = day + getOrdinalSuffix(day);

    return `${monthName} ${dayWithSuffix}, ${year}`;
  }


  function getOrdinalSuffix(day) {
    if(day > 3 && day < 21) return "th";
    switch(day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }



  return (
    <div className="relative">
      <Nav active={3} />
      <div className="mt-[150px] sm:mt-20 px-[10%] sm:px-[5%] w-full flex flex-col items-center relative">
        <div className="flex items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
            BLOG
          </p>
        </div>

        <p className="text-slate-950 text-4xl px-[25%] sm:px-[5%] sm:w-full mt-5 sm:text-[32px] text-center font-medium sm:leading-9 leading-[44px]">
          {blog.title}
        </p>

        <div className={`flex sm:w-full sm:flex-col gap-5 sm:gap-1 items-center mt-5 ${loading && "hidden"}`}>
          <div></div>
          <p className={`text-slate-950 text-base font-medium leading-loose`}>
            Written by {blog.user.name}
          </p>
          <p className="text-slate-950 text-base font-normal leading-loose">
            {convertDate(blog.createdAt)}
          </p>
        </div>

        <div className={`w-full sm:w-full mt-20 mb-20 flex flex-col items-center ${loading && "hidden"}`}>
          <div className="w-full">
            <img
              src={blog.blogPictureUrl}
              alt="blog image"
              className="shadow-xl h-auto"
            />
          </div>

          <p className={`text-slate-950 text-base font-normal leading-loose sm:w-full px-[20%] sm:mt-10 mt-20 sm:px-0 ${loading && "hidden"}`}>
            {blog.content}
          </p>
        </div>
      </div>
      <MiniBlog
        pinText="OTHERS"
        preRedText="Discover More"
        redText="Latest"
        postRedText="Blogs"
      />
      <WorkInterest />
      <Footer active={3} />
    </div>
  );
};

export default Blog;

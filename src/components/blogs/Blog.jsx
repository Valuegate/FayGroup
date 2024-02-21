"use client";

import React, { useState, useEffect } from "react";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";

import Nav from "../reusable/NavBar";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";
import MiniBlog from "../reusable/MiniBlog";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";

const axios = require("axios");

const SUBTITLE = "Subtitle";
const PARAGRAPH = "Paragraph";

const Blog = ({ id }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const [contents, setContent] = useState([]);

  function parseContent(blogContent) {
    let regex = /#ST#(.*?)#ET#|#SP#(.*?)#EP#/g;
    let match;
    let result = [];

    while ((match = regex.exec(blogContent))) {
      let obj = {};
      if (match[1]) {
        obj.type = SUBTITLE;
        obj.value = match[1];
      } else if (match[2]) {
        obj.type = PARAGRAPH;
        obj.value = match[2];
      }
      result.push(obj);
    }

    setContent(result);
  }

  function convertDate(date) {
    let dateObject = new Date(date);

    let day = dateObject.getDate();
    let month = dateObject.getMonth();
    let year = dateObject.getFullYear();

    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let monthName = monthNames[month];

    let dayWithSuffix = day + getOrdinalSuffix(day);

    return `${monthName} ${dayWithSuffix}, ${year}`;
  }

  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://faysolutions.com:3000/api/blog/get-blog/${id}`,
    })
      .then((res) => {
        parseContent(res.data.blog.content);
        setBlog(res.data.blog);
        setLoading(false);
      })
      .catch((err) => {
        setBlog(null);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative">
      <Nav active={3} />
      {!loading && blog !== null && (
        <div className="mt-[150px] sm:mt-20 px-[10%] sm:px-[5%] w-full flex flex-col items-center relative">
          <div className="flex items-center gap-[10px]">
            <div className="w-[14px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
              BLOG
            </p>
          </div>

          <p className="text-slate-950 lg:text-4xl lg:px-[20%] px-[5%] w-full mt-5 text-2xl text-center font-medium leading-9 lg:leading-[44px]">
            {blog.title}
          </p>

          <div
            className={`flex w-full flex-col lg:flex-row lg:justify-center lg:gap-5 gap-1 items-center mt-5`}
          >
            <p className={`text-slate-950 text-base font-medium leading-loose`}>
              Written by {blog.user.name}
            </p>
            <p className="text-slate-950 text-base font-normal leading-loose">
              {convertDate(blog.createdAt)}
            </p>
          </div>

          <div
            className={`w-full sm:w-full mt-20 mb-20 flex flex-col items-center lg:px-[20%] px-0`}
          >
            <img
              src={blog.blogPictureUrl}
              alt="blog image"
              className="shadow-xl w-full  h-auto object-contain"
            />

            <div className="flex flex-col w-full mt-10 lg:mt-20">
              {contents.map((content, i) => {
                return (
                  <p
                    key={i}
                    className={`${
                      content.type === SUBTITLE
                        ? "lg:text-2xl text-xl font-[600] text-center lg:text-start pt-3 pb-2"
                        : "font-normal py-1"
                    } text-slate-950 leading-loose w-full`}
                  >
                    {content.value}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div
        className={`mt-[150px] sm:mt-20 px-[10%] w-full h-[300px] flex items-center justify-center ${
          !loading && "hidden"
        }`}
      >
        <SpinningCircles fill="#A2393F" />
      </div>

      {!loading && blog === null && (
        <div className="text-center h-56 w-full flex items-center justify-center">
          An error occurred somewhere. Please refresh the page{" "}
        </div>
      )}

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

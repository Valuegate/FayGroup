"use client";

import React, { useState, useEffect } from "react";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";

import Nav from "../reusable/Nav";

import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import Client from "@/public/assets/landing-page/Client Image.svg";
import MiniBlog from "../reusable/MiniBlog";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";
import useLocalStorage from "use-local-storage";

const axios = require("axios");

const Blog = ({ id = "" }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});
  const [author, setAuthor] = useState({});

  // const blog = {
  //   id: { id },
  //   title: "Introducing AI Assist for Better, Faster Responses",
  //   author: {
  //     name: "Samson Jackson",
  //     image: Client,
  //   },
  //   timestamp: "September 14, 2023",
  //   media: "",
  //   content:
  //     "At Help Scout, we believe that AI won't replace the teams that talk with customers every day. Instead, it will help them work more efficiently, enhance their skills, and strengthen customer relationships. We’re making that future a reality, building AI features that improve resolution time, customer sentiment, and employee satisfaction. We’re committed to making it effortless so teams can experience the benefits of AI without having to learn the ins and outs of large language models. Our features are embedded in the Help Scout platform — no plugins and no copying and pasting — so users can tap into the power of AI with just one click. In July, we released AI summarize. Today, we’re excited to launch another AI feature for Help Scout users: AI assist [Beta].",
  // };

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


  const getBlog = () => {
    axios({
      method: "GET",
      url: `http://62.72.22.207:3000/api/blog/get-blog/${id}`,
    })
      .then((res) => {
        setLoading(false);
        let fetchedBlog = res.data.blog;
        let userID = fetchedBlog.userId;
        axios({
          method: "GET",
          url: `http://62.72.22.207:3000/api/users/get-user-by-id/${userID}`,
        })
          .then((res) => {
            let fetchedAuthor = res.data.user;
            setLoading(false);
            setBlog(fetchedBlog);
            setAuthor(fetchedAuthor);
          })
          .catch((err) => {
            console.error(err);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBlog();
  }, []);

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

        <div className="flex sm:w-full sm:flex-col gap-5 sm:gap-1 items-center mt-5 ">
          <div></div>
          <p className="text-slate-950 text-base font-medium leading-loose">
            Written by {author.name}
          </p>
          <p className="text-slate-950 text-base font-normal leading-loose">
            {convertDate(blog.createdAt)}
          </p>
        </div>

        <div className="w-full sm:w-full mt-20 mb-20 flex flex-col items-center">
          <div className="w-full">
            <img
              src={blog.blogProfileUrl}
              alt="blog image"
              className="shadow-xl h-[800px]"
            />
          </div>

          <p className="text-slate-950 text-base font-normal leading-loose sm:w-full px-[20%] sm:mt-10 mt-20 sm:px-0">
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
      <div className="h-[200px]" />
      <WorkInterest />
      <Footer active={3} />
    </div>
  );
};

export default Blog;

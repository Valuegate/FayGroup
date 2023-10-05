import React from "react";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import Intro from "./Intro";

import Nav from "../reusable/Nav";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import Image from "next/image";

import Client from "@/public/assets/landing-page/Client Image.svg";
import Dev from "@/public/assets/Dev.jpg";
import MiniBlog from "../reusable/MiniBlog";

const Blog = ({ id }) => {
  const blog = {
    id: { id },
    title: "Introducing AI Assist for Better, Faster Responses",
    author: {
      name: "Samson Jackson",
      image: Client,
    },
    timestamp: "September 14, 2023",
    media: Dev,
    content:
      "At Help Scout, we believe that AI won't replace the teams that talk with customers every day. Instead, it will help them work more efficiently, enhance their skills, and strengthen customer relationships. We’re making that future a reality, building AI features that improve resolution time, customer sentiment, and employee satisfaction. We’re committed to making it effortless so teams can experience the benefits of AI without having to learn the ins and outs of large language models. Our features are embedded in the Help Scout platform — no plugins and no copying and pasting — so users can tap into the power of AI with just one click. In July, we released AI summarize. Today, we’re excited to launch another AI feature for Help Scout users: AI assist [Beta].",
  };

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
          <div>
            <Image src={blog.author.image} alt="author image" />
          </div>
          <p className="text-slate-950 text-base font-medium leading-loose">
            Written by {blog.author.name}
          </p>
          <p className="text-slate-950 text-base font-normal leading-loose">
            {blog.timestamp}
          </p>
        </div>

        <div className="w-full sm:w-full mt-20 mb-20 flex flex-col items-center">
          <div className="w-full">
            <Image src={blog.media} alt="Blog Image" className="shadow-xl" />
          </div>

          <p className="text-slate-950 text-base font-normal leading-loose sm:w-full px-[20%] sm:mt-10 mt-20 sm:px-0">
            {blog.content}
          </p>

          <p className="text-slate-950 sm:text-xl text-2xl font-medium leading-9 mt-10 sm:text-center mb-10">
            Meet AI assist 👋 Your personal writing assistant
          </p>

          <p className="text-slate-950 text-base font-normal leading-loose sm:w-full px-[20%] sm:px-0">
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

import Link from "next/link";
import React from "react";

import Logo from "@/public/assets/Logo.svg";
import Image from 'next/image';

const Footer = ({ active = -1 }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex px-[200px] gap-[135px] items-start justify-start">
        <div className="flex flex-col gap-[20px] items-start">
          <div>
            <Image src={Logo} />
          </div>
          <div className="w-[400px] text-slate-950 text-base font-normal leading-loose">
            We provide the best services and we are ready to help your business
            grow.
          </div>
        </div>

        <div className="flex gap-[80px]">
          <div className="flex flex-col">
            <div className="text-slate-950 text-base font-[600] leading-loose mb-[20px]">
              Links
            </div>
            <Link
              href="/"
              className={`${
                active == 0 ? "text-maroon" : "text-slate-950"
              } text-base font-normal leading-loose`}
            >
              Home
            </Link>
            <Link
              href="/features/product-development"
              className={`${
                active == 1 ? "text-maroon" : "text-slate-950"
              } text-base font-normal leading-loose`}
            >
              Features
            </Link>
            <Link
              href="/our-works"
              className={`${
                active == 2 ? "text-maroon" : "text-slate-950"
              } text-base font-normal leading-loose`}
            >
              Our Works
            </Link>
            <Link
              href="/about"
              className={`${
                active == 3 ? "text-maroon" : "text-slate-950"
              } text-base font-normal leading-loose`}
            >
              About Us
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="text-slate-950 text-base font-[600] leading-loose mb-[20px]">
              Services
            </div>
            <Link
              href="/features/business-consulting"
              className="text-slate-950 text-base font-normal leading-loose"
            >
              Business Consulting
            </Link>
            <Link
              href="/features/product-development"
              className="text-slate-950 text-base font-normal leading-loose"
            >
              Product Development
            </Link>
            <Link
              href="/features/digital-transformation"
              className="text-slate-950 text-base font-normal leading-loose"
            >
              Digital Transformation
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="text-slate-950 text-base font-[600] leading-loose mb-[20px]">
              Socials
            </div>
            <Link
              href="/"
              className="text-slate-950 text-base font-normal leading-loose"
            >
              Linkedln
            </Link>
            <Link
              href="/"
              className="text-slate-950 text-base font-normal leading-loose"
            >
              Twitter
            </Link>
            <Link
              href="/"
              className="text-slate-950 text-base font-normal leading-loose"
            >
              Instagram
            </Link>
            <Link
              href="/"
              className="text-slate-950 text-base font-normal leading-loose"
            >
              Facebook
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="text-slate-950 text-base font-[600] leading-loose mb-[20px]">
              Get In Touch
            </div>
            <div className="text-slate-950 text-base font-normal leading-loose">
              Faygroup@gmail.com
            </div>
            <div className="text-slate-950 text-base font-normal leading-loose">
              +234 902 429 9483
            </div>
          </div>
        </div>
      </div>

      <div className="w-[70%] h-[1px] bg-slate-400 mt-[60px]" />

      <div className=" mt-[24px] text-slate-400 text-base font-normal leading-loose mb-[24px]">
        Copyright 2023. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

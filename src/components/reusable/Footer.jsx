"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import Logo from "@/public/assets/Logo.svg";
import Image from "next/image";

import LN from "@/public/assets/nav/Frame 35630.svg";
import IN from "@/public/assets/nav/Frame 35628.svg";
import TW from "@/public/assets/nav/Frame 35627.svg";
import FB from "@/public/assets/nav/Frame 35626.svg";

const linkedInUrl = "https://www.linkedin.com/company/faygroup/";
const instagramUrl = "https://www.instagram.com/mb_faygroup/";
const facebookUrl = "https://web.facebook.com/MBFayGroup";
const twitterUrl = "https://twitter.com/mb_faygroup";

const Footer = ({ active = -1, subActive = -1 }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    let localUser = window.localStorage.getItem("faygroup-user");
    localUser = JSON.parse(localUser);
    setUser(localUser);
  }, []);

  return (
    <div className="flex flex-col items-center w-[100vw]">
      <div className="flex lg:px-[10%] px-[5%] lg:gap-20 gap-0 items-start justify-between lg:flex-row flex-col">
        <div className="flex flex-col gap-5 items-start">
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" />
          </Link>
          <div className="w-full text-slate-950 text-base font-normal leading-loose">
            We provide the best services and we are ready to help your business
            grow.
          </div>
          <div className="flex sm:mt-2 sm:mb-5 justify-around gap-3 w-[60%]  items-center">
            <a href={linkedInUrl} target="_blank">
              <Image src={LN} alt="LinkedIn" />
            </a>
            <a href={instagramUrl} target="_blank">
              <Image src={IN} alt="Instagram" />
            </a>
            <a href={twitterUrl} target="_blank">
              <Image src={TW} alt="Twitter" />
            </a>
            <a href={facebookUrl} target="_blank">
              <Image src={FB} alt="Facebook" />
            </a>
          </div>
        </div>

        <div className="flex lg:gap-20 gap-10 flex-col mt-10 lg:mt-0 lg:flex-row w-full">
          <div className="flex lg:gap-[80px] justify-between gap-0">
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
                className={`${
                  subActive == 3 ? "text-maroon" : "text-slate-950"
                } text-base font-normal leading-loose`}
              >
                Business Consulting
              </Link>
              <Link
                href="/features/product-development"
                className={`${
                  subActive == 1 ? "text-maroon" : "text-slate-950"
                } text-base font-normal leading-loose`}
              >
                Product Development
              </Link>
              <Link
                href="/features/digital-transformation"
                className={`${
                  subActive == 2 ? "text-maroon" : "text-slate-950"
                } text-base font-normal leading-loose`}
              >
                Digital Transformation
              </Link>
            </div>
          </div>

          <div className="flex lg:gap-[80px] justify-between gap-0">
            <div className="flex flex-col">
              <div className="text-slate-950 text-base font-[600] leading-loose mb-[20px]">
                Socials
              </div>
              <a
                href={linkedInUrl}
                target="_blank"
                className="text-slate-950 text-base font-normal leading-loose"
              >
                Linkedln
              </a>
              <a
                href={twitterUrl}
                target="_blank"
                className="text-slate-950 text-base font-normal leading-loose"
              >
                Twitter
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                className="text-slate-950 text-base font-normal leading-loose"
              >
                Instagram
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                className="text-slate-950 text-base font-normal leading-loose"
              >
                Facebook
              </a>
            </div>
            <div className="flex flex-col">
              <div className="text-slate-950 text-base font-[600] leading-loose mb-[20px]">
                Get In Touch
              </div>
              <div className="text-slate-950 text-base font-normal leading-loose">
                info@mbfaygroup.com
              </div>
              <div className="text-slate-950 text-base font-normal leading-loose">
                +370 608 769 51
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[70%] h-[1px] bg-slate-200 mt-[60px]" />

      <div className=" mt-10 text-slate-400 text-base font-normal leading-loose mb-10">
        Copyright {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

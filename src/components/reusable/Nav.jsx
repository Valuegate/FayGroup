"use client";

import Link from "next/link";
import { React, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Nav = ({ active = 0 }) => {
  const router = useRouter();
  const [showFeature, setShowFeature] = useState(false);

  const navs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Features",
      icon: <FaCaretDown />,
    },
    {
      name: "Our Works",
      link: "/our-works",
    },
    {
      name: "Blogs",
      link: "/blog",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <nav className="flex justify-between px-[200px] py-[32px] items-center bg-transparent">
      <Link href={"/"}>
        <img src="./Logo.svg" />
      </Link>

      <div className="flex w-3/5 justify-evenly">
        {navs.map((nav, i) => {
          return (
            <div
              key={i}
              className={`flex items-center text-base font-normal leading-loose ${
                i == active && "text-maroon"
              }`}
            >
              {nav.link ? (
                <Link href={nav.link} key={i}>
                  {nav.name}
                  {nav.icon && nav.icon}
                </Link>
              ) : (
                <div
                  className={`flex gap-1 items-center cursor-pointer text-base font-normal leading-loose ${
                    i == active && "text-maroon`"
                  }`}
                  onClick={() => setShowFeature(!showFeature)}
                >
                  {nav.name}
                  {nav.icon && nav.icon}
                  {showFeature && <Dropdown />}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Button style="text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed">
        Get In Touch
      </Button>
    </nav>
  );
};

export default Nav;

const Dropdown = () => {
  return (
    <div className="absolute top-[15%] left-0 z-20 w-full bg-white shadow-lg px-[12%] py-[2%] flex flex-col justify-center gap-2">
      <div className="flex items-start gap-[10%]">
        <div className="flex w-[70%] gap-[10%]">
          <div className="flex flex-col w-1/2">
            <div className="text-maroon text-base font-[600] leading-loose">
              FEATURES
            </div>

            <div className="mt-[5%]" />

            <Link href={"/features/product-development"}>
              <div className="flex flex-col">
                <div className="flex justify-start items-start gap-5">
                  <img
                    src="./nav/image 12.svg"
                    alt=""
                    className="w-[40px] h-[40px]"
                  />
                  <div className="flex flex-col gap-2">
                    <div className="text-slate-950 text-base font-semibold leading-loose">
                      Product Development
                    </div>
                    <div className="w-[100%] text-slate-950 text-base font-normal leading-relaxed">
                      Our experienced team is dedicated in bringing innovative
                      ideas to market.
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="mt-[10%]" />
            <Link href={"/"}>
              <div className="flex flex-col">
                <div className="flex justify-start items-start gap-5">
                  <img
                    src="./nav/image 13.svg"
                    alt=""
                    className="w-[40px] h-[40px]"
                  />
                  <div className="flex flex-col gap-2">
                    <div className="text-slate-950 text-base font-semibold leading-loose">
                      Digital Transformation
                    </div>
                    <div className="w-[100%] text-slate-950 text-base font-normal leading-relaxed">
                      Unlock new opportunities and stay competitive in the
                      digital age.
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-col w-1/2">
            <div className="mt-[10%]" />

            <Link href={"/"}>
              <div className="flex flex-col">
                <div className="flex justify-start items-start gap-5">
                  <img
                    src="./nav/image 14-6.svg"
                    alt=""
                    className="w-[40px] h-[40px]"
                  />
                  <div className="flex flex-col gap-2">
                    <div className="text-slate-950 text-base font-semibold leading-loose">
                      Business Consulting
                    </div>
                    <div className=" text-slate-950 text-base font-normal leading-relaxed">
                      Our business consulting experts provide strategic guidance
                      to optimize your operations and drive growth.
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-[30%] border-l-gray-200 border-l-2 pl-12">
          <div className="text-maroon text-base font-[600] leading-loose">
            PRODUCT DEVELOPMENT
          </div>

          <div className="mt-[5%]" />

          <div className="flex flex-col">
            <Link
              href={"/"}
              className="py-2 px-2 rounded-md flex items-center gap-5"
            >
              <img
                src="./nav/image 14.svg"
                alt="code"
                className="w-[40px] h-[40px]"
              />
              Software Development
            </Link>

            <Link
              href={"/"}
              className="py-2 px-2 rounded-md flex items-center gap-5"
            >
              <img
                src="./nav/image 14-1.svg"
                alt="code"
                className="w-[40px] h-[40px]"
              />
              UI/UX Design
            </Link>

            <Link
              href={"/"}
              className="py-2 px-2 rounded-md flex items-center gap-5"
            >
              <img
                src="./nav/image 14-2.svg"
                alt="code"
                className="w-[40px] h-[40px]"
              />
              Mobile Solution
            </Link>

            <Link
              href={"/"}
              className="py-2 px-2 rounded-md flex items-center gap-5"
            >
              <img
                src="./nav/image 14-3.svg"
                alt="code"
                className="w-[40px] h-[40px]"
              />
              System Engineering
            </Link>

            <Link
              href={"/"}
              className="py-2 px-2 rounded-md flex items-center gap-5"
            >
              <img
                src="./nav/image 14-4.svg"
                alt="code"
                className="w-[40px] h-[40px]"
              />
              Data Science
            </Link>

            <Link
              href={"/"}
              className="py-2 px-2 rounded-md flex items-center gap-5"
            >
              <img
                src="./nav/image 14-5.svg"
                alt="code"
                className="w-[40px] h-[40px]"
              />
              Strategy Consulting
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[2%]" />
    </div>
  );
};

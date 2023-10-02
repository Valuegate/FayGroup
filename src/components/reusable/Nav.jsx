"use client";

import Link from "next/link";
import { React, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import Button from "./Button";
import { useRouter } from "next/navigation";

import Logo from "@/public/assets/Logo.svg";
import PD from "@/public/assets/nav/image 12.svg";
import DT from "@/public/assets/nav/image 13.svg";
import BC from "@/public/assets/nav/image 14-6.svg";
import SD from "@/public/assets/nav/image 14.svg";
import UD from "@/public/assets/nav/image 14-1.svg";
import MS from "@/public/assets/nav/image 14-2.svg";
import SE from "@/public/assets/nav/image 14-3.svg";
import DS from "@/public/assets/nav/image 14-4.svg";
import SC from "@/public/assets/nav/image 14-5.svg";

import Image from "next/image";

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
      link: "/blogs",
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

  const toggle = () => setShowFeature(!showFeature);

  return (
    <nav className="flex justify-between px-[10%] sm:px-[5%] py-[32px] items-center bg-transparent ">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" />
      </Link>

      <div
        className={`absolute block sm:hidden left-0 transform ease-linear duration-500 z-20 w-full bg-white shadow-lg px-[12%] py-[2%] ${
          showFeature ? "top-[15%] " : "-top-[100%]"
        } `}
      >
        <div className="flex items-start gap-[10%] mb-[2%]">
          <div className="flex w-[70%] gap-[10%]">
            <div className="flex flex-col w-1/2">
              <p className="text-maroon text-base font-[600] leading-loose">
                FEATURES
              </p>

              <div className="mt-[5%]" />

              <Link href={"/features/product-development"}>
                <div className="flex flex-col">
                  <div className="flex justify-start items-start gap-5">
                    <Image
                      src={PD}
                      alt="product-development"
                      className="w-[40px] h-[40px]"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-slate-950 text-base font-semibold leading-loose">
                        Product Development
                      </p>
                      <p className="w-[100%] text-slate-950 text-base font-normal leading-relaxed">
                        Our experienced team is dedicated in bringing innovative
                        ideas to market.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="mt-[10%]" />
              <Link href={"/features/digital-transformation"}>
                <div className="flex flex-col">
                  <div className="flex justify-start items-start gap-5">
                    <Image
                      src={DT}
                      alt="digital transformation"
                      className="w-[40px] h-[40px]"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-slate-950 text-base font-semibold leading-loose">
                        Digital Transformation
                      </p>
                      <p className="w-[100%] text-slate-950 text-base font-normal leading-relaxed">
                        Unlock new opportunities and stay competitive in the
                        digital age.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex flex-col w-1/2">
              <div className="mt-[10%]" />

              <Link href={"/features/business-consulting"}>
                <div className="flex flex-col">
                  <div className="flex justify-start items-start gap-5">
                    <Image
                      src={BC}
                      alt="business-consulting"
                      className="w-[40px] h-[40px]"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-slate-950 text-base font-semibold leading-loose">
                        Business Consulting
                      </p>
                      <p className=" text-slate-950 text-base font-normal leading-relaxed">
                        Our business consulting experts provide strategic
                        guidance to optimize your operations and drive growth.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-[30%] border-l-gray-200 border-l-2 pl-12">
            <p className="text-maroon text-base font-[600] leading-loose">
              PRODUCT DEVELOPMENT
            </p>

            <div className="mt-[5%]" />

            <div className="flex flex-col">
              <Link
                href={"/features/software-development"}
                className="py-2 px-2 rounded-md flex items-center gap-5"
              >
                <Image
                  src={SD}
                  alt="software development"
                  className="w-[40px] h-[40px]"
                />
                Software Development
              </Link>

              <Link
                href={"/features/ui-ux"}
                className="py-2 px-2 rounded-md flex items-center gap-5"
              >
                <Image src={UD} alt="ui-ux" className="w-[40px] h-[40px]" />
                UI/UX Design
              </Link>

              <Link
                href={"/features/mobile-solution"}
                className="py-2 px-2 rounded-md flex items-center gap-5"
              >
                <Image
                  src={MS}
                  alt="mobile solution"
                  className="w-[40px] h-[40px]"
                />
                Mobile Solution
              </Link>

              <Link
                href={"/features/system-engineering"}
                className="py-2 px-2 rounded-md flex items-center gap-5"
              >
                <Image
                  src={SE}
                  alt="system engineering"
                  className="w-[40px] h-[40px]"
                />
                System Engineering
              </Link>

              <Link
                href={"/features/data-science"}
                className="py-2 px-2 rounded-md flex items-center gap-5"
              >
                <Image
                  src={DS}
                  alt="data science"
                  className="w-[40px] h-[40px]"
                />
                Data Science
              </Link>

              <Link
                href={"/features/strategy-consulting"}
                className="py-2 px-2 rounded-md flex items-center gap-5"
              >
                <Image
                  src={SC}
                  alt="strategy consulting"
                  className="w-[40px] h-[40px]"
                />
                Strategy Consulting
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex w-3/5 justify-evenly">
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
                  onClick={toggle}
                >
                  {nav.name}
                  {nav.icon && nav.icon}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Button
        style="block sm:hidden text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200"
        destination={"/contact-us"}
      >
        Get In Touch
      </Button>

      <FaBarsStaggered size={"30px"} className="hidden sm:block"/>
    </nav>
  );
};

export default Nav;

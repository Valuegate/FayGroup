"use client";

import Link from "next/link";
import { React, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import Button from "./Button";

import { BiX } from "react-icons/bi";

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

const Nav = ({ active = 0, sub = 0 }) => {
  const [showFeature, setShowFeature] = useState(false);

  const services = [
    {
      name: "Software Development",
      link: "/features/software-development",
      key: "Software",
    },
    {
      name: "UI/UX Design",
      link: "/features/ui-ux",
      key: "UI",
    },
    {
      name: "Mobile Solutions",
      link: "/features/mobile-solution",
      key: "Mobile",
    },
    {
      name: "System Engineering",
      link: "/features/system-engineering",
      key: "System",
    },
    {
      name: "Data Science",
      link: "/features/data-science",
      key: "Data",
    },
    {
      name: "Strategy Consulting",
      link: "/features/strategy-consulting",
      key: "Strategy",
    },
  ];

  const features = [
    {
      name: "Product Development",
      link: "/features/product-development",
      children: services,
      key: "Product",
    },
    {
      name: "Digital Transformation",
      link: "/features/digital-transformation",
      key: "Digital",
    },
    {
      name: "Business Consulting",
      key: "Business",
      link: "/features/business-consulting",
    },
  ];

  const navs = [
    {
      name: "Home",
      link: "/",
      key: "Home",
    },
    {
      name: "Our Works",
      link: "/our-works",
      key: "Works",
    },
    {
      name: "Blogs",
      link: "/blogs",
      key: "Blogs",
    },
    {
      name: "About Us",
      link: "/about",
      key: "About",
    },
    {
      name: "Services",
      link: "",
      icon: <FaCaretDown />,
      children: features,
      key: "Services",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
      key: "Contact",
    },
  ];

  const toggle = () => {
    console.log(showFeature);
    setShowFeature(!showFeature);
  };

  return (
    <div className="">
      <nav className="flex w-full justify-between lg:px-[10%] px-[5%] h-[10vh] items-center bg-transparent ">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" />
        </Link>

        {/** Desktop Nav */}

        <div className="flex flex-col h-[100vh]">
          <div
            className={`flex-col px-[12%] absolute lg:block h-fit hidden left-0 transform ease-linear duration-500 z-20 w-full bg-white shadow-lg  py-5 ${
              showFeature ? "top-[10vh]" : "-top-[100%]"
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
                          <p
                            className={`${
                              sub == 1 ? "text-maroon" : "text-slate-950"
                            }  text-base font-semibold leading-loose`}
                          >
                            Product Development
                          </p>
                          <p className="w-[100%] text-slate-950 text-base font-normal leading-relaxed">
                            Our experienced team is dedicated in bringing
                            innovative ideas to market.
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
                          <p
                            className={`${
                              sub == 2 ? "text-maroon" : "text-slate-950"
                            }  text-base font-semibold leading-loose`}
                          >
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
                          <p
                            className={`${
                              sub == 3 ? "text-maroon" : "text-slate-950"
                            }  text-base font-semibold leading-loose`}
                          >
                            Business Consulting
                          </p>
                          <p className=" text-slate-950 text-base font-normal leading-relaxed">
                            Our business consulting experts provide strategic
                            guidance to optimize your operations and drive
                            growth.
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
                    className={`${
                      sub == 4 && "text-maroon"
                    } py-2 px-2 rounded-md flex items-center gap-5`}
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
                    className={`${
                      sub == 5 && "text-maroon"
                    } py-2 px-2 rounded-md flex items-center gap-5`}
                  >
                    <Image src={UD} alt="ui-ux" className="w-[40px] h-[40px]" />
                    UI/UX Design
                  </Link>

                  <Link
                    href={"/features/mobile-solution"}
                    className={`${
                      sub == 6 && "text-maroon"
                    } py-2 px-2 rounded-md flex items-center gap-5`}
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
                    className={`${
                      sub == 7 && "text-maroon"
                    } py-2 px-2 rounded-md flex items-center gap-5`}
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
                    className={`${
                      sub == 8 && "text-maroon"
                    } py-2 px-2 rounded-md flex items-center gap-5`}
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
                    className={`${
                      sub == 9 && "text-maroon"
                    } py-2 px-2 rounded-md flex items-center gap-5`}
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
        </div>

        {/** Mobile Nav */}

        <div
          className={`flex flex-col z-30 lg:hidden ${
            showFeature ? "left-0" : "hidden -left-[100%]"
          } fixed overscroll-y-auto top-0 transform ease-linear duration-500 w-full bg-white h-full shadow-md px-[5%] py-[5%]`}
        >
          <div className="flex w-full mt-[15px] justify-between items-center">
            <Link href={"/"}>
              <Image src={Logo} alt="logo" />
            </Link>

            <BiX size={"32px"} className="text-extraDarkRed" onClick={toggle} />
          </div>

          <div className="mt-10 flex w-full flex-col gap-5 items-start">
            {navs.map((nav, i) => {
              return nav.icon ? (
                <MobileFeatures active={i == active} features={features} />
              ) : (
                <Link
                  href={nav.link}
                  key={i}
                  className={`flex items-center text-base font-normal leading-loose ${
                    i == active && "text-maroon"
                  }`}
                >
                  {nav.name}
                </Link>
              );
            })}
          </div>

          <Button
            style="w-full text-center mt-56 text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200"
            destination={"/contact-us"}
          >
            Get In Touch
          </Button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:w-3/5 justify-evenly">
          {navs.map((nav, i) => {
            return (
              <div
                key={i}
                className={`flex items-center text-[18px] font-normal leading-loose ${
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
                    className={`flex gap-1 items-center cursor-pointer  font-normal leading-loose ${
                      i == active && "text-maroon`"
                    }`}
                    onClick={toggle}
                  >
                    {nav.name}
                    {nav.icon && (showFeature ? <FaCaretUp /> : nav.icon)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Button
          style="lg:block hidden text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200"
          destination={"/contact-us"}
        >
          Get In Touch
        </Button>
        <FaBarsStaggered
          size={"25px"}
          className="lg:hidden block text-extraDarkRed"
          onClick={toggle}
        />
      </nav>
      <div
        onClick={toggle}
        className={`${
          !showFeature && "hidden lg:hidden"
        }  w-[100vw] h-[100vh] opacity-0 fixed z-10 top-0 left-0`}
      />
    </div>
  );
};

export default Nav;

const MobileFeatures = ({ features, active = false }) => {
  const [showMobileFeatures, setShowMobileFeatures] = useState(false);

  return (
    <div key={200} className="flex flex-col w-full">
      <div
        key={100}
        className={`flex w-full justify-between items-center cursor-pointer text-base font-normal leading-loose ${
          active && "text-maroon`"
        }`}
        onClick={() => setShowMobileFeatures(!showMobileFeatures)}
      >
        Services
        {showMobileFeatures ? <FaCaretUp /> : <FaCaretDown />}
      </div>

      <div
        key={50}
        className={`${
          showMobileFeatures ? "" : "hidden"
        } mt-3 px-[5%] flex flex-col w-full gap-5 items-start`}
      >
        {features.map((feature, i) => {
          return i == 0 ? (
            <MobileServices key={feature.key} services={feature.children} />
          ) : (
            <Link
              key={feature.key}
              href={feature.link}
              className="text-base leading-loose font-normal"
            >
              {feature.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const MobileServices = ({ services }) => {
  const [showMobileServices, setShowMobileServices] = useState(false);

  const toggle = () => setShowMobileServices(!showMobileServices);

  return (
    <div className="flex flex-col w-full">
      <div
        key={1283}
        className="flex w-full justify-between items-center cursor-pointer text-base font-normal leading-loose"
        onClick={() => setShowMobileServices(!showMobileServices)}
      >
        <Link
          href={"/features/product-development"}
          className="text-base font-normal leading-loose"
        >
          Product Development
        </Link>
        {showMobileServices ? (
          <FaCaretUp onClick={toggle} />
        ) : (
          <FaCaretDown onClick={toggle} />
        )}
      </div>

      <div
        className={`${
          showMobileServices ? "" : "hidden"
        } mt-3 px-[5%] flex flex-col w-full gap-3 items-start`}
      >
        {services.map((service, i) => {
          return (
            <Link
              href={service.link}
              key={service.key}
              className={`flex items-center text-base font-normal leading-loose`}
            >
              {service.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

'use client';

import Link from "next/link";
import {React} from "react";
import { FaCaretDown } from "react-icons/fa";
import Button from "./Button";
import { useRouter } from "next/navigation";


const Nav = ({ active = 0 }) => {

  const router = useRouter();

  const navs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Features",
      link: "/features",
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
            <Link 
              href={nav.link}
              key={i}
              className={`flex items-center ${
                i == active && "text-maroon text-base font-normal leading-loose"
              }`}
            >
              {nav.name}
              {nav.icon && nav.icon}
            </Link>
          );
        })}
      </div>
      <Button style="text-white bg-darkBlue px-5 py-3 font-[500] rounded-md">
        Get In Touch
      </Button>
    </nav>
  );
};

export default Nav;

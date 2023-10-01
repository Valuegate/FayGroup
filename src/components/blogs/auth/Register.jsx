import React from "react";
import Nav from "../../reusable/Nav";
import Button from "../../reusable/Button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import Choose from "@/public/assets/blogs/Ellipse.png";
import Image from "next/image";
import Footer from "../../reusable/Footer";

const Register = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={Shadow}
          alt="shadow"
          className="absolute top-0 left-0 -z-10 w-full"
        />
        <Nav active={3} />

        <div className="mt-[150px] flex flex-col items-center">
          <div className="flex items-center gap-[10px]">
            <div className="w-[18px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base font-[600] leading-loose">
              CREATE ACCOUNT
            </p>
          </div>

          <p className="text-slate-950 text-4xl font-[600] leading-[48px] text-center">
            Get Started to Begin{" "}
            <span className="text-red-950">Blog Creation</span>
          </p>

          <Image
            src={Choose}
            alt="Choose Image"
            className="h-[150px] w-[150px] mt-20 cursor-pointer"
          />

          <div className="flex flex-col items-start mt-20">
            <p className="text-slate-950 text-base font-medium leading-loose mb-1">
              Name
            </p>
            <input
              type="text"
              className="w-[500px] bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm mb-3"
              placeholder=""
            />
            <p className="text-slate-950 text-base font-medium leading-loose mb-1">
              Email Address
            </p>
            <input
              type="email"
              className="w-[500px] bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm mb-3"
              placeholder="example@example.com"
            />
            <p className="text-slate-950 text-base font-medium leading-loose mb-1">
              Password
            </p>
            <input
              type="password"
              className="w-[500px] bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm"
              placeholder=""
            />
          </div>
          <Button
            style={
              "w-[300px] bg-darkBlue rounded-[5px] text-white py-2.5 mt-[5%] hover:bg-extraDarkRed"
            }
          >
            Create Account
          </Button>
        </div>
      </div>

      <div className="h-[300px]" />
      <Footer />
    </>
  );
};

export default Register;

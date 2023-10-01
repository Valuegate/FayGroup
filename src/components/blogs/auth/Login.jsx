import React from "react";
import Nav from "../../reusable/Nav";
import Button from "../../reusable/Button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import Client from "@/public/assets/landing-page/Client Image.svg";
import Image from "next/image";
import Footer from "../../reusable/Footer";

const Login = () => {
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
              LOGIN
            </p>
          </div>

          <p className="text-slate-950 text-4xl font-[600] leading-[48px] text-center">
            Login to <span className="text-red-950">Continue Managing</span>{" "}
            your CRM
          </p>
          <div className="flex flex-col items-start mt-20">
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
            Login
          </Button>
        </div>
      </div>
      <div className="h-[300px]" />
      <Footer />
    </>
  );
};

export default Login;

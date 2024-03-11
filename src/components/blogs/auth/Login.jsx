"use client";

import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import { ToastContainer, toast } from "react-toastify";
import Nav from "../../reusable/NavBar";
import Button from "../../reusable/Button";
import Link from "next/link";
import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import Image from "next/image";
import Footer from "../../reusable/Footer";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
const https = require("https");

const Login = () => {
  const [user, setUser] = useLocalStorage("faygroup-user", {});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = () => {
    if (document.getElementById("emailID").value.length == 0) {
      toast.error("Please enter your email");
      return;
    } else if (document.getElementById("passwordID").value.length == 0) {
      toast.error("Please enter your password");
      return;
    }

    setLoading(true);
    axios({
      method: "POST",
      url: `https://faysolutions.com:3001/api/users/sign-in`,
      data: {
        email: document.getElementById("emailID").value,
        password: document.getElementById("passwordID").value,
      },
    })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
        toast.success(`Welcome back, ${res.data.name}`);
        window.location.replace("/blogs/create-blog");
      })
      .catch((err) => {
        console.error(err);
        setUser({});
        setLoading(false);
        toast.error("An error occurred to sign you in. Please try again");
      });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        rtl={false}
        theme="colored"
      />
      <div className={`${loading && "overflow-hidden"} relative`}>
        <div
          className={`overflow-y-auto flex flex-col bg-fadedBlack overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full  h-full max-h-full ${
            !loading && "hidden"
          }`}
        >
          <SpinningCircles fill="#A2393F" />
        </div>

        <div>
          <Image
            src={Shadow}
            alt="shadow"
            className="absolute top-0 left-0 -z-10 w-full"
          />

          <Nav active={3} />

          <div className="lg:mt-32 mt-16 flex flex-col items-center">
            <div className="flex flex-col gap-5 items-center mt-10">
              <div className="flex items-center gap-[10px]">
                <div className="w-[14px]">
                  <Image src={Pin} alt="pin" />
                </div>
                <p className="text-maroon text-base font-medium leading-loose">
                  LOGIN
                </p>
              </div>
              <p className="text-slate-950 lg:text-4xl text-2xl font-medium text-center leading-9 lg:leading-[44px]">
                Login to <span className="text-red-950">Continue Managing</span>{" "}
                your CRM
              </p>
            </div>

            <div className="flex flex-col items-start lg:justify-center lg:items-center mt-20 w-full px-[5%]">
              <div className="flex flex-col w-full lg:w-fit">
                <p className="text-slate-950 text-base font-medium leading-loose mb-1">
                  Email Address
                </p>
                <input
                  type="email"
                  className="lg:w-[500px] w-full bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm mb-3"
                  placeholder="example@example.com"
                  id="emailID"
                />
              </div>
              <div className="flex flex-col w-full lg:w-fit">
                <p className="text-slate-950 text-base font-medium leading-loose mb-1">
                  Password
                </p>
                <div className="relative lg:w-[500px] w-full flex justify-center items-center">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    className="lg:w-[500px] w-full bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm"
                    placeholder=""
                    id="passwordID"
                  />
                  <div
                    className="absolute right-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <IoMdEyeOff fill="#470912" size={"20px"} />
                    ) : (
                      <IoMdEye fill="#470912" size={"20px"} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 w-full lg:w-fit px-[5%]">
              <Button
                style={
                  "lg:w-[300px] w-full bg-darkBlue rounded-[5px] text-white py-2.5 mt-[5%] hover:bg-extraDarkRed text-center"
                }
                onClick={login}
              >
                Login
              </Button>
            </div>

            <Link className="mt-10 " href={"/blogs/register"}>
              Don't have an account yet?{" "}
              <span className="text-maroon">Register</span>
            </Link>
          </div>
        </div>
        <div className="lg:h-32 h-20" />
        <Footer />
      </div>
    </>
  );
};

export default Login;

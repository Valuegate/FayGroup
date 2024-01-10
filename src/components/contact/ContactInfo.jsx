import React from "react";
import Button from "../reusable/Button";

import Pin from "@/public/assets/Pin.svg";
import Background from "@/public/assets/contact/Background.svg";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className="flex h-full pt-20 lg:pb-20 flex-col bg-offWhite lg:flex-row lg:px-[10%] px-[5%] justify-between items-start lg:items-center gap-10 lg:gap-[10%]">
      <Info />
      <Content />
    </div>
  );
};

const Info = () => {
  return (
    <div className="flex flex-col lg:w-[50%] w-full px-0">
      <div className="flex items-center gap-[10px]">
        <div className="w-[14px]">
          <Image src={Pin} alt="pin" />
        </div>
        <p className="text-maroon text-base text-xs font-medium leading-loose">
          MESSAGE
        </p>
      </div>
      <p className="text-slate-950 lg:text-4xl text-2xl leading-9 font-medium lg:leading-[48px]">
        Turn your <span className="text-red-950">ideas</span> into reality
      </p>
      <p className="text-slate-950 text-base font-normal leading-loose mt-5">
        Connect with us and let's get started.
      </p>
    </div>
  );
};

const Content = () => {
  function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("address").value;
    let number = document.getElementById("number").value;
    let message = document.getElementById("message").value;
    let body = `Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\nMessage: ${message}`;
    //console.log(body);
    let destination = `info@mbfaygroup.com?subject=Contact Information&body=${body}`;
    window.location.href = `mailto:${destination}`;
  }

  return (
    <div className="relative">
      <Image
        src={Background}
        alt="background"
        className="lg:h-auto h-[650px] object-cover"
      />
      <div className="w-[92%] lg:w-[80%] h-[90%] flex flex-col bg-white absolute z-10 top-[5%] left-[4%] lg:left-[10%] rounded-[12px] items-center px-[7%] py-[5%]">
        <p className="text-slate-950 lg:text-2xl text-xl font-medium leading-9">
          Get in Touch
        </p>
        <div className="flex flex-col items-start mt-[8%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Full Name
          </p>
          <input
            type="text"
            id="name"
            className="w-full bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm"
            placeholder="Enter Full Name"
          />
        </div>
        <div className="flex flex-col items-start mt-[2%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Email Address
          </p>
          <input
            type="email"
            id="address"
            className="w-full bg-blandGrey border px-2 py-2.5 font-normal focus:outline-none rounded-sm"
            placeholder="Enter Email Address"
          />
        </div>
        <div className="flex flex-col items-start mt-[2%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Phone Number
          </p>
          <input
            type="text"
            id="number"
            className="w-full bg-blandGrey border px-2 py-2.5 font-normal focus:outline-none rounded-sm"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="flex flex-col items-start mt-[2%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Message
          </p>
          <textarea
            type="text"
            id="message"
            className="w-full bg-blandGrey border px-2 py-3 lg:h-[150px] h-[100px] font-normal resize-none focus:outline-none rounded-sm"
            placeholder="Type Here..."
          />
        </div>

        <Button
          onClick={() => sendMail()}
          style="w-full mt-10 text-center text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Content;

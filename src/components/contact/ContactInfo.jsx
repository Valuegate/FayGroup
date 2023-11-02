import React from "react";
import Button from "../reusable/Button";

import Pin from "@/public/assets/Pin.svg";
import Background from "@/public/assets/contact/Background.svg";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className="flex sm:flex-col px-[10%] sm:px-[5%] justify-between sm:items-start items-center sm:gap-10 gap-[10%]">
      <div className="relative">
        <Info hidden={true} />
      </div>
      <Content hidden={true} />
      <Info hidden={false} />
      <Content hidden={false} />
    </div>
  );
};

export default ContactInfo;

const Info = ({ hidden = false }) => {
  return (
    <div
      className={`${
        hidden
          ? "hidden sm:block sm:w-full"
          : "sm:hidden flex flex-col w-[50%] sm:w-full sm:px-[5%]"
      }`}
    >
      <div className="flex items-center gap-[10px]">
        <div className="w-[14px]">
          <Image src={Pin} alt="pin" />
        </div>
        <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
          MESSAGE
        </p>
      </div>
      <p className="text-slate-950 text-4xl sm:text-2xl sm:leading-9 font-medium leading-[48px]">
        Turn your <span className="text-red-950">ideas</span> into reality
      </p>
      <p className="text-slate-950 text-base font-normal leading-loose mt-[5%]">
        Connect with us and let's get started.
      </p>
    </div>
  );
};

const Content = ({ hidden = false }) => {
  return (
    <div className={`relative ${hidden ? "sm:hidden" : "hidden sm:block"}`}>
      <Image src={Background} alt="background" className="sm:h-[610px] h-full" />
      <div className=" sm:w-[98%] w-[80%] h-[90%] sm:h-[550px] flex flex-col bg-white absolute z-10 top-[5%] sm:left-[1%] left-[10%] rounded-[12px] items-center px-[7%] py-[5%]">
        <p className="text-slate-950 text-2xl sm:text-xl font-medium leading-9">
          Get in Touch
        </p>
        <div className="flex flex-col items-start mt-[8%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Full Name
          </p>
          <input
            type="text"
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
            className="w-full bg-blandGrey border px-2 py-2.5 font-normal focus:outline-none rounded-sm"
            placeholder="Enter Email Address"
          />
        </div>
        <div className="flex flex-col items-start mt-[2%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Phone Number
          </p>
          <input
            type="number"
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
            className="w-full bg-blandGrey border px-2 py-3 h-[100px] font-normal resize-none focus:outline-none rounded-sm"
            placeholder="Type Here..."
          />
        </div>

        <Button
          style={
            "w-full bg-darkBlue rounded-sm text-white py-2.5 mt-[5%] hover:bg-extraDarkRed text-center transition ease-in-out duration-200"
          }
        >
          Send
        </Button>
      </div>
    </div>
  );
};

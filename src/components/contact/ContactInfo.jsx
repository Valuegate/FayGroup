import React from "react";
import Button from "../reusable/Button";

import Pin from "@/public/assets/Pin.svg";
import Background from "@/public/assets/contact/Background.png";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className="flex px-[15%] justify-between items-center gap-[10%]">
      <div className="relative">
        <Image src={Background} alt="background" />
        <div className="w-[80%] h-[80%] flex flex-col bg-white absolute z-10 top-[10%] left-[10%] rounded-[12px] items-center px-[7%] py-[5%]">
          <p className="text-slate-950 text-2xl font-medium leading-9">
            Get in Touch
          </p>
          <div className="flex flex-col items-start mt-[8%] w-full">
            <p className="text-slate-950 text-base font-medium leading-loose">
              Full Name
            </p>
            <input type="text" className="w-full bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm" placeholder="Enter Full Name"  />
          </div>
          <div className="flex flex-col items-start mt-[2%] w-full">
            <p className="text-slate-950 text-base font-medium leading-loose">
              Email Address
            </p>
            <input type="email" className="w-full bg-blandGrey border px-2 py-2.5 font-normal focus:outline-none rounded-sm" placeholder="Enter Email Address"  />
          </div>
          <div className="flex flex-col items-start mt-[2%] w-full">
            <p className="text-slate-950 text-base font-medium leading-loose">
              Phone Number
            </p>
            <input type="number" className="w-full bg-blandGrey border px-2 py-2.5 font-normal focus:outline-none rounded-sm" placeholder="Enter Phone Number"  />
          </div>
          <div className="flex flex-col items-start mt-[2%] w-full">
            <p className="text-slate-950 text-base font-medium leading-loose">
              Message
            </p>
            <textarea type="text" className="w-full bg-blandGrey border px-2 py-3 font-normal resize-none focus:outline-none rounded-sm" placeholder="Type Here..."  />
          </div>

          <Button style={"w-full bg-darkBlue rounded-sm text-white py-2.5 mt-[5%] hover:bg-extraDarkRed text-center transition ease-in-out duration-200"} > 
              Send
          </Button>
        </div>
      </div>

      <div className="flex flex-col w-[50%]">
        <div className="flex items-center gap-[10px] mt-[16px]">
          <div className="w-[18px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-[600] leading-loose">
            MESSAGE
          </p>
        </div>
        <p className="text-slate-950 text-4xl font-[600] leading-[48px] w-full">
          Turn your <span className="text-red-950">ideas</span> into reality.
        </p>
        <p className="text-slate-950 text-base font-normal leading-loose mt-[5%]">
          Connect with us and let's get started.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;

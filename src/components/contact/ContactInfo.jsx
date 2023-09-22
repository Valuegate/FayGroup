import React from "react";
import Button from "../reusable/Button";

const ContactInfo = () => {
  return (
    <div className="flex px-[15%] justify-between items-center gap-[10%]">
      <div className="relative">
        <img src="./contact/Background.png" alt="background" />
        <div className="w-[80%] h-[80%] flex flex-col bg-white absolute z-10 top-[10%] left-[10%] rounded-[12px] items-center px-[7%] py-[5%]">
          <div className="text-slate-950 text-2xl font-medium leading-9">
            Get in Touch
          </div>
          <div className="flex flex-col items-start mt-[8%] w-full">
            <div className="text-slate-950 text-base font-medium leading-loose">
              Full Name
            </div>
            <input type="text" className="w-full bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm" placeholder="Enter Full Name"  />
          </div>
          <div className="flex flex-col items-start mt-[2%] w-full">
            <div className="text-slate-950 text-base font-medium leading-loose">
              Email Address
            </div>
            <input type="text" className="w-full bg-blandGrey border px-2 py-2.5 font-normal focus:outline-none rounded-sm" placeholder="Enter Email Address"  />
          </div>
          <div className="flex flex-col items-start mt-[2%] w-full">
            <div className="text-slate-950 text-base font-medium leading-loose">
              Phone Number
            </div>
            <input type="text" className="w-full bg-blandGrey border px-2 py-2.5 font-normal focus:outline-none rounded-sm" placeholder="Enter Phone Number"  />
          </div>
          <div className="flex flex-col items-start mt-[2%] w-full">
            <div className="text-slate-950 text-base font-medium leading-loose">
              Message
            </div>
            <textarea type="text" className="w-full bg-blandGrey border px-2 py-3 font-normal resize-none focus:outline-none rounded-sm" placeholder="Type Here..."  />
          </div>

          <Button style={"w-full bg-darkBlue rounded-sm text-white py-2.5 mt-[5%] hover:bg-extraDarkRed"}> 
              Send
          </Button>
        </div>
      </div>

      <div className="flex flex-col w-[50%]">
        <div className="flex items-center gap-[10px] mt-[16px]">
          <div className="w-[18px]">
            <img src="./Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            MESSAGE
          </div>
        </div>
        <div className="text-slate-950 text-4xl font-[600] leading-[48px] w-full">
          Turn your <span className="text-red-950">ideas</span> into reality.
        </div>
        <div className="text-slate-950 text-base font-normal leading-loose mt-[5%]">
          Connect with us and let's get started.
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

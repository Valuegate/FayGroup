import React from "react";

import Button from "@/src/components/reusable/Button";

const Contact = () => {
  return (
    <div className="flex w-full items-center mb-[200px]">
      <div className="flex flex-col w-[50%] ml-[200px]">
        <div className="flex items-center gap-[10px] mt-[16px]">
          <div className="w-[18px]">
            <img src="./LandingPage/Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            CONTACT US
          </div>
        </div>

        <div className="flex gap-[10px] items-center w-full">
          <div className="text-slate-950 text-4xl font-[600] leading-[48px]">
            Don't Hesitate To
          </div>
          <div className="text-red-950 text-4xl font-[600] leading-[48px]">
            Contact Us
          </div>
        </div>

        <div className="w-[557px] text-slate-950 text-base font-normal leading-loose">
          Don't hesitate to contact us with your questions, ideas, or
          challenges. We are eager to listen, understand, and create digital
          solutions that drive remarkable results for your business.
        </div>

        <div className="flex flex-col gap-[20px] items-start mt-[20px]">
          <div className="flex gap-[20px] items-center justify-start">
            <div>
              <img src="./LandingPage/Call.svg" alt="" />
            </div>

            <div className=" text-slate-950 text-base font-normal leading-loose">
              +370 608 769 51
            </div>
          </div>
          <div className="flex gap-[20px] items-center justify-start">
            <div>
              <img src="./LandingPage/Message.svg" alt="" />
            </div>
            <div className=" text-slate-950 text-base font-normal leading-loose">
              faygroup@gmail.com
            </div>
          </div>
        </div>
      </div>

      <div className="w-[50%] h-auto">
        <img src="./LandingPage/Contact.svg" alt="" />
      </div>
    </div>
  );
};

export default Contact;

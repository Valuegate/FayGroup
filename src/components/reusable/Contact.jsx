import React from "react";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";
import Call from "@/public/assets/landing-page/Call.svg";
import Message from "@/public/assets/landing-page/Message.svg";
import ContactImage from "@/public/assets/landing-page/Contact.svg";

const Contact = () => {
  return (
    <div className="flex w-full items-center py-[5%] px-[10%] gap-[10%]">
      <div className="flex flex-col w-[50%]">
        <div className="flex items-center gap-[15px] mt-[16px]">
          <div className="w-[18px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-[600] leading-loose">
            CONTACT US
          </p>
        </div>

        <div className="mt-[3%]" />

        <div className="flex gap-[10px] items-center w-full">
          <p className="text-slate-950 text-4xl font-[600] leading-[48px]">
            Don't Hesitate To <span className="text-red-950">Contact Us</span>
          </p>
        </div>

        <div className="mt-[5%]" />

        <p className="w-[557px] text-slate-950 text-base font-normal leading-loose">
          Don't hesitate to contact us with your questions, ideas, or
          challenges. We are eager to listen, understand, and create digital
          solutions that drive remarkable results for your business.
        </p>

        <div className="flex flex-col gap-[20px] items-start mt-[20px]">
          <div className="flex gap-[20px] items-center justify-start">
            <div>
              <Image src={Call} alt="Call" />
            </div>

            <p className=" text-slate-950 text-base font-normal leading-loose">
              +370 608 769 51
            </p>
          </div>
          <div className="flex gap-[20px] items-center justify-start">
            <div>
              <Image src={Message} alt="Message" />
            </div>
            <p className=" text-slate-950 text-base font-normal leading-loose">
              info@mbfaygroup.com
            </p>
          </div>
        </div>
      </div>

      <div className="w-[50%] h-auto">
        <Image src={ContactImage} alt="Contact" />
      </div>
    </div>
  );
};

export default Contact;

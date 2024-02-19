import React from "react";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";
import Call from "@/public/assets/landing-page/Call.svg";
import Message from "@/public/assets/landing-page/Message.svg";
import ContactImage from "@/public/assets/landing-page/Contact.svg";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-16 lg:mt-0 items-center py-[5%] lg:px-[10%] px-[5%] gap-16">
      <div className="flex flex-col lg:w-[50%] w-full">
        <div className="flex flex-col gap-[20px] items-start">
          <div className="flex items-center gap-[10px]">
            <div className="w-[14px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
              CONTACT US
            </p>
          </div>

          <p className="text-slate-950 lg:text-4xl text-2xl font-medium leading-9 lg:leading-[44px]">
            Don't Hesitate To <span className="text-red-950">Contact Us</span>
          </p>
        </div>

        

        <p className="w-full mt-5 text-slate-950 text-base font-normal leading-loose">
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

      <div className="w-[50%] h-auto hidden lg:block">
        <Image src={ContactImage} alt="Contact" />
      </div>

      <div className="w-full h-auto lg:hidden">
        <Image src={ContactImage} alt="Contact" />
      </div>
    </div>
  );
};

export default Contact;

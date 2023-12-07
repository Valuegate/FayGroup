import React from "react";

import Button from "./Button";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

const TextWithImage = ({
  image,
  children,
  pinText,
  preRedText,
  postRedText,
  redText,
  content,
  includeButton,
  left,
  right,
  useRedBackground,
}) => {
  return (
    <div className="flex flex-col lg:flex-row mt-10">
      <div
        className={`flex w-full gap-[10%] items-center ${
          useRedBackground && useRedBackground && "bg-slightRedBackground"
        } pt-16 lg:pb-16 lg:px-[10%] px-[5%]`}
      >
        {left && (
          <div className="w-[50%] lg:block hidden">
            <Image src={image} alt="image" />
          </div>
        )}

        <div className="flex flex-col lg:w-[50%] w-full">
          <div className="flex items-center gap-[10px]">
            <div className="w-[14px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base font-medium leading-loose">
              {pinText}
            </p>
          </div>

          <p className="text-slate-950 mt-5 lg:text-4xl text-2xl leading-9 font-medium lg:leading-[48px]">
            {preRedText} <span className="text-red-950">{redText}</span>{" "}
            {postRedText}
          </p>

          <p className="text-slate-950 mt-5 text-base font-normal leading-loose">
            {content}
          </p>

          {children}

          {includeButton && (
            <Button
              style="w-full lg:w-[200px] text-white text-center mt-12 bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200"
              destination={"/contact-us"}
            >
              Get In Touch
            </Button>
          )}
        </div>

        {right && (
          <div className="w-[50%] lg:block hidden">
            <Image src={image} alt="image" />
          </div>
        )}
      </div>

      <div
        className={`lg:hidden w-full px-[5%] py-20 ${
          useRedBackground && "bg-slightRedBackground"
        } `}
      >
        <Image src={image} alt="image" />
      </div>
    </div>
  );
};

export default TextWithImage;

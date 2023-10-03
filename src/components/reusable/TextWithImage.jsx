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
    <div className="sm:flex sm:flex-col">
      <div
        className={`flex w-full gap-[10%] items-center ${
          useRedBackground && useRedBackground && "bg-slightRedBackground"
        } py-[5%] px-[10%] sm:px-[5%]`}
      >
        {left && (
          <div className="w-[50%] block sm:hidden">
            <Image src={image} alt="image" />
          </div>
        )}

        <div className="flex flex-col w-[50%] sm:w-full sm:mt-20">
          <div className="flex items-center gap-[10px]">
            <div className="w-[14px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
              {pinText}
            </p>
          </div>

          <div className="mt-[3%]" />

          <p className="text-slate-950 text-4xl sm:text-2xl sm:leading-9 font-medium leading-[48px]">
            {preRedText} <span className="text-red-950">{redText}</span>{" "}
            {postRedText}
          </p>

          <div className="mt-[5%]" />

          <p className="text-slate-950 text-base font-normal leading-loose">
            {content}
          </p>

          {children}

          {includeButton && (
            <Button
              style="sm:w-full text-white text-center mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md w-[160px] hover:bg-extraDarkRed transition ease-in-out duration-200"
              destination={"/contact-us"}
            >
              Get In Touch
            </Button>
          )}
        </div>

        {right && (
          <div className="w-[50%] block sm:hidden">
            <Image src={image} alt="image" />
          </div>
        )}
      </div>

      <div
        className={`hidden sm:block sm:w-full sm:px-[5%] ${
          useRedBackground && "bg-slightRedBackground"
        } `}
      >
        <Image src={image} alt="image" className="sm:mt-20 sm:mb-20" />
      </div>
    </div>
  );
};

export default TextWithImage;

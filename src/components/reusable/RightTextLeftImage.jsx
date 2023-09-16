import React from "react";
import Button from "./Button";

const RightTextLeftImage = ({
  image,
  children,
  pinText,
  preRedText,
  postRedText,
  redText,
  content,
  includeButton,
  cropImage,
}) => {
  return (
    <div className="flex w-full items-center relative mt-[100px]">
      <img src="./shadow.svg" alt="" className="absolute top-0 left-0 -z-10" />
      <div className={`w-[50%] ${cropImage ? "h-[400px]" : "h-auto"}`}>
        <img src={image} alt="" />
      </div>

      <div className="flex flex-col w-[50%] px-[100px]">
        <div className="flex items-center gap-[10px] mt-[16px]">
          <div className="w-[18px]">
            <img src="./LandingPage/Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            {pinText}
          </div>
        </div>

        <div className="text-slate-950 mt-[12px] text-4xl font-[600] leading-[48px]">
          {preRedText}{" "}
          <div className="text-red-950 text-4xl font-[600] leading-[48px]">
            {redText}
          </div>
          {postRedText}
        </div>

        <div className="text-slate-950 text-base font-normal leading-loose">
         {content}
        </div>

        {children}

        {includeButton && (
          <Button style="text-white mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md w-[160px]">
            Get In Touch
          </Button>
        )}
      </div>
    </div>
  );
};

export default RightTextLeftImage;

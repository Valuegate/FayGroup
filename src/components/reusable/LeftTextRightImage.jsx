import Button from "@/src/components/reusable/Button";
import React from "react";

const LeftTextRightImage = ({
  pinText,
  preRedText,
  redText,
  postRedText,
  content,
  image,
  children,
  includeButton,
  cropImage,
}) => {
  return (
    <div className="flex w-full items-center mt-[100px]">
      <div className="flex flex-col w-[50%] ml-[200px]">
        <div className="flex items-center gap-[10px] mt-[16px]">
          <div className="w-[18px]">
            <img src="./LandingPage/Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            {pinText}
          </div>
        </div>

        <div className="flex gap-[10px] items-center w-full">
          <div className="text-slate-950 text-4xl font-[600] leading-[48px]">
            {preRedText}
          </div>
          <div className="text-red-950 text-4xl font-[600] leading-[48px]">
            {redText}
          </div>
          <div className="text-slate-950 text-4xl font-[600] leading-[48px]">
            {postRedText}
          </div>
        </div>

        <div className="w-[557px] text-slate-950 text-base font-normal leading-loose">
          {content}
        </div>

        {children}

        {includeButton && (
          <Button style="text-white mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md w-[160px]">
            Get In Touch
          </Button>
        )}
      </div>

      <div className={`w-[50%] ${cropImage ? "h-[40%]" : "h-auto"}`}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default LeftTextRightImage;

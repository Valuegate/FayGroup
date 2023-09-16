import React from "react";

import Button from "./Button";

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
  cropImage,
}) => {
  return (
    <div className="flex w-full items-center relative mt-[5%]">
      <img src="./shadow.svg" alt="" className="absolute top-0 left-0 -z-10" />

      {left && (
        <div className={`w-[50%] ${cropImage ? "h-[400px]" : "h-auto"}`}>
          <img src={image} alt="image" />
        </div>
      )}

      <div className="flex flex-col w-[50%] px-[100px]">
        <div className="flex items-center gap-[10px] mt-[16px]">
          <div className="w-[18px]">
            <img src="./Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            {pinText}
          </div>
        </div>

        <div className="text-slate-950 text-4xl font-[600] leading-[48px]">
          {preRedText} <span className="text-red-950">{redText}</span>{" "}
          {postRedText}
        </div>

        <div className="text-slate-950 text-base font-normal leading-loose mt-[10%]">
          {content}
        </div>

        {children}

        {includeButton && (
          <Button style="text-white mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md w-[160px]">
            Get In Touch
          </Button>
        )}
      </div>

      {right && (
        <div className={`w-[50%] ${cropImage ? "h-[400px]" : "h-auto"}`}>
          <img src={image} alt="image" />
        </div>
      )}
    </div>
  );
};

export default TextWithImage;

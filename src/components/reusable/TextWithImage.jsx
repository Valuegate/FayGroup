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
  useRedBackground,
}) => {
  return (
    <div
      className={`flex w-full gap-[10%] items-center ${
        useRedBackground && useRedBackground && "bg-pink-50"
      } py-[5%] px-[10%]`}
    >
      {left && (
        <div className="w-[50%]">
          <img src={image} alt="image" />
        </div>
      )}

      <div className="flex flex-col w-[50%]">
        <div className="flex items-center gap-[15px]">
          <div className="w-[18px]">
            <img src="./Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            {pinText}
          </div>
        </div>

        <div className="mt-[3%]" />

        <div className="text-slate-950 text-4xl font-[600] leading-[48px]">
          {preRedText} <span className="text-red-950">{redText}</span>{" "}
          {postRedText}
        </div>

        <div className="mt-[5%]" />

        <div className="text-slate-950 text-base font-normal leading-loose">
          {content}
        </div>

        {children}

        {includeButton && (
          <Button style="text-white mt-[32px] bg-darkBlue px-5 py-3 font-[500] rounded-md w-[160px] hover:bg-extraDarkRed">
            Get In Touch
          </Button>
        )}
      </div>

      {right && (
        <div className="w-[50%]">
          <img src={image} alt="image" />
        </div>
      )}
    </div>
  );
};

export default TextWithImage;

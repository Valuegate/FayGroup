import React from "react";
import Nav from "@/src/components/reusable/Nav";
import Button from "@/src/components/reusable/Button";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";

const Banner = ({
  image,
  active,
  firstText,
  secondText,
  subtitle,
  hideExplore,
  swapRedText = false,
  hidePinText = true,
  pinText = "",
  includeButton = true,
}) => {
  return (
    <div className="relative">
      <Image
        src={Shadow}
        alt="Shadow"
        className="absolute top-0 left-0 -z-10 w-full"
      />
      <Nav active={active} />
      <div className="mt-[96px] pb-[150px] px-[10%]">
        <div className="flex gap-10 items-start justify-between">
          <div className="w-[50%] flex flex-col">
            <div className="flex flex-col gap-[32px] mt-[10px]">
              <div className="w-full flex-shrink">
                {!hidePinText && (
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[18px]">
                      <Image src={Pin} alt="pin" />
                    </div>
                    <div className="text-maroon text-base font-[600] leading-loose">
                      {pinText}
                    </div>
                  </div>
                )}
                <p
                  className={`${
                    swapRedText ? "text-red-950" : "text-slate-950"
                  } text-[64px] font-[500] leading-[88px]`}
                >
                  {firstText}{" "}
                  <span
                    className={`${
                      !swapRedText ? "text-red-950" : "text-slate-950"
                    } text-[64px] font-[500] leading-[88px] `}
                  >
                    {secondText}
                  </span>
                </p>
              </div>

              <div className="w-[90%] text-slate-950 text-base font-normal leading-loose">
                {subtitle}
              </div>

              <div className="flex justify-start items-center gap-[20px]">
                {includeButton && (
                  <Button
                    style="text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200 text-center"
                    destination={"/contact-us"}
                  >
                    Get In Touch
                  </Button>
                )}
                {!hideExplore && (
                  <Button style="text-darkBlue bg-blandGrey px-5 py-3 font-[500] rounded-md">
                    Explore More
                  </Button>
                )}
              </div>
            </div>
          </div>

          <Image src={image} alt="image" className="w-[50%] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

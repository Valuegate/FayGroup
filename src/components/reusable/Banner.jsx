import React from "react";
import Nav from "@/src/components/reusable/Nav";
import Button from "@/src/components/reusable/Button";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";

function scrollToElement(elementID) {
  const element = document.getElementById(elementID);
  element?.scrollIntoView({
    behavior: "smooth",
  });
}

const Banner = ({
  image,
  active,
  subActive = 0,
  firstText,
  secondText,
  subtitle,
  hideExplore,
  swapRedText = false,
  hidePinText = true,
  pinText = "",
  includeButton = true,
  scrollTo = "",
}) => {
  return (
    <div className="relative">
      <Image
        src={Shadow}
        alt="Shadow"
        className="absolute top-0 left-0 -z-10 w-full"
      />
      <Nav active={active} sub={subActive} />
      <div className="mt-[96px] sm:mt-10 pb-[150px] px-[10%] sm:px-[5%] sm:flex sm:flex-col">
        <div className="flex gap-10 items-start justify-between">
          <div className="w-[50%] sm:w-full flex flex-col">
            <div className="flex flex-col gap-5  mt-[10px]">
              <div className="w-full flex-shrink">
                {!hidePinText && (
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[14px]">
                      <Image src={Pin} alt="pin" />
                    </div>
                    <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
                      {pinText}
                    </p>
                  </div>
                )}
                <p
                  className={`${
                    swapRedText ? "text-red-950" : "text-slate-950"
                  } text-[64px] sm:text-[32px] font-[500] sm:leading-[48px] leading-[88px]`}
                >
                  {firstText}{" "}
                  <span
                    className={`${
                      !swapRedText ? "text-red-950" : "text-slate-950"
                    } text-[64px] font-[500] leading-[88px] sm:leading-[48px] sm:text-[32px]`}
                  >
                    {secondText}
                  </span>
                </p>
              </div>

              <div className="w-[90%] sm:w-full text-slate-950 text-base font-normal leading-loose">
                {subtitle}
              </div>

              <div className="flex sm:flex-col sm:w-full justify-start items-center gap-[20px]">
                {includeButton && (
                  <Button
                    style="text-white text-center sm:w-full bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200 text-center"
                    destination={"/contact-us"}
                  >
                    Get In Touch
                  </Button>
                )}
                {!hideExplore && (
                  <Button
                    style="text-darkBlue text-center sm:w-full bg-blandGrey px-5 py-3 font-[500] rounded-md"
                    onClick={() => scrollToElement(scrollTo)}
                  >
                    Explore More
                  </Button>
                )}
              </div>
            </div>
          </div>

          <Image src={image} alt="image" className="w-[50%] h-auto sm:hidden" />
        </div>

        <Image
          src={image}
          alt="image"
          className="w-full sm:mt-10 h-auto hidden sm:block"
        />
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import Nav from "@/src/components/reusable/Nav";
import Button from "@/src/components/reusable/Button";

const Banner = ({
  image,
  active,
  firstText,
  secondText,
  subtitle,
  hideExplore,
}) => {
  return (
    <div className="relative">
      <img src="./shadow.svg" alt="" className="absolute top-0 left-0 -z-10 w-full" />
      <Nav active={active} />
      <div className="mt-[96px] pb-[150px] px-[200px]">
        <div className="flex items-start justify-between">
          <div className="w-[50%] flex flex-col">
            <div className="flex flex-col gap-[32px] mt-[10px]">
              <div className="w-full flex-shrink">
                <p className="text-slate-950 text-[64px] font-[500] leading-[88px]">
                  {firstText}{" "}
                  <span className="text-red-950 text-[64px] font-[500] leading-[88px] ">
                    {secondText}
                  </span>
                </p>
              </div>

              <div className="w-[90%] text-slate-950 text-base font-normal leading-loose">
                {subtitle}
              </div>

              <div className="flex justify-start items-center gap-[20px]">
                <Button style="text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed">
                  Get In Touch
                </Button>
                {!hideExplore && (
                  <Button style="text-darkBlue bg-blandGrey px-5 py-3 font-[500] rounded-md">
                    Explore More
                  </Button>
                )}
              </div>
            </div>
          </div>

          <img src={image} alt="image" className="w-[50%] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

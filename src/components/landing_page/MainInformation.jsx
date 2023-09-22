import Nav from "@/src/components/reusable/Nav";
import Button from "@/src/components/reusable/Button";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import HeroImage from "./HeroImage";

const MainInformation = () => {
  return (
    <div className="relative">
      <img
        src="./shadow.svg"
        alt=""
        className="absolute top-0 left-0 -z-10 w-full"
      />
      <Nav />
      <div className="mt-[5%] mb-[10%]">
        <div className="flex gap-[10%] items-start justify-start mx-[10%]">
          <div className="w-[50%] flex flex-col">
            <div className="flex items-center">
              <div>
                <img src="./landing-page/Welcome.svg" alt="welcome" />
              </div>

              <div className="bg-extraDarkRed rounded-[40px] py-3 px-5">
                <div className="text-white text-base font-[500] leading-loose">
                  WELCOME TO FAYGROUP 👋
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] mt-[5%]">
              <div className="w-full flex-shrink">
                <p className="text-slate-950 text-[64px] font-[500] leading-[88px]">
                  Grow your Business with{" "}
                  <span className="text-red-950 text-[64px] font-[500] leading-[88px]">
                    Our Solutions
                  </span>
                </p>
              </div>

              <div className="w-[90%] text-slate-950 text-base font-normal leading-loose">
                Unleash your business potential. Explore Our Range of Services
                Tailored to Boost Your Success.
              </div>

              <div className="flex justify-start items-center gap-[20px]">
                <Button style="text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed">
                  Get In Touch
                </Button>
                <Button style="text-darkBlue bg-blandGrey px-5 py-3 font-[500] rounded-md">
                  Explore More
                </Button>
              </div>
            </div>
          </div>
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default MainInformation;

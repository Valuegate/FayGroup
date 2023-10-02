import React from "react";
import Button from "./Button";

import Image from 'next/image';

import Arrow from "@/public/assets/landing-page/Arrow.svg";
import Wave from "@/public/assets/landing-page/Wave.svg";
import Guy from "@/public/assets/landing-page/Guy.svg";

const WorkInterest = () => {
  return (
    <div className="flex items-center justify-center mb-[150px] w-full relative">
      <div className="bg-darkBlue rounded-[60px] rounded-br-none w-[80%] h-[380px] flex justify-between items-end">
        <div className="flex flex-col h-full px-[50px] justify-center">
          <p className="text-white text-[48px] font-[600] leading-[72px]">
            Interested to Work With Us?
          </p>
          <p className="text-maroon text-[48px] font-[600] leading-[72px]">
            Bring Projects!
          </p>

          <Button
            style={
              "text-darkBlue bg-blandGrey px-5 py-3 font-[500] mt-[20px] rounded-md w-[140px]"
            }
            destination={"/contact-us"}
          >
            Contact Us
          </Button>
        </div>

        <div className="absolute bottom-[20%] left-[45%]">
          <Image src={Arrow} alt="arrow" />
        </div>

        <Image src={Wave} alt="wave" className="w-[40%]"/>
      </div>

      <div className="absolute right-[15%] bottom-0">
        <Image src={Guy} alt="guy" />
      </div>
    </div>
  );
};

export default WorkInterest;

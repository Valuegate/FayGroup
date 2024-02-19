import React from "react";
import Button from "./Button";

import Image from "next/image";

import Arrow from "@/public/assets/landing-page/Arrow.svg";
import Wave from "@/public/assets/landing-page/Wave.svg";
import Guy from "@/public/assets/landing-page/Guy.svg";

const WorkInterest = () => {
  return (
    <div className="flex items-center justify-center my-20 w-full relative lg:px-[10%] px-[5%] lg:my-32 ">
      <div className="bg-darkBlue lg:rounded-[60px] rounded-[40px] rounded-br-none lg:rounded-br-none w-full lg:h-[380px] h-[300px] flex justify-between items-end">
        <div className="flex flex-col h-full lg:px-12 px-6 justify-center">
          <p className="text-white text-2xl leading-9 lg:text-[48px] font-medium lg:leading-[72px]">
            Interested to Work With Us?{" "}
            <span className="text-maroon sm:text-white">Bring Projects!</span>
          </p>

          <Button
            style={
              "text-darkBlue bg-blandGrey px-5 py-3 font-[500] mt-10 rounded-md lg:w-[200px] w-full text-center"
            }
            destination={"/contact-us"}
          >
            Contact Us
          </Button>
        </div>

        <div className="absolute lg:bottom-[20%] lg:left-[45%] bottom-[40%] left-[55%]">
          <Image src={Arrow} alt="arrow" className="w-[70%] lg:w-full"/>
        </div>

        <Image src={Wave} alt="wave" className="w-[40%] hidden lg:block" />
      </div>

      <div className="absolute right-[15%] bottom-0 hidden lg:block">
        <Image src={Guy} alt="guy" />
      </div>
    </div>
  );
};

export default WorkInterest;

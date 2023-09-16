import React from "react";
import Button from "./Button";

const WorkInterest = () => {
  return (
    <div className="flex items-center justify-center mb-[150px] w-full relative">
      <div className="bg-darkBlue rounded-[60px] rounded-br-none w-[80%] h-[380px] flex justify-between items-end">
        <div className="flex flex-col h-full px-[50px] justify-center">
          <div className="text-white text-[48px] font-[600] leading-[72px]">
            Interested to Work With Us?
          </div>
          <div className="text-maroon text-[48px] font-[600] leading-[72px]">
            Bring Projects!
          </div>

          <Button
            style={
              "text-darkBlue bg-blandGrey px-5 py-3 font-[500] mt-[20px] rounded-md w-[140px]"
            }
          >
            Contact Us
          </Button>
        </div>

        <div className="absolute bottom-[20%] left-[45%]">
          <img src="./LandingPage/Arrow.svg" alt="" />
        </div>

        <div>
          <img src="./LandingPage/Wave.svg" alt="wave" />
        </div>
      </div>

      <div className="absolute right-[15%] bottom-0">
        <img src="./LandingPage/Guy.svg" alt="guy" />
      </div>
    </div>
  );
};

export default WorkInterest;

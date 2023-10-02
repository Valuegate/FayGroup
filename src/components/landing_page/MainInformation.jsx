import Nav from "@/src/components/reusable/Nav";
import Button from "@/src/components/reusable/Button";
import React from "react";

import Shadow from "@/public/assets/shadow.svg";
import Hero from "@/public/assets/landing-page/Hero.svg";
import Welcome from "@/public/assets/landing-page/Welcome.svg";
import Image from "next/image";

const MainInformation = () => {
  return (
    <div className="relative">
      <Image
        src={Shadow}
        alt="shadow"
        className="absolute top-0 left-0 -z-10 w-full h-[100vh]"
      />

      <Nav />
      <div className="flex sm:flex-col gap-[10%] items-start justify-between mx-[10%] sm:mx-[5%] mt-[5%] mb-[10%]">
        <div className="w-[50%] sm:w-full flex flex-col">
          <div className="flex items-center">
            <div>
              <Image src={Welcome} alt="welcome" />
            </div>

            <p className="text-white text-base font-[500] leading-loose bg-extraDarkRed rounded-[40px] py-3 px-5">
              WELCOME TO FAYGROUP 👋
            </p>
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

            <p className="w-[90%] sm:w-full text-slate-950 text-base font-normal leading-loose">
              Unleash your business potential. Explore Our Range of Services
              Tailored to Boost Your Success.
            </p>

            <div className="sm:flex-col flex justify-start items-center gap-[20px]">
              <Button
                style="sm:w-full text-center text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200"
                destination={"/contact-us"}
              >
                Get In Touch
              </Button>
              <Button style="sm:w-full text-center text-darkBlue bg-blandGrey px-5 py-3 font-[500] rounded-md">
                Explore More
              </Button>
            </div>
          </div>
        </div>

        <div className="w-[40%] sm:w-full">
          <Image src={Hero} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default MainInformation;

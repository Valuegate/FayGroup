import React from "react";

const Listen = () => {
  return (
    <div className="flex w-full items-center relative">
      <img
        src="./shadow.svg"
        alt=""
        className="absolute top-0 left-0 -z-10 w-full h-[500px]"
      />
      <div className="w-[50%] h-auto">
        <img src="./LandingPage/Listen.svg" alt="" />
      </div>

      <div className="flex flex-col w-[50%]">
        <div className="flex items-center gap-[10px] mt-[16px]">
          <div className="w-[18px]">
            <img src="./LandingPage/Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            TESTIMONIALS
          </div>
        </div>

        <div className="flex gap-[10px] mt-[12px]  w-full">
          <div className="text-slate-950 text-4xl font-[600] leading-[48px]">
            Listen to what
          </div>
          <div className="text-red-950 text-4xl font-[600] leading-[48px]">
            Our Clients
          </div>
          <div className="text-slate-950 text-4xl font-[600] leading-[48px]">
            say
          </div>
        </div>

        <div className="text-slate-950 text-base font-normal leading-loose">
          “Our website has transformed from a good to the best. We are super
          thrilled about our new website! They don’t act like a typical agency,
          they are more like on honest business partner who is truly invested.”
        </div>

        <div className="mt-[29px] flex gap-[20px] items-start">
          <div>
            <img src="./LandingPage/Client Image.svg" alt="client" />
          </div>

          <div className="flex flex-col justify-between items-start">
            <div className="text-slate-950 text-2xl font-[600] leading-9">
              Olagunju David
            </div>
            <div className="text-slate-950 text-base font-[400] leading-loose">
              CEO of Digitata
            </div>
          </div>
          <div>
            <img src="./LandingPage/Stars.svg" alt="client" />
          </div>
        </div>

        <div className="mt-[35px] flex gap-[20px]">
          <div>
            <img src="./LandingPage/Left Arrow.svg" alt="arrow" />
          </div>
          <div>
            <img src="./LandingPage/Right Arrow.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listen;

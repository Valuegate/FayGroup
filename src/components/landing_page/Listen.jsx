import React from "react";

const Listen = () => {
  return (
    <div className="flex w-full items-center py-[5%] px-[10%] gap-[10%] ">
      <ListenImage />

      <div className="flex flex-col w-[50%]">
        <div className="flex items-center gap-[15px]">
          <div className="w-[18px]">
            <img src="./Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            TESTIMONIALS
          </div>
        </div>

        <div className="mt-[3%]" />

        <div className="flex gap-[10px] w-full">
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

        <div className="mt-[5%]" />

        <div className="text-slate-950 text-base font-normal leading-loose">
          “Our website has transformed from a good to the best. We are super
          thrilled about our new website! They don’t act like a typical agency,
          they are more like on honest business partner who is truly invested.”
        </div>

        <div className="mt-[29px] flex gap-[20px] items-start">
          <div>
            <img src="./landing-page/Client Image.svg" alt="client" />
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
            <img src="./landing-page/Stars.svg" alt="client" />
          </div>
        </div>

        <div className="mt-[5%]" />

        <div className="flex gap-[20px]">
          <div>
            <img src="./landing-page/Left Arrow.svg" alt="arrow" />
          </div>
          <div>
            <img src="./landing-page/Right Arrow.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listen;

const ListenImage = () => {
  return (
    <div className="w-[50%] relative">
      <img
        src="./landing-page/testimonial/image.svg"
        alt=""
        className="w-[60%]"
      />
      <img
        src="./landing-page/testimonial/Ellipse 194.svg"
        alt=""
        className="absolute -z-10 -bottom-[10%] right-[30%] w-[35%]"
      />
      <img
        src="./landing-page/testimonial/Ellipse 193.svg"
        alt=""
        className="absolute -z-10 top-[5%] -left-[5%] w-[35%]"
      />
    </div>
  );
};

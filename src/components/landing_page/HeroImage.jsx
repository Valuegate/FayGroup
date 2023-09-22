import React from "react";

const HeroImage = () => {
  return (
    <div className="relative w-[40%] mt-[5%]">
      <img
        src="./landing-page/hero/Hero Background.png"
        alt="Hero background"
      />

      <img
        src="./landing-page/hero/Frame 36170.png"
        alt="long buttons"
        className="w-[28%] h-auto absolute z-4 -left-[20%] bottom-[25%]"
      />

      <img
        src="./landing-page/hero/Frame 36171.png"
        alt="long buttons"
        className="w-[28%] h-auto absolute z-3 right-[30%] top-[0%]"
      />

      <img
        src="./landing-page/hero/Frame 36173.png"
        alt="long buttons"
        className="w-[15%] h-auto absolute z-4 -left-[6%] top-[20%]"
      />

      <img
        src="./landing-page/hero/Frame 36174.png"
        alt="long buttons"
        className="w-[15%] h-auto absolute z-4 -right-[6%] -top-[5%]"
      />

      <img
        src="./landing-page/hero/Frame 36172.png"
        alt="long buttons"
        className="w-[15%] h-auto absolute z-10 right-[20%] -bottom-[10%]"
      />

      <img
        src="./landing-page/hero/Effect.png"
        alt="long buttons"
        className="w-[40%] h-auto absolute z-10 right-[45%] -top-[55%]"
      />

      <img
        src="./landing-page/hero/Hero Image.png"
        alt="Hero image"
        className="absolute z-5 bottom-0 left-0"
      />
    </div>
  );
};

export default HeroImage;

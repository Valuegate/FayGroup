import React from "react";

const InsightsInfo = () => {
  return (
    <div className="flex justify-between items-start w-full mt-[28px]">
      <div className="flex flex-col items-center justify-center w-[30%]">
        <p className="text-pale text-xl lg:text-2xl font-medium leading-9">+345</p>
        <p className="text-slate-950 text-base text-center font-normal">
          Project Brands
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-[25%]">
        <p className="text-maroon text-xl lg:text-2xl font-medium leading-9">98%</p>
        <p className="text-slate-950 text-base text-center font-normal">
          Happy Clients
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-[30%]">
        <p className="text-weirdYellow text-xl lg:text-2xl font-medium leading-9">100%</p>
        <p className="text-slate-950 text-base text-center font-normal">
          Client Satisfaction
        </p>
      </div>
    </div>
  );
};

export default InsightsInfo;

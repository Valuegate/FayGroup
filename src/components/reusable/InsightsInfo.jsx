import React from "react";

const InsightsInfo = () => {
  return (
    <div className="flex justify-around items-start w-[70%] sm:w-full mt-[28px]">
      <div className="flex flex-col items-center justify-center sm:w-[30%]">
        <p className="text-pale text-2xl font-medium leading-9">+345</p>
        <p className="text-slate-950 text-base font-normal leading-loose">
          Project Brands
        </p>
      </div>
      <div className="flex flex-col items-center justify-center sm:w-[30%]">
        <p className="text-maroon text-2xl font-medium leading-9">98%</p>
        <p className="text-slate-950 text-base font-normal leading-loose">
          Happy Clients
        </p>
      </div>
      <div className="flex flex-col items-center justify-center sm:w-[30%]">
        <p className="text-weirdYellow text-2xl font-medium leading-9">100%</p>
        <p className="text-slate-950 text-base font-normal leading-loose w-[30%]">
          Client Satisfaction
        </p>
      </div>
    </div>
  );
};

export default InsightsInfo;

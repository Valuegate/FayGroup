import React from "react";

import Image from 'next/image';
import Group from "@/public/assets/about/Group.svg";

const Facts = () => {
  const facts = [
    {
      title: "99%",
      sub: "Data Accuracy",
      text: "Precision-driven tech solutions with 100% data accuracy – that's MB FayGroup.",
    },
    {
      title: "100+",
      sub: "Projects Done",
      text: "Unlock our portfolio of past tech triumphs.",
    },
    {
      title: "80+",
      sub: "Products",
      text: "Explore our tech creations for innovation seekers",
    },
  ];
  return (
    <div className="px-[10%] flex flex-col sm:px-[5%]">
        <Image src={Group} alt="Group" className="w-full"/>
        <div className="mt-[30px] sm:flex-col flex sm:gap-5 gap-20 py-[67px] items-center" id='facts-about-us'>
          {facts.map((fact, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-start w-[33%] sm:w-full h-[320px] shadow-xl rounded-[12px] px-[40px] sm:px-[5%] py-[40px]"
              >
                <div className="text-slate-950 text-[52px] font-medium leading-[88px]">
                  {fact.title}
                </div>
                <div className="text-maroon text-[24px] sm:text-xl font-medium sm:leading-10 leading-9 mt-5 sm:mt-3">
                  {fact.sub}
                </div>
                <div className="text-slate-950 text-base leading-loose font-normal mt-5 sm:mt-3">
                  {fact.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default Facts;

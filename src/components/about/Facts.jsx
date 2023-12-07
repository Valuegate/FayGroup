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
    <div className="flex flex-col lg:px-[5%] px-0 bg-offWhite">
        <Image src={Group} alt="Group" className="w-full"/>
        <div className="flex-col flex lg:flex-row gap-5 lg:gap-20 py-20 px-[5%] items-center" id='facts-about-us'>
          {facts.map((fact, i) => {
            return (
              <div
                key={i}
                className="flex flex-col justify-center lg:justify-start items-start lg:w-[30%] w-full h-[320px] shadow-xl rounded-[12px] px-12 px-6 py-10"
              >
                <div className="text-slate-950 lg:text-[52px] text-[40px] font-medium lg:leading-[88px] leading-[60px]">
                  {fact.title}
                </div>
                <div className="text-maroon lg:text-[24px] text-xl font-medium leading-10 lg:leading-9 mt-3">
                  {fact.sub}
                </div>
                <div className="text-slate-950 text-base leading-loose font-normal mt-3">
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

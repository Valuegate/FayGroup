import React from "react";

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
    <div className="flex flex-col">
      <div className="px-[150px]">
        <img src="./About/Group.svg" alt="" />
        <div className="mt-[30px] flex gap-[40px] py-[67px] items-center px-[50px]">
          {facts.map((fact, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-start w-[33%] h-[320px] shadow-xl rounded-[12px] px-[40px] py-[40px]"
              >
                <div className="text-slate-950 text-[48px] font-[600] leading-[88px] ">
                  {fact.title}
                </div>
                <div className="text-maroon text-[24px] font-[500] leading-9 mt-[16px]">
                  {fact.sub}
                </div>
                <div className="text-slate-950 text-[16px] font-[500] mt-[16px]">
                  {fact.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Facts;

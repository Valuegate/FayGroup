import React from "react";

import Image from 'next/image';
import Dev from "@/public/assets/Dev.png";
import Pin from "@/public/assets/Pin.svg";

const Team = () => {
  const members = [
    {
      name: "Adegunju Micheal",
      image: Dev,
      role: "Senior Front-End Engineer",
    },
    {
      name: "Adegunju Micheal",
      image: Dev,
      role: "Senior Front-End Engineer",
    },
    {
      name: "Adegunju Micheal",
      image: Dev,
      role: "Senior Front-End Engineer",
    },
    {
      name: "Adegunju Micheal",
      image: Dev,
      role: "Senior Front-End Engineer",
    },
    {
      name: "Adegunju Micheal",
      image: Dev,
      role: "Senior Front-End Engineer",
    },
    {
      name: "Adegunju Micheal",
      image: Dev,
      role: "Senior Front-End Engineer",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-[200px]">
      <div className="flex flex-col gap-[20px] items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[18px]">
            <Image src={Pin} alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            Our Team
          </div>
        </div>

        <div className="flex gap-[10px]">
          <div className="text-slate-950 text-4xl font-[600] leading-[44px]">
            Get Acquainted with the
          </div>
          <div className="text-red-950 text-4xl font-[600] leading-[44px]">
            Team
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 w-[80%]">
        {members.map((member, i) => {
          return (
            <div key={i} className="flex flex-col w-[80%] items-center justify-start">
              <Image src={member.image} alt="Member Image"/>
              <div className="text-slate-950 text-2xl font-medium leading-9">
                {member.name}
              </div>
              <div className="text-slate-950 text-medium font-normal leading-9">
                {member.role}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;

import React from "react";

import Image from "next/image";
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
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
            Our Team
          </p>
        </div>

        <p className="text-slate-950 text-4xl sm:text-2xl sm:leading-9 font-medium leading-[48px]">
          Get Acquainted with <span className="text-red-950">Our Team</span>{" "}
        </p>
      </div>

      <div className="sm:flex sm:flex-col sm:gap-3 sm:w-full grid grid-cols-3 gap-1 w-[80%]">
        {members.map((member, i) => {
          return (
            <div
              key={i}
              className="flex flex-col w-[80%] sm:w-full items-center sm:items-start sm:px-[5%] justify-start"
            >
              <Image src={member.image} alt="Member Image" />
              <div className="text-slate-950 text-2xl sm:text-xl font-medium leading-9">
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

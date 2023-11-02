import React from "react";

import Image from "next/image";
import Pin from "@/public/assets/Pin.svg";

const Team = () => {
  const members = [
    {
      name: "Adegunju Micheal",
      role: "Senior Front-End Engineer",
    },
    {
      name: "Adegunju Micheal",
      role: "Senior Front-End Engineer",
    },
    {
      name: "Adegunju Micheal",
      role: "Senior Front-End Engineer",
    },
    {
      name: "Adegunju Micheal",
      role: "Senior Front-End Engineer",
    },
    {
      name: "Adegunju Micheal",
      role: "Senior Front-End Engineer",
    },
    {
      name: "Adegunju Micheal",
      role: "Senior Front-End Engineer",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-[200px] sm:mt-10">
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

      <div className="sm:flex mt-20 sm:mt-10 sm:flex-col sm:gap-5 sm:w-full grid grid-cols-3 gap-5 w-full px-[10%]">
        {members.map((member, i) => {
          return (
            <div
              key={i}
              className="flex flex-col w-[80%] sm:w-full items-start sm:items-start sm:px-[5%] justify-start"
            >
              {/* <Image src={member.image} alt="Member Image" /> */}
              <img src={"https://res.cloudinary.com/devemmy/image/upload/v1681343921/home_p4un4n.jpg"} alt="blog image" className="h-[400px]"/>
              <p className="text-slate-950 mt-2 sm:text-xl text-2xl font-medium leading-9 w-[80%]">
                {member.name}
              </p>
              <p className="text-slate-950 text-base font-normal leading-loose">
                {member.role}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;

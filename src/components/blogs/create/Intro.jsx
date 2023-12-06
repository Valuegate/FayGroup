"use client"

import React, {useState, useEffect} from "react";
import Nav from "../../reusable/NavBar";
import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import Image from "next/image";
import useLocalStorage from "use-local-storage";

const Intro = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    let localUser = window.localStorage.getItem("user");
    localUser = JSON.parse(localUser);
    setUser(localUser);
  }, []);
  

  return (
    <div className="relative">
      <Image
        src={Shadow}
        alt="shadow"
        className="absolute top-0 left-0 -z-10 w-full"
      />
      <Nav active={3} />

      <div className="flex flex-col justify-center items-center gap-5 mt-20">
        <img
          src={user.profilePicture}
          alt="Author Image"
          className="h-[120px] w-[120px] rounded-full "
        />
        <div className="flex flex-col gap-2 items-center">
          <p className="text-slate-950 text-2xl font-medium leading-9">
            {user.name}
          </p>
          <p className="text-slate-950 text-base font-normal leading-loose">
            Author
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center mt-10">
          <div className="flex items-center gap-[10px]">
            <div className="w-[14px]">
              <Image src={Pin} alt="pin" />
            </div>
            <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
              BLOG
            </p>
          </div>
          <p className="text-slate-950 text-4xl sm:text-2xl font-medium sm:leading-9 leading-[44px]">
            Create <span className="text-red-950">Blog</span>
          </p>
        </div>
    </div>
  );
};

export default Intro;

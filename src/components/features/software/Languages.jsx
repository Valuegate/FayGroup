import React from "react";

import Image from "next/image";
import ReactImage from "@/public/assets/software development/React.svg";
import JsImage from "@/public/assets/software development/JS.svg";
import PythonImage from "@/public/assets/software development/Python.svg";
import CImage from "@/public/assets/software development/CSharp.svg";

const Languages = () => {
  const languages = [
    {
      name: "React",
      image: ReactImage,
    },
    {
      name: "Javascript",
      image: JsImage,
    },
    {
      name: "Python",
      image: PythonImage,
    },
    {
      name: "C#",
      image: CImage,
    },
  ];

  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full pb-10">
      <p className="text-slate-950 text-center text-xl font-medium leading-loose px-[5%]">
        The special languages we use to build amazing websites
      </p>
      <div className="w-full overflow-x-auto gap-5 scrollbar-custom px-[5%] flex lg:items-center lg:justify-center">
        {languages.map((language, i) => {
          return (
            <div
              key={i}
              className="flex items-center gap-2 rounded-full px-3 py-2 border border-slate-600 border-opacity-30"
            >
              <div className="w-[40px] h-[40px]">
                <Image src={language.image} alt="language image" />
              </div>
              <p className="text-center text-slate-950 text-base font-normal leading-loose">
                {language.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;

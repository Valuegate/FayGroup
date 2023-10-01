import React from "react";

import Image from "next/image";
import Button from "../../reusable/Button";
import UPImg from "@/public/assets/blogs/Group 11222.svg";

const Upload = () => {
  return (
    <div className="flex justify-between w-full px-[10%] mt-10 gap-20">
      <div className="w-[50%] h-[420px] bg-neutral-50 rounded border border-pink-800 justify-center items-center gap-2.5 inline-flex">
        <div className="flex-col justify-start items-center gap-4 inline-flex">
          <Image src={UPImg} alt="upload" className="h-[50px] w-[50px]" />

          <div className="flex-col justify-start items-center gap-2 flex">
            <p className="text-slate-950 text-2xl font-medium leading-9">
              Select an image to upload
            </p>
            <p className="text-slate-950 text-base font-normal leading-loose">
              Upload max of 20MB Png, Jpg and Svg format of the image
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-[50%] h-[420px]">
        <p className="text-slate-950 text-base font-medium leading-loose">
          Headline
        </p>
        <input
          type="text"
          className="w-full bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm mb-3"
          placeholder=""
        />
        <p className="text-slate-950 text-base font-medium leading-loose">
          Message
        </p>
        <textarea
          type="text"
          className="w-full h-[180px] mb-3 bg-blandGrey border px-2 py-3 font-normal resize-none focus:outline-none rounded-sm"
          placeholder="Type Here..."
        />

        <Button
          style={
            "w-[150px] bg-darkBlue rounded-[5px] text-white py-2.5 mt-[5%] hover:bg-extraDarkRed"
          }
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Upload;

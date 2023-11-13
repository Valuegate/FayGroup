"use client";

import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import Button from "../../reusable/Button";
import UPImg from "@/public/assets/blogs/Group 11222.svg";
import useLocalStorage from "use-local-storage";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";
import "react-toastify/dist/ReactToastify.css";

const axios = require("axios");

const Upload = () => {
  const [file, setFile] = useState({});
  const [loading, setLoading] = useState(false);

  
  const upload = () => {
    axios({
      method: "POST",
      url: `http://62.72.22.207:3000/api/blog/create-blog`,
      data: {
        "userId": "",
        "content": document.getElementById("contentID").value,
        "title": document.getElementById("titleID").value,
        "blogPictureUrl": ""
      },
    })
      .then((res) => {
        toast.success(`Blog created successfully`);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(
          "An error occurred trying to register your account. Please try again"
        );
        setLoading(false);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-between w-full px-[10%] mt-10 gap-20">
        <UploadFile setFile={setFile} />

        <div className="flex flex-col justify-center items-start w-[50%] h-[420px]">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Headline
          </p>
          <input
            type="text"
            className="w-full bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm mb-3"
            placeholder=""
            id="titleID"
          />
          <p className="text-slate-950 text-base font-medium leading-loose">
            Message
          </p>
          <textarea
            type="text"
            className="w-full h-[180px] mb-3 bg-blandGrey border px-2 py-3 font-normal resize-none focus:outline-none rounded-sm"
            placeholder="Type Here..."
            id="contentID"
          />

          <Button
            style={
              "w-[150px] bg-darkBlue rounded-[5px] text-white py-2.5 mt-[5%] hover:bg-extraDarkRed text-center"
            }
            onClick={upload}
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
};

export default Upload;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
  });
}

const UploadFile = ({ setFile }) => {
  const [image, setImage] = useState("");
  const inputRef = useRef(null);

  const openDialog = () => {
    inputRef.current?.click();
  };

  return image.length === 0 ? (
    <div>
      <input
        type="file"
        ref={inputRef}
        multiple={false}
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files[0];
          if (file !== undefined) {
            getBase64(file)
              .then((res) => {
                setFile(file);
                setImage(res);
              })
              .catch((err) => {
                setFile({});
                setImage("");
              });
          }
        }}
      />

      <div
        onClick={openDialog}
        className="w-full cursor-pointer h-[420px] bg-neutral-50 rounded border border-pink-800 justify-center items-center gap-2.5 inline-flex"
      >
        <div className="flex-col justify-start items-center gap-4 inline-flex">
          <Image src={UPImg} alt="upload" className="h-[50px] w-[50px]" />

          <div className="flex-col justify-start items-center gap-2 flex">
            <p className="text-slate-950 text-2xl font-medium leading-9">
              Select an image to upload
            </p>
            <p className="text-slate-950 text-center px-[5%] text-base font-normal leading-loose">
              Upload max of 20MB Png, Jpg and Svg format of the image
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <img
      src={image}
      alt="Profile Image"
      className="w-[50%] cursor-pointer h-[420px] object-cover"
      onClick={() => {
        setImage("");
        setFile({});
        openDialog();
      }}
    />
  );
};

"use client";

import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import Button from "../../reusable/Button";
import UPImg from "@/public/assets/blogs/Group 11222.svg";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";
import "react-toastify/dist/ReactToastify.css";

import dynamic from "next/dynamic";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css";

import axios from "axios";

const Upload = () => {
  const [user, setUser] = useState({});

  const [file, setFile] = useState({});
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let localUser = window.localStorage.getItem("faygroup-user");
    localUser = JSON.parse(localUser);
    setUser(localUser);
  }, []);

  const upload = () => {
    if (title.length == 0) {
      toast.error("Please provide a title for your blog");
      return;
    } else if (content.length == 0) {
      toast.error("Please provide a content for your blog");
      return;
    } else if (!file.name) {
      toast.error("Please select an image for your blog");
      return;
    }

    setLoading(true);

    axios({
      method: "GET",
      url: "https://faysolutions.com:3001/api/users/get-user/",
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => {
        let userID = res.data.data._id;
        var formData = new FormData();
        formData.append("userId", userID);
        formData.append("content", content);
        formData.append("title", title);
        formData.append("file", file);

        axios({
          method: "POST",
          url: `https://faysolutions.com:3001/api/blog/create-blog`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then((res) => {
            toast.success(`Blog created successfully`);
            setTimeout(() => {
              window.location.reload();
            }, 2500);
          })
          .catch((err) => {
            toast.error(
              "An error occurred trying to create your blog. Please try again"
            );
            setLoading(false);
          });
      })
      .catch((err) => {
        toast.error(
          "An error occurred trying to create your blog. Please try again"
        );
        setLoading(false);
      });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        rtl={false}
        theme="colored"
      />

      <div
        className={`flex justify-between w-full lg:px-[10%] px-[5%] mt-10 gap-20 ${
          loading && "hidden"
        }`}
      >
        <div className="hidden lg:block lg:w-[50%]">
          <UploadFile setFile={setFile} />
        </div>

        <div className="flex flex-col justify-center items-start lg:w-[50%] w-full lg:h-[420px] h-auto">
          <div className="lg:hidden mb-10 lg:mb-0">
            <UploadFile setFile={setFile} />
          </div>

          <p className="text-slate-950 text-base font-medium leading-loose">
            Headline
          </p>
          <input
            type="text"
            className="w-full bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm mb-3"
            placeholder=""
            id="titleID"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className="text-slate-950 text-base font-medium leading-loose">
            Message
          </p>
          <QuillEditor
            className="h-[200px] mb-10 w-full"
            theme="snow"
            value={content}
            onChange={(value) => {
              setContent(value);
            }}
          />
          <Button
            style={
              "w-full bg-darkBlue rounded-[5px] text-white py-2.5 lg:mt-5 mt-10 hover:bg-extraDarkRed text-center"
            }
            onClick={upload}
          >
            Send
          </Button>
        </div>
      </div>

      <div
        className={`flex flex-col  justify-center items-center w-full h-[300px] ${
          !loading && "hidden"
        }`}
      >
        <SpinningCircles fill="#A2393F" />
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

          <div className="flex-col justify-start items-center gap-2 flex text-center">
            <p className="text-slate-950 lg:text-2xl text-xl font-medium leading-9">
              Select an image to upload
            </p>
            <p className="text-slate-950 text-center px-[5%] lg:text-base text-[14px] font-normal leading-loose">
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
      className="w-full sm:h-auto cursor-pointer h-[420px] object-cover"
      onClick={() => {
        setImage("");
        setFile({});
        openDialog();
      }}
    />
  );
};

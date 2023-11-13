"use client";

import React, { useState, useRef } from "react";
import Nav from "../../reusable/Nav";
import Button from "../../reusable/Button";
import { ToastContainer, toast } from "react-toastify";
import Pin from "@/public/assets/Pin.svg";
import Shadow from "@/public/assets/shadow.svg";
import Choose from "@/public/assets/blogs/Ellipse.svg";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../reusable/Footer";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";
const axios = require('axios');


const Register = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState({});

  const register = () => {
    setLoading(true);
    var formData = new FormData();
    formData.append("name", document.getElementById("nameID").value);
    formData.append("email", document.getElementById("emailID").value);
    formData.append("password", document.getElementById("passwordID").value);
    formData.append("file", file);

    axios({
      method: 'POST',
      url: `http://62.72.22.207:3000/api/users/register`,
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'}
    })
    .then(res => {
      toast.success(`${res}. Please login in with your details`);
      setLoading(false);
      window.location.replace("/blogs/login");
    })
    .catch(err => {
      toast.error("An error occurred trying to register your account. Please try again");
      setLoading(false);
    });
  }


  return (
    <>
    <ToastContainer />
      <div className={`${loading && "overflow-hidden"} relative`}>

      <div
          // className={`z-50 absolute flex flex-col top-0 left-0 items-center justify-center w-[100vw] h-[100vh] bg-fadedBlack ${
          //   !loading && "hidden"
          // } ${loading && "overflow-hidden"}`}

          className={`overflow-y-auto flex flex-col bg-fadedBlack overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full  h-full max-h-full ${!loading && "hidden"}`}
        >
          <SpinningCircles fill="#A2393F" />
        </div>


        <Image
          src={Shadow}
          alt="shadow"
          className="absolute top-0 left-0 -z-10 w-full"
        />
        <Nav active={3} />

        <div className="mt-[150px] flex flex-col items-center">
          <div className="flex flex-col gap-5 items-center mt-10">
            <div className="flex items-center gap-[10px]">
              <div className="w-[14px]">
                <Image src={Pin} alt="pin" />
              </div>
              <p className="text-maroon text-base sm:text-xs font-medium leading-loose">
                CREATE ACCOUNT
              </p>
            </div>
            <p className="text-slate-950 text-4xl sm:text-2xl font-medium sm:leading-9 leading-[44px]">
              Get Started to Begin
              <span className="text-red-950"> Blog Creation</span>
            </p>
          </div>

          <UploadFile setFile={setFile} />

          <div className="flex flex-col items-start mt-20">
            <p className="text-slate-950 text-base font-medium leading-loose mb-1">
              Name
            </p>
            <input
              type="text"
              className="w-[500px] bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm mb-3"
              placeholder=""
              id="nameID"
            />
            <p className="text-slate-950 text-base font-medium leading-loose mb-1">
              Email Address
            </p>
            <input
              type="email"
              className="w-[500px] bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm mb-3"
              placeholder="example@example.com"
              id="emailID"
            />
            <p className="text-slate-950 text-base font-medium leading-loose mb-1">
              Password
            </p>
            <input
              type="password"
              className="w-[500px] bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm"
              placeholder=""
              id="passwordID"
            />
          </div>
          
          <Button
            style={
              "w-[300px] bg-darkBlue rounded-[5px] text-white py-2.5 mt-[5%] hover:bg-extraDarkRed text-center"
            }
            onClick={register}
          >
            Create Account
          </Button>

          <Link 
              href={"/blogs/login"}
              className= "mt-10"
            >
              Already have an account yet? <span className="text-maroon">Login</span>
            </Link>
        </div>
      </div>

      <div className="h-[300px]" />
      <Footer />
    </>
  );
};

export default Register;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
  });
}

const UploadFile = ({setFile}) => {
  const [image, setImage] = useState("");
  const [former, setFormer] = useState("");
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

      <Image
        src={Choose}
        alt="Choose Image"
        className="w-[150px] h-[150px] mt-20 cursor-pointer"
        onClick={openDialog}
      />
    </div>
  ) : (
    <img
      src={image}
      alt="Profile Image"
      className="h-[150px] w-[150px] rounded-[75px] object-cover cover mt-20 cursor-pointer"
      onClick={() => {
        setFormer(image);
        setImage("");
        setFile({});
        openDialog();
      }}
    />
  );
};

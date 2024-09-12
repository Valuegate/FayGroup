"use client";

import React, { useRef, useEffect, useState } from "react";
import Pin from "@/public/assets/Pin.svg";
import Image from "next/image";

import { IoMdClose } from "react-icons/io";
import { allEbooks } from "@/src/constants/blogs";

import { toast } from "react-hot-toast";

const EbookModal = ({ onDismiss }) => {
  const [load, shouldLoad] = useState(false);
  const dropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      onDismiss();
    }
  };

  useEffect(() => {
    shouldLoad(true);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [downloading, setDownloading] = useState(false);

  async function downloadFile() {
    try {
      const response = await fetch(allEbooks[0].path);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${allEbooks[0].name}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log(error);
    }
  }

  async function verify() {
    let message = "";

    if (name.length === 0) {
      message = "Please enter your name";
    } else if (email.length === 0) {
      message = "Please enter your email";
    }

    if (message.length !== 0) {
      toast.error(message);
      return;
    }

    setDownloading(true);
    await downloadFile();
  }

  // Replace with your actual sheet ID
  const SPREADSHEET_ID = "your_sheet_id_here";
  const RANGE = "Sheet1!A1:B1";
  // Replace with your OAuth 2.0 client ID
  const CLIENT_ID = "your_client_id_here";

  function sendToGoogleSheet(data) {
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleCredentialResponse,
    });

    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?key=${CLIENT_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [data],
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  }

  function handleCredentialResponse(response) {
    sendToGoogleSheet([name, email]);
  }

  return (
    <div
      className={`w-[100vw] h-[100vh] grid place-content-center bg-black transition-all duration-1000 ease-out ${
        load ? "bg-opacity-50" : "bg-opacity-0"
      } text-white`}
    >
      <div
        ref={dropdownRef}
        className="lg:w-[50vw] w-[95vw] relative h-auto bg-white px-10 py-6 rounded-2xl flex flex-col gap-2 items-center"
      >
        <IoMdClose
          className="absolute text-2xl top-5 right-5 text-black cursor-pointer scale-100 hover:scale-125 duration-300 ease-in-out transition-transform"
          onClick={onDismiss}
        />
        <div className="flex w-fit items-center gap-[10px]">
          <div className="w-[14px]">
            <Image src={Pin} alt="pin" />
          </div>
          <p className="text-maroon text-base font-medium leading-loose">
            EBOOK
          </p>
        </div>
        <h1 className="text-slate-950 lg:text-3xl text-xl text-center font-medium ">
          Check <span className="text-red-950">out our new</span> Ebook
        </h1>

        <div className="flex w-full justify-between mt-3">
          <Image
            src={allEbooks[0].image}
            alt={allEbooks[0].name}
            width={300}
            height={300}
            className="w-[250px] h-auto rounded"
          />
          <div className="flex flex-col w-[300px] gap-5 justify-center">
            <h2 className="text-black text-lg font-bold">
              {allEbooks[0].name}.pdf
            </h2>
            {!downloading && (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="w-full bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm text-black"
                  placeholder="Enter Full Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="email"
                  className="w-full bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm text-black"
                  placeholder="Enter Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            )}

            {!downloading && (
              <button
                onClick={verify}
                className="w-full mt-10 text-center text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200"
              >
                Download
              </button>
            )}

            {downloading && (
              <h2 className="text-black text-lg">Your download has started.</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookModal;

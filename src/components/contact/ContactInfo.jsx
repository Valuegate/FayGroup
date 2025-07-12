import React, { useState } from "react"; // Import useState
import Button from "../reusable/Button";

import Pin from "@/public/assets/Pin.svg";
import Background from "@/public/assets/contact/Background.svg";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className="flex h-full pt-20 lg:pb-20 flex-col bg-offWhite lg:flex-row lg:px-[10%] px-[5%] justify-between items-start lg:items-center gap-10 lg:gap-[10%]">
      <Info />
      <Content />
    </div>
  );
};

const Info = () => {
  return (
    <div className="flex flex-col lg:w-[50%] w-full px-0">
      <div className="flex items-center gap-[10px]">
        <div className="w-[14px]">
          <Image src={Pin} alt="pin" />
        </div>
        <p className="text-maroon text-base text-xs font-medium leading-loose">
          MESSAGE
        </p>
      </div>
      <p className="text-slate-950 lg:text-4xl text-2xl leading-9 font-medium lg:leading-[48px]">
        Turn your <span className="text-red-950">ideas</span> into reality
      </p>
      <p className="text-slate-950 text-base font-normal leading-loose mt-5">
        Connect with us and let's get started.
      </p>
    </div>
  );
};

const Content = () => {
  // 1. Initialize state variables for each input field
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  async function sendMail() {
    // 2. Access the values directly from state
    console.log("✅ fullName:", fullName);
    console.log("✅ email:", email);
    console.log("✅ phoneNumber:", phoneNumber);
    console.log("✅ message:", message);

    // Basic validation
    if (!fullName || !email || !phoneNumber || !message) {
      alert("❌ Please fill in all fields.");
      return;
    }

    const payload = {
      fullName: fullName,
      email: email,
      phone: phoneNumber, // Corrected variable name to match state
      message: message,
    };
    console.log("Payload being sent:", payload);

    try {
      const res = await fetch("https://scoutflair.top/scoutflair/v1/signup/faygroup/sendSupportMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // More specific error handling
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      alert("✅ Email sent successfully!");
      // Optionally clear the form after successful submission
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    } catch (err) {
      alert("❌ Something went wrong: " + err.message);
    }
  }

  return (
    <div className="relative">
      <Image
        src={Background}
        alt="background"
        className="h-[750px] object-cover"
      />
      <div className="w-[92%] lg:w-[80%] h-[90%] flex flex-col bg-white absolute z-10 top-[5%] left-[4%] lg:left-[10%] rounded-[12px] items-center px-[7%] py-[5%]">
        <p className="text-slate-950 lg:text-2xl text-xl font-medium leading-9">
          Get in Touch
        </p>
        <div className="flex flex-col items-start mt-[8%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Full Name
          </p>
          <input
            type="text"
            id="name" // Keep ID if needed for labels or other purposes, but not for value access
            className="w-full bg-blandGrey font-normal border px-2 py-2.5 focus:outline-none rounded-sm"
            placeholder="Enter Full Name"
            value={fullName} // 3. Bind the value to state
            onChange={(e) => setFullName(e.target.value)} // 4. Update state on change
          />
        </div>
        <div className="flex flex-col items-start mt-[2%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Email Address
          </p>
          <input
            type="email"
            id="address"
            className="w-full bg-blandGrey border px-2 py-2.5 font-normal focus:outline-none rounded-sm"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start mt-[2%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Phone Number
          </p>
          <input
            type="text"
            id="number"
            className="w-full bg-blandGrey border px-2 py-2.5 font-normal focus:outline-none rounded-sm"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start mt-[2%] w-full">
          <p className="text-slate-950 text-base font-medium leading-loose">
            Message
          </p>
          <textarea
            id="message"
            className="w-full bg-blandGrey border px-2 py-3 lg:h-[150px] h-[100px] font-normal resize-none focus:outline-none rounded-sm"
            placeholder="Type Here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <Button
          onClick={() => sendMail()}
          style="w-full mt-10 text-center text-white bg-darkBlue px-5 py-3 font-[500] rounded-md hover:bg-extraDarkRed transition ease-in-out duration-200"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Content;
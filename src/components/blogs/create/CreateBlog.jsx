"use client";

import React, { useState, useEffect } from "react";

import Intro from "./Intro";
import Footer from "../../reusable/Footer";
import Upload from "./Upload";

const CreateBlog = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useEffect(() => {
  //   let user = window.localStorage.getItem("faygroup-user");
  //   user = JSON.parse(user);
  //   if (
  //     user === undefined ||
  //     user === null ||
  //     user?.name === null ||
  //     user?.name === undefined
  //   ) {
  //     setIsLoggedIn(false);
  //     window.location.replace("/blogs");
  //   }
  // }, []);

  // if (!isLoggedIn) {
  //   return <></>;
  // }

  return (
    <>
      <Intro />
      <Upload />
      <div className="lg:h-40 h-24" />
      <Footer />
    </>
  );
};

export default CreateBlog;

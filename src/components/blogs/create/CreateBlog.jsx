"use client"

import React from "react";

import WorkInterest from "../../reusable/WorkInterest";
import Contact from "../../reusable/Contact";
import Intro from "./Intro";
import Footer from "../../reusable/Footer";
import Upload from "./Upload";

const CreateBlog = () => {
  return (
    <>
      <Intro />
      <Upload />
      <div className="h-[300px]" />
      <Footer />
    </>
  );
};

export default CreateBlog;

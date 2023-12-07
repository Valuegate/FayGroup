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
      <div className="lg:h-40 h-24"/>
      <Footer />
    </>
  );
};

export default CreateBlog;

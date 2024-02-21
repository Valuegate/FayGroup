"use client";

import React, { useEffect, useState } from "react";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import Intro from "./Intro";
import MiniBlog from "../reusable/MiniBlog";

const BlogsPage = () => {
  return (
    <>
      <Intro />
      <MiniBlog />
      <Contact />
      <WorkInterest />
      <Footer />
    </>
  );
};

export default BlogsPage;

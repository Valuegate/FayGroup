"use client";

import React, { useEffect, useState } from "react";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import Intro from "./Intro";

const BlogsPage = () => {
  return (
    <>
      <Intro />
      <Contact />
      <WorkInterest />
      <Footer />
    </>
  );
};

export default BlogsPage;

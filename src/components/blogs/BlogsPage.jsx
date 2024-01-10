"use client";

import React, { useEffect, useState } from "react";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import Intro from "./Intro";

const BlogsPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let user = window.localStorage.getItem("faygroup-user");
    user = JSON.parse(user);
    if (
      !(
        user === undefined ||
        user === null ||
        user?.name === null ||
        user?.name === undefined
      )
    ) {
      window.location.replace("/blogs/create-blog");
      setIsLoggedIn(true);
    }
  }, []);

  if (isLoggedIn) {
    return <></>;
  }

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

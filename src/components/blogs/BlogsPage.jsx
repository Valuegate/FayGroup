import React from "react";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import Intro from "./Intro";


const BlogsPage = () => {
  return (
    <>
      <Intro />
      <Contact />
      <div className="h-[200px]"/>
      <WorkInterest />
      <Footer />
    </>
  )
}

export default BlogsPage
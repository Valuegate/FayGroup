"use client";

import React from "react";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import Intro from "./Intro";
import Projects from "../landing_page/Projects";
import Listen from "../reusable/Listen";
import MiniBlog from "@/src/components/reusable/MiniBlog";

const WorksPage = () => {
  return (
    <>
      <Intro scrollTo="landing-page-projects" />
      <div id="landing-page-projects" className="lg:h-8 h-0" />
      <Projects />
      <Listen />
      <MiniBlog />
      <Contact />
      <WorkInterest />
      <Footer active={2} />
    </>
  );
};

export default WorksPage;

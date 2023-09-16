import React from "react";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import Intro from "./Intro";
import Projects from "../landing_page/Projects";
import Listen from "../landing_page/Listen";
import MiniBlog from "./MiniBlog";


const WorksPage = () => {
  return (
    <>
    <Intro />
    <Projects />
    <Listen />
    <MiniBlog />
    <Contact />
    <WorkInterest />
    <Footer active={2}/>
  </>
  )
}

export default WorksPage
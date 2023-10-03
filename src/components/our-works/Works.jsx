import React from "react";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import Intro from "./Intro";
import Projects from "../landing_page/Projects";
import Listen from "../reusable/Listen";
import MiniBlog from "./MiniBlog";


const WorksPage = () => {
  return (
    <>
    <Intro />
    <Projects />
    <div className="h-[100px]"/>
    <Listen />
    <div className="h-[100px]"/>
    <MiniBlog />
    <div className="h-[100px] sm:h-0"/>
    <Contact />
    <div className="h-[200px]"/>
    <WorkInterest />
    <Footer active={2}/>
  </>
  )
}

export default WorksPage
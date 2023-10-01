import React from "react";
import Purpose from "./Purpose";
import Services from "./Services";
import Projects from "./Projects";
import Listen from "../reusable/Listen";
import Contact from "../reusable/Contact";
import Footer from "@/src/components/reusable/Footer";
import MainInformation from "@/src/components/landing_page/MainInformation";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import TextWithImage from "../reusable/TextWithImage";
import Standout from "./Standout";


import AdviseImage from "@/public/assets/landing-page/Advising images.png";

const LandingPage = () => {
  return (
    <div>
      <MainInformation />
      <Purpose />
      <Services />
      <div className="h-[100px]"/>
      <TextWithImage
        left={true}
        pinText={"ADVISING"}
        preRedText={"Giving You Profound Insights on"}
        redText={"Technological Complexities"}
        postRedText={""}
        includeButton={true}
        useRedBackground={true}
        image={AdviseImage}
        content={
          " With a profound understanding of fiscal complexities, we provide tailored solutions to address multifaceted challenges. Our seasoned team of advisors is committed to meticulously analyzing your financial concerns and providing comprehensive insights that empower informed decision-making."
        }
      />
      <div className="h-[100px]"/>
      <Standout />
      <div className="h-[100px]"/>
      <Projects />
      <div className="h-[100px]"/>
      <Listen />
      <div className="h-[100px]"/>
      <Contact />
      <div className="h-[100px]"/>
      <WorkInterest />
      <Footer active={0} />
    </div>
  );
};

export default LandingPage;

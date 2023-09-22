import React from "react";
import Purpose from "./Purpose";
import Services from "./Services";
import Projects from "./Projects";
import Listen from "./Listen";
import Contact from "../reusable/Contact";
import Footer from "@/src/components/reusable/Footer";
import MainInformation from "@/src/components/landing_page/MainInformation";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import InsightsInfo from "./InsightsInfo";
import TextWithImage from "../reusable/TextWithImage";
import Standout from "./Standout";

const LandingPage = () => {
  return (
    <div>
      <MainInformation />
      <Purpose />
      <Services />
      <div className="mt-[5%]" />
      <TextWithImage
        left={true}
        pinText={"ADVISING"}
        preRedText={"Giving You Profound Insights on"}
        redText={"Technological Complexities"}
        postRedText={""}
        includeButton={true}
        image={"./landing-page/Advising images.png"}
        content={
          " With a profound understanding of fiscal complexities, we provide tailored solutions to address multifaceted challenges. Our seasoned team of advisors is committed to meticulously analyzing your financial concerns and providing comprehensive insights that empower informed decision-making."
        }
      />
      <div className="mt-[5%]" />
      <Standout />
      <div className="mt-[10%]" />
      <Projects />
      <div className="mt-[10%]" />
      <Listen />
      <div className="mt-[5%]" />
      <Contact />
      <div className="mt-[10%]" />
      <WorkInterest />
      <Footer active={0} />
    </div>
  );
};

export default LandingPage;

import React from "react";
import Purpose from "./Purpose";
import Services from "./Services";
import RightTextLeftImage from "../reusable/RightTextLeftImage";
import LeftTextRightImage from "../reusable/LeftTextRightImage";
import Projects from "./Projects";
import Listen from "./Listen";
import Contact from "../reusable/Contact";
import Footer from "@/src/components/reusable/Footer";
import MainInformation from "@/src/components/landing_page/MainInformation";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import InsightsInfo from "./InsightsInfo";

const LandingPage = () => {
  return (
    <div>
      <MainInformation image="./LandingPage/Main Info.svg" />
      <Purpose />
      <Services />
      <RightTextLeftImage
        pinText={"ADVISING"}
        preRedText={"Giving You Profound Insights"}
        redText={"Technological Complexities"}
        postRedText={""}
        includeButton={true}
        image={"./LandingPage/Insight.svg"}
        content={
          " With a profound understanding of fiscal complexities, we provide tailored solutions to address multifaceted challenges. Our seasoned team of advisors is committed to meticulously analyzing your financial concerns and providing comprehensive insights that empower informed decision-making."
        }
      />
      <LeftTextRightImage
        pinText={"ACHEIEVE MORE"}
        preRedText={"Why"}
        redText={"FayGroup"}
        postRedText={"Standout?"}
        image={"./LandingPage/Standout.svg"}
        includeButton={true}
        content={
          "As a full-service agency, we work closely with our clients to define, consult, design and develop transformative user experiences across all platforms and brand’s touchpoints."
        }
      >
        <InsightsInfo />
      </LeftTextRightImage>
      <Projects />
      <Listen />
      <Contact />
      <WorkInterest />
      <Footer />
    </div>
  );
};

export default LandingPage;

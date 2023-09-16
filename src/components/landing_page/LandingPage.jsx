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

const LandingPage = () => {
  return (
    <div>
      <MainInformation image="./landing-page/Main Info.svg" />
      <Purpose />
      <Services />
      <TextWithImage
        left={true}
        pinText={"ADVISING"}
        preRedText={"Giving You Profound Insights"}
        redText={"Technological Complexities"}
        postRedText={""}
        includeButton={true}
        image={"./landing-page/Insight.svg"}
        content={
          " With a profound understanding of fiscal complexities, we provide tailored solutions to address multifaceted challenges. Our seasoned team of advisors is committed to meticulously analyzing your financial concerns and providing comprehensive insights that empower informed decision-making."
        }
      />
      <TextWithImage
        right={true}
        pinText={"ACHIEVE MORE"}
        preRedText={"Why"}
        redText={"FayGroup"}
        postRedText={"Standout?"}
        image={"./landing-page/Standout.svg"}
        includeButton={true}
        content={
          "As a full-service agency, we work closely with our clients to define, consult, design and develop transformative user experiences across all platforms and brand’s touchpoints."
        }
      >
        <InsightsInfo />
      </TextWithImage>
      <Projects />
      <Listen />
      <Contact />
      <WorkInterest />
      <Footer active={0}/>
    </div>
  );
};

export default LandingPage;

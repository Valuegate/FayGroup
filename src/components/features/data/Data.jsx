import React from "react";
import Footer from "@/src/components/reusable/Footer";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import Contact from "@/src/components/reusable/Contact";
import TextWithImage from "../../reusable/TextWithImage";

import Listen from "../../reusable/Listen";
import Services from "./Services";
import Intro from "../Intro";

import One from "@/public/assets/data science/Ellipse 10.png";
import Two from "@/public/assets/data science/Ellipse 11.png";
import Three from "@/public/assets/data science/Ellipse 12.png";
import Four from "@/public/assets/data science/Ellipse 13.png";


import Rectangle from "@/public/assets/data science/Rectangle 1.png";

const Data = () => {
  return (
    <>
      <Intro
        One={One}
        Two={Two}
        Three={Three}
        Four={Four}
        pinText={"DATA SCIENCE"}
        preRedSubtitle={"Harnessing"}
        redSubtitle={"Data for Strategic"}
        postRedSubtitle={"Insghts"}
        content={
          "Discover the untapped potential of your data with FayGroup's Data Science expertise. We turn complex information into actionable insights."
        }
      />
      <div className="h-[100px]" />

      <Services />
      <div className="h-[100px]" />

      <TextWithImage
        right={true}
        pinText={"ACHIEVE MORE"}
        image={Rectangle}
        includeButton={true}
        preRedText={"Unlocking Data's"}
        redText={"Full Potential"}
        content={
          "Specializing in unleashing the true power of your data. Our Data Science service empowers your business with valuable insights for smarter strategies."
        }
      />

      <div className="h-[100px]" />
      <Listen />
      <div className="h-[100px]" />
      <Contact />
      <div className="h-[100px]" />
      <WorkInterest />
      <Footer active={1} />
    </>
  );
};

export default Data;

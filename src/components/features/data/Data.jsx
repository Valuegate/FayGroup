"use client";

import React from "react";
import Footer from "@/src/components/reusable/Footer";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import Contact from "@/src/components/reusable/Contact";
import TextWithImage from "../../reusable/TextWithImage";

import Listen from "../../reusable/Listen";
import Services from "./Services";
import Intro from "../Intro";

import One from "@/public/assets/data science/Ellipse 10.svg";
import Two from "@/public/assets/data science/Ellipse 11.svg";
import Three from "@/public/assets/data science/Ellipse 12.svg";
import Four from "@/public/assets/data science/Ellipse 13.svg";

import Rectangle from "@/public/assets/data science/Rectangle 1.svg";

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
        postRedSubtitle={"Insights"}
        content={
          "Discover the untapped potential of your data with FayGroup's Data Science expertise. We turn complex information into actionable insights."
        }
        scrollTo="data-service"
        subActiveNav={8}
      />
      <Services />
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
      <Listen />
      <Contact />
      <WorkInterest />
      <Footer active={1} />
    </>
  );
};

export default Data;

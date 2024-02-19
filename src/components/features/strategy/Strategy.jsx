"use client";

import React from "react";
import Footer from "@/src/components/reusable/Footer";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import Contact from "@/src/components/reusable/Contact";
import TextWithImage from "../../reusable/TextWithImage";

import Listen from "../../reusable/Listen";

import Intro from "../Intro";

import One from "@/public/assets/strategy/Ellipse 10.svg";
import Two from "@/public/assets/strategy/Ellipse 11.svg";
import Three from "@/public/assets/strategy/Ellipse 12.svg";
import Four from "@/public/assets/strategy/Ellipse 13.svg";

import Rectangle from "@/public/assets/strategy/Rectangle 1.svg";
import Expertise from "./Expertise";

const Strategy = () => {
  return (
    <>
      <Intro
        One={One}
        Two={Two}
        Three={Three}
        Four={Four}
        pinText={"STRATEGY CONSULTING"}
        preRedSubtitle={"Unlocking"}
        redSubtitle={"Strategic Brilliance"}
        postRedSubtitle={"in Business Consulting"}
        content={
          "Achieving Business Excellence with FayGroup's Strategy Experts"
        }
        scrollTo="strategy-service"
        subActiveNav={9}
      />
      <Expertise />
      <TextWithImage
        right={true}
        pinText={"ACHIEVE MORE"}
        image={Rectangle}
        includeButton={true}
        preRedText={"FayGroup's Expertise: Your Path to"}
        redText={"Strategic Success"}
        content={
          "Navigate the Future with FayGroup's Premium Strategy Consulting"
        }
      />
      <Listen />
      <Contact />
      <WorkInterest />
      <Footer active={1} />
    </>
  );
};

export default Strategy;

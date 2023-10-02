import React from "react";
import Footer from "@/src/components/reusable/Footer";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import Contact from "@/src/components/reusable/Contact";
import TextWithImage from "../../reusable/TextWithImage";

import Listen from "../../reusable/Listen";

import Intro from "../Intro";

import One from "@/public/assets/strategy/Ellipse 10.png";
import Two from "@/public/assets/strategy/Ellipse 11.png";
import Three from "@/public/assets/strategy/Ellipse 12.png";
import Four from "@/public/assets/strategy/Ellipse 13.png";

import Rectangle from "@/public/assets/strategy/Rectangle 1.png";
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
      />
      <div className="h-[100px]" />
      <Expertise />
      <div className="h-[100px]" />
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
      <div className="h-[100px]" />
      <Listen />
      <div className="h-[100px]" />
      <Contact />
      <div className="h-[200px]" />
      <WorkInterest />
      <Footer active={1} />
    </>
  );
};

export default Strategy;

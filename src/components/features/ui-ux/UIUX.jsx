import React from "react";
import Footer from "../../reusable/Footer";
import WorkInterest from "../../reusable/WorkInterest";
import Contact from "../../reusable/Contact";
import Intro from "../Intro";
import Listen from "../../reusable/Listen";

import TextWithImage from "../../reusable/TextWithImage";

import Elevate from "@/public/assets/ui-ux/Rectangle 1.png";
import Services from "./Services";

import One from "@/public/assets/ui-ux/Ellipse 10.png";
import Two from "@/public/assets/ui-ux/Ellipse 11.png";
import Three from "@/public/assets/ui-ux/Ellipse 12.png";
import Four from "@/public/assets/ui-ux/Ellipse 13.png";
import WorkedWith from "../../reusable/WorkedWith";
import Design from "./Design";
import Projects from "./Projects";

const UIUX = () => {
  return (
    <>
      <Intro
        One={One}
        Two={Two}
        Three={Three}
        Four={Four}
        pinText={"UI/UX DESIGN"}
        preRedSubtitle={"Experience"}
        redSubtitle={"UI/UX Excellence"}
        postRedSubtitle={"at FayGroup"}
        content={
          "Get access to seamless navigation and stunning designs that will leave your users delighted"
        }
        scrollTo="ui-services"
        subActiveNav={5}
      />
      <WorkedWith />
      <div className="h-[100px]" />
      <Design />
      <div className="h-[100px]" id="ui-services"/>
      <Services />
      <div className="h-[100px]" />
      <Projects />
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

export default UIUX;

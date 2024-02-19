"use client";

import React from "react";
import Footer from "../../reusable/Footer";
import WorkInterest from "../../reusable/WorkInterest";
import Contact from "../../reusable/Contact";
import Intro from "../Intro";
import Listen from "../../reusable/Listen";

import Services from "./Services";

import One from "@/public/assets/ui-ux/Ellipse 10.svg";
import Two from "@/public/assets/ui-ux/Ellipse 11.svg";
import Three from "@/public/assets/ui-ux/Ellipse 12.svg";
import Four from "@/public/assets/ui-ux/Ellipse 13.svg";
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
      <Design />
      <div className="h-20" id="ui-services" />
      <Services />
      <Projects />
      <Listen />
      <Contact />
      <WorkInterest />
      <Footer active={1} />
    </>
  );
};

export default UIUX;

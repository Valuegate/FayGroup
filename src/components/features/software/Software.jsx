"use client";

import React from "react";
import Footer from "../../reusable/Footer";
import WorkInterest from "../../reusable/WorkInterest";
import Contact from "../../reusable/Contact";
import Intro from "../Intro";
import Listen from "../../reusable/Listen";
import Languages from "./Languages";
import TextWithImage from "../../reusable/TextWithImage";

import Elevate from "@/public/assets/software development/Rectangle 1.svg";
import Unlock from "@/public/assets/software development/Rectangle 1-1.svg";
import Services from "./Services";

import One from "@/public/assets/software development/Ellipse 11.svg";
import Two from "@/public/assets/software development/Ellipse 10.svg";
import Three from "@/public/assets/software development/Ellipse 12.svg";
import Four from "@/public/assets/software development/Ellipse 13.svg";

const SoftwarePage = () => {
  return (
    <>
      <Intro
        One={One}
        Two={Two}
        Three={Three}
        Four={Four}
        pinText={"SOFTWARE DEVELOPMENT"}
        preRedSubtitle={"Advance Business with Innovative"}
        redSubtitle={"Software Engineering"}
        content={
          "With our Software solutions, your ideas flourish and take shape in the tech world. Together, we craft tomorrow's solutions today."
        }
        scrollTo="software-service"
        subActiveNav={4}
      />
      <Languages />
      <TextWithImage
        useRedBackground={true}
        left={true}
        pinText={"ACHIEVE MORE"}
        preRedText={"Elevate Your Vision with"}
        redText={"Expert Software Development"}
        postRedText={"Services"}
        content={
          "Experience the transformational synergy of cutting-edge technology and visionary expertise with our software development services."
        }
        includeButton={true}
        image={Elevate}
      />
      <TextWithImage
        right={true}
        pinText={"ACHIEVE MORE"}
        preRedText={"Unlock Innovation Through Custom"}
        redText={"Software Development Solutions"}
        content={
          "Embrace limitless possibilities with our custom software development solutions at FayGroup. From concept to execution, our team harnesses innovation to tailor software that aligns perfectly with your unique goals."
        }
        includeButton={true}
        image={Unlock}
      />
      <div className="h-20" id="software-service" />
      <Services />
      <Listen />
      <Contact />
      <WorkInterest />
      <Footer active={1} />
    </>
  );
};

export default SoftwarePage;

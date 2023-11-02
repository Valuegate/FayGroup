import React from "react";
import Footer from "../../reusable/Footer";
import WorkInterest from "../../reusable/WorkInterest";
import Contact from "../../reusable/Contact";
import Intro from "../Intro";
import Listen from "../../reusable/Listen";
import Languages from "./Languages";
import TextWithImage from "../../reusable/TextWithImage";

import Elevate from "@/public/assets/software development/Rectangle 1.png";
import Unlock from "@/public/assets/software development/Rectangle 1-1.png";
import Services from "./Services";


import One from "@/public/assets/software development/Ellipse 11.png";
import Two from "@/public/assets/software development/Ellipse 10.png";
import Three from "@/public/assets/software development/Ellipse 12.png";
import Four from "@/public/assets/software development/Ellipse 13.png";

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
        content={"With our Software solutions, your ideas flourish and take shape in the tech world. Together, we craft tomorrow's solutions today."}
        scrollTo="software-service"
        subActiveNav={4}
      />
      <Languages />
      <div className="h-[100px]" />
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
      <div className="h-[100px]" />
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
      <div className="h-[100px]" id="software-service"/>
      <Services />
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

export default SoftwarePage;

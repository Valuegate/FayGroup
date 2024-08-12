"use client";

import React from "react";
import Banner from "@/src/components/reusable/Banner";
import Footer from "@/src/components/reusable/Footer";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import Contact from "@/src/components/reusable/Contact";
import WorkedWith from "../../reusable/WorkedWith";
import TextWithImage from "../../reusable/TextWithImage";

import HeroImage from "@/public/assets/digital transformation/Rectangle 1.svg";
import Tech from "@/public/assets/digital transformation/Tech.svg";
import MiniBlog from "../../reusable/MiniBlog";
import Listen from "../../reusable/Listen";
import Services from "./Services";

const DigitalTransformationPage = () => {
  return (
    <>
      <Banner
        active={4}
        subActive={2}
        image={HeroImage}
        firstText={"Digitally Transform"}
        secondText={"Your Business for Success"}
        swapRedText={true}
        subtitle={
          "Embrace the power of digital solutions to streamline your product development processes, fostering both efficiency and innovation."
        }
        pinText="DIGITAL TRANSFORMATION"
        hidePinText={false}
        scrollTo="digital_service"
      />
      <WorkedWith />
      <TextWithImage
        left={true}
        image={Tech}
        hidePinText={false}
        pinText={"TECHNICAL CONSULT"}
        preRedText={"Revolutionize Your Business: Digital"}
        redText={"Transformation Experts"}
        useRedBackground={true}
        content={
          "Experience a Digital Revolution with Our Expertise. Elevate Your Business for the Future."
        }
        includeButton={true}
      />
      <Services />
      <Listen />
      <MiniBlog />
      <Contact />
      <WorkInterest />
      <Footer active={1} subActive={2} />
    </>
  );
};

export default DigitalTransformationPage;

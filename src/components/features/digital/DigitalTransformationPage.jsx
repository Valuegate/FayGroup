import React from "react";
import Banner from "@/src/components/reusable/Banner";
import Footer from "@/src/components/reusable/Footer";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import Contact from "@/src/components/reusable/Contact";
import Image from "next/image";
import WorkedWith from "../../reusable/WorkedWith";
import TextWithImage from "../../reusable/TextWithImage";

import HeroImage from "@/public/assets/digital transformation/Rectangle 1.png";
import Tech from "@/public/assets/digital transformation/Tech.png";
import MiniBlog from "../../reusable/MiniBlog";
import Listen from "../../reusable/Listen";
import Services from "./Services";

const DigitalTransformationPage = () => {
  return (
    <>
      <div className="flex flex-col gap-10 items-start">
        <Banner
          active={1}
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
      </div>
      <div className="h-[150px]" />
      <WorkedWith />
      <div className="h-[100px]" />
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
      <div className="h-[100px]" />
      <Services />
      <div className="h-[100px]" />
      <Listen />
      <div className="h-[100px]" />
      <MiniBlog />
      <div className="h-[100px]" />
      <Contact />
      <div className="h-[200px]" />
      <WorkInterest />
      <Footer active={1} subActive={2}/>
    </>
  );
};

export default DigitalTransformationPage;

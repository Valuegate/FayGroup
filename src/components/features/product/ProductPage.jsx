import React from "react";
import Banner from "@/src/components/reusable//Banner";
import Footer from "@/src/components/reusable/Footer";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import Contact from "@/src/components/reusable/Contact";
import Image from "next/image";
import WorkedWith from "../../reusable/WorkedWith";
import TextWithImage from "../../reusable/TextWithImage";
import Standout from "./Standout";

import HeroImage from "@/public/assets/product development/Hero Images.svg";
import MiniBlog from "../../reusable/MiniBlog";
import Listen from "../../reusable/Listen";
import Services from "./Services";

const ProductPage = () => {
  return (
    <>
      <div className="flex flex-col gap-10 items-start">
        <Banner
          active={1}
          image={HeroImage}
          firstText={"Use Digital Solutions for Efficient"}
          secondText={"Product Development"}
          subtitle={
            "Embark on a journey of innovation with our product development expertise. We craft tomorrow's solutions today."
          }
          pinText="PRODUCT DEVELOPMENT"
          hidePinText={false}
        />
      </div>
      <div className="h-[150px] " />
      <WorkedWith />
      <div className="h-[100px]" />
      <Standout />
      <div className="h-[150px] sm:h-[100px]" />
      <Services />
      <div className="h-[150px]" />
      <Listen />
      <div className="h-[100px]" />
      <MiniBlog />
      <div className="h-[100px]" />
      <Contact />
      <div className="h-[200px]" />
      <WorkInterest />
      <Footer active={1} />
    </>
  );
};

export default ProductPage;

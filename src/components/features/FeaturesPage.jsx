import React from "react";
import Banner from "../reusable/Banner";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";

const FeaturesPage = () => {
  return (
    <>
      <Banner active={1} image="./Features/Features.svg" />

      <Contact />
    <WorkInterest />
    <Footer active={1}/>
    </>
  );
};

export default FeaturesPage;

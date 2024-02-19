"use client";

import React from "react";
import CustomBanner from "./CustomBanner";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import Content from "./ContactInfo";

const ContactPage = () => {
  return (
    <>
      <CustomBanner
        hidePinText={false}
        pinText="CONTACT US"
        active={5}
        firstText={"Ready to turn your idea"}
        secondText={"into a product?"}
        subtitle={"Moving from idea to product starts with a conversation."}
        hideExplore={true}
        includeButton={false}
        child={<Content />}
      />
      <Contact />
      <WorkInterest />
      <Footer />
    </>
  );
};

export default ContactPage;

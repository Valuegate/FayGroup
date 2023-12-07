import React from "react";
import Banner from "../reusable/Banner";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import ContactInfo from "./ContactInfo";


import ContactImage from "@/public/assets/contact/Contact.svg";


const ContactPage = () => {
  return (
    <>
      <Banner
       hidePinText={false}
       pinText="CONTACT US"
        active={5}
        firstText={"Ready to turn your idea"}
        secondText={"into a product"}
        image={ContactImage}
        subtitle={"Moving from idea to product starts with a conversation."}
        hideExplore={true}
        includeButton={false}
      />
      <ContactInfo />
      <Contact />
      <WorkInterest />
      <Footer />
    </>
  );
};

export default ContactPage;

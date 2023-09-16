import React from "react";
import Banner from "../reusable/Banner";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import ContactInfo from "./ContactInfo";
const ContactPage = () => {
  return (
    <>
      <Banner
        active={5}
        firstText={"Ready to turn your idea"}
        secondText={"into a product"}
        image={"./contact/Contact.png"}
        subtitle={"Moving from idea to product starts with a conversation."}
        hideExplore={true}
      />
      <ContactInfo />
      <Contact />
      <WorkInterest />
      <Footer />
    </>
  );
};

export default ContactPage;

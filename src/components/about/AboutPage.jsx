import React from "react";
import Banner from "../reusable/Banner";
import Footer from "../reusable/Footer";
import Facts from "./Facts";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import TextWithImage from "../reusable/TextWithImage";
import Team from "./Team";

const AboutPage = () => {
  return (
    <>
      <Banner
        active={4}
        firstText={"Hello! We'd Love to"}
        secondText={"Introduce Ourself"}
        image={"./About/Banner Image.svg"}
        subtitle={
          "At MB FayGroup, we're not just a tech company; we're your innovation partners on a mission to transform ideas into reality."
        }
      />
      <Facts />
      <TextWithImage
        left={true}
        image={"./About/Aim.png"}
        pinText={"OUR MISSION"}
        preRedText={"What we are "}
        redText={"Aiming"}
        postRedText={"For?"}
        content={
          "At MB FayGroup, we're not just a tech company; we're your innovation partners on a mission to transform ideas into reality. With a passion for creativity and a flair for innovation, we specialize in a spectrum of tech services that encompass software development, mobile solutions, UI/UX designs, and business and strategy development."
        }
        includeButton={true}
      />
      <TextWithImage
        right={true}
        image={"./About/Future.png"}
        content={
          "Our vision is simple yet ambitious: to accelerate your tech journey. We understand that ideas are the seeds of innovation, and we're here to nurture those seeds, cultivate them, and help you launch them into the world as thriving products."
        }
        preRedText={"A Sustainable"}
        redText={"Future"}
        postRedText={"for All"}
        pinText={"OUR VISION"}
      />
      <Team />
      <Contact />
      <WorkInterest />
      <Footer active={3} />
    </>
  );
};

export default AboutPage;

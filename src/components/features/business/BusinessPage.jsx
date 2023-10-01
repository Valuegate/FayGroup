import React from "react";
import Banner from "../../reusable/Banner";
import Footer from "../../reusable/Footer";

import WorkInterest from "../../reusable/WorkInterest";
import Contact from "../../reusable/Contact";
import TextWithImage from "../../reusable/TextWithImage";

import BannerImage from "@/public/assets/business consulting/Hero.png";
import TechConsult from "@/public/assets/business consulting/Rectangle 1.png";
import DataConsult from "@/public/assets/business consulting/Rectangle 1-1.png";
import PEC from "@/public/assets/business consulting/Rectangle 1-2.png";
import QM from "@/public/assets/business consulting/Rectangle 1-3.png";
import Services from "./Services";
import Listen from "../../reusable/Listen";
import MiniBlog from "../../reusable/MiniBlog";

const BusinessPage = () => {
  return (
    <>
      <Banner
        active={1}
        firstText={"Use Digital Solutions for Efficient"}
        secondText={"Business Consulting"}
        hidePinText={false}
        pinText="BUSINESS CONSULTING"
        image={BannerImage}
        subtitle={
          "Navigate your business's success path. Let us guide you through strategy, innovation, and growth. Together, we'll shape a bright future for your ventures."
        }
      />

      <div className="h-[100px]" />
      <Services />
      <div className="h-[100px]" />

      <TextWithImage
        pinText={"TECHNICAL CONSULT"}
        hidePinText={false}
        useRedBackground={true}
        preRedText={"Technical Expertise for"}
        redText={"Business Excellence"}
        content={
          "Our expert guidance ensures your business stays at the forefront of innovation and thrives in the digital age."
        }
        left={true}
        includeButton={true}
        image={TechConsult}
      />
      <div className="h-[100px]" />

      <TextWithImage
        pinText={"DATA CONSULT"}
        hidePinText={false}
        preRedText={"Unlocking Insights: Data Consulting for"}
        redText={"Business Growth"}
        content={
          "Data Consulting services are designed to help you harness the power of your data, providing actionable insights that fuel growth and drive success."
        }
        right={true}
        includeButton={true}
        image={DataConsult}
      />

      <div className="h-[100px]" />

      <TextWithImage
        pinText={"PLATFORM ENGINEERING CONSULT"}
        hidePinText={false}
        useRedBackground={true}
        preRedText={"Engineer Your Success: Platform"}
        redText={"Engineering Consult"}
        content={
          "Embrace innovation and propel your business forward with our Platform Engineering Consulting services. We engineer solutions that drive success, turning your goals into reality"
        }
        left={true}
        includeButton={true}
        image={PEC}
      />
      <div className="h-[100px]" />

      <TextWithImage
        pinText={"QUALITY MANAGEMENT"}
        hidePinText={false}
        preRedText={"Enhance Business Excellence:"}
        redText={"Quality Management Consulting"}
        content={
          "Our Quality Management Consulting services are meticulously designed to empower your business with the tools and strategies needed to elevate quality standards, streamline processes, and exceed customer expectations."
        }
        right={true}
        includeButton={true}
        image={QM}
      />
      <div className="h-[150px]" />
      <Listen />
      <div className="h-[100px]" />
      <MiniBlog />
      <div className="h-[100px]" />
      <Contact />
      <div className="h-[100px]" />
      <WorkInterest />
      <Footer active={1} />
    </>
  );
};

export default BusinessPage;

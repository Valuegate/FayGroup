"use client";

import React from "react";
import Footer from "@/src/components/reusable/Footer";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import Contact from "@/src/components/reusable/Contact";
import TextWithImage from "../../reusable/TextWithImage";

import Listen from "../../reusable/Listen";
import Services from "./Services";
import Intro from "../Intro";

import One from "@/public/assets/system engineering/Ellipse 10.svg";
import Two from "@/public/assets/system engineering/Ellipse 11.svg";
import Three from "@/public/assets/system engineering/Ellipse 12.svg";
import Four from "@/public/assets/system engineering/Ellipse 13.svg";

import Rectangle from "@/public/assets/system engineering/Rectangle 1.svg";

const System = () => {
  return (
    <>
      <Intro
        One={One}
        Two={Two}
        Three={Three}
        Four={Four}
        pinText={"SYSTEM ENGINEERING"}
        preRedSubtitle={"Optimize Your Business Systems for"}
        redSubtitle={"Peak Performance"}
        content={
          " We specialize in fine-tuning your systems to work at their absolute best. Our expert team ensures that your technology performs at peak efficiency, helping your business run smoother than ever before."
        }
        scrollTo="system-service"
        subActiveNav={7}
      />
      <Services />
      <TextWithImage
        right={true}
        pinText={"ACHIEVE MORE"}
        image={Rectangle}
        includeButton={true}
        preRedText={"Delivering Precision in System Engineering for"}
        redText={"Super Business Efficiency"}
        content={
          "Our expert team ensures that your technology performs at peak efficiency, helping your business run smoother than ever before"
        }
      />
      <Listen />
      <Contact />
      <WorkInterest />
      <Footer active={1} />
    </>
  );
};

export default System;

import React from "react";
import Footer from "@/src/components/reusable/Footer";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import Contact from "@/src/components/reusable/Contact";
import TextWithImage from "../../reusable/TextWithImage";

import Listen from "../../reusable/Listen";
import Services from "./Services";
import Intro from "../Intro";

import One from "@/public/assets/system engineering/Ellipse 10.png";
import Two from "@/public/assets/system engineering/Ellipse 11.png";
import Three from "@/public/assets/system engineering/Ellipse 12.png";
import Four from "@/public/assets/system engineering/Ellipse 13.png";

import Rectangle from "@/public/assets/system engineering/Rectangle 1.png";

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
      />
      <div className="h-[100px]" />
      <Services />
      <div className="h-[100px]" />
      <TextWithImage
        right={true}
        pinText={"ACHIEVE MORE"}
        image={Rectangle}
        includeButton={true}
        preRedText={"Delivering Precision in System Engineering for"}
        redText={"Super Business Efficiency"}
        content={"Our expert team ensures that your technology performs at peak efficiency, helping your business run smoother than ever before"}
      />
      <div className="h-[100px]" />
      <Listen />
      <div className="h-[100px]" />
      <Contact />
      <div className="h-[200px]" />
      <WorkInterest />
      <Footer active={1} />
    </>
  );
};

export default System;

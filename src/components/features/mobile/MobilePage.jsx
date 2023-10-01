import React from "react";
import Footer from "../../reusable/Footer";
import WorkInterest from "../../reusable/WorkInterest";
import Contact from "../../reusable/Contact";
import Intro from "../Intro";
import Listen from "../../reusable/Listen";

import TextWithImage from "../../reusable/TextWithImage";

import Elevate from "@/public/assets/mobile solution/Rectangle 1.png";
import Unlock from "@/public/assets/mobile solution/Rectangle 1-1.png";
import Services from "./Services";

import One from "@/public/assets/mobile solution/Ellipse 10.png";
import Two from "@/public/assets/mobile solution/Ellipse 11.png";
import Three from "@/public/assets/mobile solution/Ellipse 12.png";
import Four from "@/public/assets/mobile solution/Ellipse 13.png";
import WorkedWith from "../../reusable/WorkedWith";

const MobilePage = () => {
  return (
    <>
      <Intro
        One={One}
        Two={Two}
        Three={Three}
        Four={Four}
        pinText={"MOBILE SOLUTION"}
        preRedSubtitle={"Seamless"}
        redSubtitle={"Mobile Solutions"}
        postRedText={"by FayGroup"}
        content={
          "Experience the next level of business transformation with FayGroup's advanced mobile solutions."
        }
      />
      <WorkedWith />
      <div className="h-[150px]" />
      <Services />
      <div className="h-[100px]" />
      <TextWithImage
        useRedBackground={true}
        left={true}
        pinText={"ACHIEVE MORE"}
        preRedText={"Ulnleash Mobile Excellence: Partner with FayGroup for"}
        redText={"Optimal Solutions"}
        content={
          "Unlock the true potential of your business with FayGroup's exceptional mobile solutions. Get customized mobile applications that drive growth, engagement, and efficiency"
        }
        includeButton={true}
        image={Elevate}
      />
      <div className="h-[100px]" />
      <TextWithImage
        right={true}
        pinText={"ACHIEVE MORE"}
        preRedText={"Empowering Your Business with Cutting-Edge"}
        redText={"Mobile Solutions"}
        content={
          "From seamless user experiences to enhanced customer engagement, our mobile solutions are designed to take your business to new heights. Discover the power of mobility with FayGroup."
        }
        includeButton={true}
        image={Unlock}
      />
    
      <div className="h-[100px]" />
      <Listen />
      <div className="h-[100px]" />
      <Contact />
      <div className="h-[100px]" />
      <WorkInterest />
      <Footer active={1} />
    </>
  );
};

export default MobilePage;

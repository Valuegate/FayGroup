import React from "react";
import Banner from "@/src/components/reusable//Banner";
import Footer from "@/src/components/reusable/Footer";
import WorkInterest from "@/src/components/reusable/WorkInterest";
import Contact from "@/src/components/reusable/Contact";

const ProductPage = () => {
  return (
    <>
      <div className="flex flex-col gap-10 items-start">
        <div className="flex items-center gap-[10px]">
          <div className="w-[18px]">
            <img src="./Pin.svg" alt="pin" />
          </div>
          <div className="text-maroon text-base font-[600] leading-loose">
            PRODUCT DEVELOPMENT
          </div>
        </div>
        <Banner
          active={1}
          image="./features/Features.svg"
          firstText={"Use Digital Solutions for Efficient"}
          secondText={"Product Development"}
          subtitle={
            "Embark on a journey of innovation with our product development expertise. We craft tomorrow's solutions today."
          }
        />
      </div>

      <Contact />
      <WorkInterest />
      <Footer active={1} />
    </>
  );
};

export default ProductPage;

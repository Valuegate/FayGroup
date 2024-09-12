"use client";

import React, { useEffect, useState } from "react";
import Footer from "../reusable/Footer";
import WorkInterest from "../reusable/WorkInterest";
import Contact from "../reusable/Contact";
import Intro from "./Intro";
import MiniBlog from "../reusable/MiniBlog";

import EbookModal from "./EbookModal";

const BlogsPage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 300);
  }, []);

  return (
    <div
      className={`relative w-full ${
        showModal ? "overflow-y-hidden h-[100vh]" : "h-auto"
      }`}
    >
      <Intro />
      <MiniBlog />
      <Contact />
      <WorkInterest />
      <Footer />

      {showModal && (
        <div className="absolute bottom-0 top-0 left-0 right-0">
          <EbookModal
            onDismiss={() => {
              setShowModal(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default BlogsPage;

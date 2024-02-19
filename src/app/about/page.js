import { Metadata } from "next";

import AboutPage from "@/src/components/about/AboutPage";

export const metadata = {
  title: "About",
};

export default function About() {
  return <AboutPage />;
}

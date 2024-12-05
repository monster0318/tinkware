"use client";
import Home4About from "@/components/about/Home4About";
import Home4award from "@/components/award/Home4award";
import Home4Banner from "@/components/banner/Home4Banner";
// import Home4Blog from "@/components/blog/Home4Blog";
import Home4Contact from "@/components/contact/Home4Contact";
import Home4experience from "@/components/experience/Home4experience";
import Home4Footer from "@/components/footer/Home4Footer";
import Header3 from "@/components/header/Header3";
import LogoMarquee2 from "@/components/marquee/LogoMarquee2";
import Home4Portfolio from "@/components/portfolio/Home4Portfolio";
import Home4Service from "@/components/service/Home4Service";
import Home4Team from "@/components/team/Home4Team";
import Home4Testimonial from "@/components/testimonial/Home4Testimonial";
import Home4Process from "@/components/workProcess/Home4Process";
import useWow from "@/hooks/useWow";

import React, { useEffect } from "react";

const CreativeAgencyPage = () => {
  useWow()
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <>
      <Header3 />
      <Home4Banner />
      <Home4About />
      <Home4Service />
      <Home4experience />
      <LogoMarquee2 />
      <Home4Portfolio />
      <Home4Process />
      <Home4Contact />
      <Home4award />
      <Home4Team />
      <Home4Testimonial />
      {/* <Home4Blog /> */}
      <Home4Footer />
    </>
  );
};

export default CreativeAgencyPage;

"use client";
import Home1About from "@/components/about/Home1About";
import Home1Approach from "@/components/approachSection/Home1Approach";
import Home1Banner from "@/components/banner/Home1Banner";
import Home1Blog from "@/components/blog/Home1Blog";
import BannerWithCaseStudySlider from "@/components/caseStudy/BannerWithCaseStudySlider";
import Home1Contact from "@/components/contact/Home1Contact";
import Footer from "@/components/footer/Footer";
import Header1 from "@/components/header/Header1";
import Home1BannerMarquee from "@/components/marquee/Home1BannerMarquee";
import LogoMarquee from "@/components/marquee/LogoMarquee";
import Home1Portfolio from "@/components/portfolio/Home1Portfolio";
import Home1Solution from "@/components/solution/Home1Solution";
import Home1Testimonial from "@/components/testimonial/Home1Testimonial";
import Home1WorkProcess from "@/components/workProcess/Home1WorkProcess";
import useWow from "@/hooks/useWow";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);
  useWow()
  return (
    <>
      <Header1 />
      <Home1Banner />
      <Home1BannerMarquee />
      <Home1About />
      <Home1Solution />
      <Home1Portfolio />
      <Home1WorkProcess />
      <BannerWithCaseStudySlider />
      <Home1Approach />
      <LogoMarquee />
      <Home1Testimonial />
      <Home1Blog />
      <Home1Contact />
      <Footer />
    </>
  );
}

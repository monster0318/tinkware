"use client"
import Home2About from "@/components/about/Home2About";
import Home2Banner from "@/components/banner/Home2Banner";
import Home2Blog from "@/components/blog/Home2Blog";
import Home2CaseStudySlide from "@/components/caseStudy/Home2CaseStudySlide";
import Home2Contact from "@/components/contact/Home2Contact";
import Home2horizontalScroll from "@/components/feature/Home2horizontalScroll";
import Footer2 from "@/components/footer/Footer2";
import Header1 from "@/components/header/Header1";
import Home2BannerMarquee from "@/components/marquee/Home2BannerMarquee";
import LogoMarquee from "@/components/marquee/LogoMarquee";
import Home2pricingPlan from "@/components/pricing-plan/Home2pricingPlan";
import Home2service from "@/components/service/Home2service";
import Home2Testimonial from "@/components/testimonial/Home2Testimonial";
import Home2WorkProcess from "@/components/workProcess/Home2WorkProcess";
import useWow from "@/hooks/useWow";



const DigitalMarketingHomePage = () => {
  useWow()
  return (
    <>
      <Header1 />
      <Home2Banner />
      <Home2BannerMarquee />
      <Home2About />
      <LogoMarquee />
      <Home2service />
      <Home2WorkProcess />
      <Home2horizontalScroll />
      <Home2CaseStudySlide />
      <Home2Testimonial />
      <Home2pricingPlan />
      <Home2Contact />
      <Home2Blog />
      <Footer2 />
    </>
  );
};

export default DigitalMarketingHomePage;

import Home3Banner from "@/components/banner/Home3Banner";
import Home3Blog from "@/components/blog/Home3Blog";
import Home3countdown from "@/components/countdown/Home3countdown";
import Home3Faq from "@/components/faq/Home3Faq";
import Home3Feature from "@/components/feature/Home3Feature";
import Footer3 from "@/components/footer/Footer3";
import Header2 from "@/components/header/Header2";
import LogoMarquee from "@/components/marquee/LogoMarquee";
import Home3Newslatter from "@/components/newslatter/Home3Newslatter";
import Home3PricingPlan from "@/components/pricing-plan/Home3PricingPlan";
import Home3ProjectManagement from "@/components/projectManagement/Home3ProjectManagement";
import Home3Testimonial from "@/components/testimonial/Home3Testimonial";
import Home3Tools from "@/components/tools/Home3Tools";
import Home3WorkProcess from "@/components/workProcess/Home3WorkProcess";

export const metadata = {
  title: "Zenfy - Software, SaaS & Digital Agency Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const SaasPage = () => {
  return (
    <>
      <Header2 />
      <Home3Banner />
      <Home3WorkProcess />
      <Home3countdown />
      <Home3ProjectManagement />
      <LogoMarquee />
      <Home3Testimonial />
      <Home3Feature />
      <Home3PricingPlan />
      <Home3Newslatter />
      <Home3Faq />
      <Home3Tools />
      <Home3Blog />
      <Footer3 />
    </>
  );
};

export default SaasPage;

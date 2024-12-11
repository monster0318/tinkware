import HomeAbout from "@/components/about/Home1About";
import HomeApproach from "@/components/approachSection/Home1Approach";
import HomeBanner from "@/components/banner/HomeBanner";
import HomeBlog from "@/components/blog/HomeBlog";
import BannerWithCaseStudySlider from "@/components/caseStudy/BannerWithCaseStudySlider";
import HomeContact from "@/components/contact/HomeContact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HomeBannerMarquee from "@/components/marquee/Home1BannerMarquee";
import LogoMarquee from "@/components/marquee/LogoMarquee";
import HomePortfolio from "@/components/portfolio/HomePortfolio";
import HomeSolution from "@/components/solution/HomeSolution";
import HomeTestimonial from "@/components/testimonial/HomeTestimonial";
import HomeWorkProcess from "@/components/workProcess/Home1WorkProcess";

export const metadata = {
  icons: {
    icon: "/assets/img/sm-logo.png",
  },
}
export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <HomeBannerMarquee />
      <HomeAbout />
      <HomeSolution />
      <HomePortfolio />
      <HomeWorkProcess />
      <BannerWithCaseStudySlider />
      <HomeApproach />
      <LogoMarquee />
      <HomeTestimonial />
      <HomeBlog />
      <HomeContact />
      <Footer />
    </>
  );
}

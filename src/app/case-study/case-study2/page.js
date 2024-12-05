"use client";
import CountUp from "react-countup";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import React from "react";
import useWow from "@/hooks/useWow";

const CaseStudyPage = () => {

  useWow()
  return (
    <MainLayout>
      <div
        className="case-study-card-section scroll-margin pt-120 mb-120"
        id="case-study-card-section"
      >
        <div className="container">
          <div className="row g-4 mb-50">
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card2">
                <div className="card-img">
                  <img src="/assets/img/home2/case-study-img1.jpg" alt="" />
                </div>
                <div className="card-content">
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Beautico E-commerce Growth rate.{" "}
                    </Link>
                  </h4>
                  <div className="number">
                    <span>+</span>
                    <h5 className="counter">
                      <CountUp end={40} delay={2} />
                    </h5>
                    <span>%</span>
                  </div>
                  <ul className="tag-list">
                    <li>
                      <Link href="/case-study">Paid Search</Link>
                    </li>
                    <li>
                      <Link href="/case-study">Paid Social</Link>
                    </li>
                    <li>
                      <Link href="/case-study">SEO</Link>
                    </li>
                  </ul>
                  <Link
                    href="/case-study/case-study-details"
                    className="read-more-btn"
                  >
                    Read The Success Stories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card2">
                <div className="card-img">
                  <img src="/assets/img/home2/case-study-img2.jpg" alt="" />
                </div>
                <div className="card-content">
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Goldmiths Corpo Engagement rates.
                    </Link>
                  </h4>
                  <div className="number">
                    <span>+</span>
                    <h5 className="counter">
                      <CountUp end={38} delay={2} />
                    </h5>
                    <span>%</span>
                  </div>
                  <ul className="tag-list">
                    <li>
                      <Link href="/case-study">Organic Social Meida</Link>
                    </li>
                    <li>
                      <Link href="/case-study">Paid Social</Link>
                    </li>
                    <li>
                      <Link href="/case-study">SEO</Link>
                    </li>
                  </ul>
                  <Link
                    href="/case-study/case-study-details"
                    className="read-more-btn"
                  >
                    Read The Success Stories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card2">
                <div className="card-img">
                  <img src="/assets/img/home2/case-study-img3.jpg" alt="" />
                </div>
                <div className="card-content">
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Fashion E-commerce Growth rate.
                    </Link>
                  </h4>
                  <div className="number">
                    <span>+</span>
                    <h5 className="counter">
                      <CountUp end={50} delay={2} />
                    </h5>
                    <span>%</span>
                  </div>
                  <ul className="tag-list">
                    <li>
                      <Link href="/case-study">Paid Search</Link>
                    </li>
                    <li>
                      <Link href="/case-study">Paid Social</Link>
                    </li>
                    <li>
                      <Link href="/case-study">SEO</Link>
                    </li>
                  </ul>
                  <Link
                    href="/case-study/case-study-details"
                    className="read-more-btn"
                  >
                    Read The Success Stories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card2">
                <div className="card-img">
                  <img src="/assets/img/home2/case-study-img4.jpg" alt="" />
                </div>
                <div className="card-content">
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Health E-commerce Success rate.{" "}
                    </Link>
                  </h4>
                  <div className="number">
                    <span>+</span>
                    <h5 className="counter">
                      <CountUp end={40} delay={2} />
                    </h5>
                    <span>%</span>
                  </div>
                  <ul className="tag-list">
                    <li>
                      <Link href="/case-study">Paid Search</Link>
                    </li>
                    <li>
                      <Link href="/case-study">Paid Social</Link>
                    </li>
                    <li>
                      <Link href="/case-study">SEO</Link>
                    </li>
                  </ul>
                  <Link
                    href="/case-study/case-study-details"
                    className="read-more-btn"
                  >
                    Read The Success Stories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card2">
                <div className="card-img">
                  <img src="/assets/img/home2/case-study-img5.jpg" alt="" />
                </div>
                <div className="card-content">
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Travel &amp; Tour Agency Growth rate.
                    </Link>
                  </h4>
                  <div className="number">
                    <span>+</span>
                    <h5 className="counter">
                      <CountUp end={40} delay={2} />
                    </h5>
                    <span>%</span>
                  </div>
                  <ul className="tag-list">
                    <li>
                      <Link href="/case-study">Organic Social Meida</Link>
                    </li>
                    <li>
                      <Link href="/case-study">Paid Social</Link>
                    </li>
                    <li>
                      <Link href="/case-study">SEO</Link>
                    </li>
                  </ul>
                  <Link
                    href="/case-study/case-study-details"
                    className="read-more-btn"
                  >
                    Read The Success Stories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card2">
                <div className="card-img">
                  <img src="/assets/img/home2/case-study-img6.jpg" alt="" />
                </div>
                <div className="card-content">
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Barber &amp; Hair Salon Growth rates.
                    </Link>
                  </h4>
                  <div className="number">
                    <span>+</span>
                    <h5 className="counter">
                      <CountUp end={50} delay={2} />
                    </h5>
                    <span>%</span>
                  </div>
                  <ul className="tag-list">
                    <li>
                      <Link href="/case-study">Paid Search</Link>
                    </li>
                    <li>
                      <Link href="/case-study">Paid Social</Link>
                    </li>
                    <li>
                      <Link href="/case-study">SEO</Link>
                    </li>
                  </ul>
                  <Link
                    href="/case-study/case-study-details"
                    className="read-more-btn"
                  >
                    Read The Success Stories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card2">
                <div className="card-img">
                  <img src="/assets/img/home2/case-study-img7.jpg" alt="" />
                </div>
                <div className="card-content">
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Organic Food E-commerce Growth rates.
                    </Link>
                  </h4>
                  <div className="number">
                    <span>+</span>
                    <h5 className="counter">
                      <CountUp end={48} delay={2} />{" "}
                    </h5>
                    <span>%</span>
                  </div>
                  <ul className="tag-list">
                    <li>
                      <Link href="/case-study">Organic Social Meida</Link>
                    </li>
                    <li>
                      <Link href="/case-study">Paid Social</Link>
                    </li>
                    <li>
                      <Link href="/case-study">SEO</Link>
                    </li>
                  </ul>
                  <Link
                    href="/case-study/case-study-details"
                    className="read-more-btn"
                  >
                    Read The Success Stories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card2">
                <div className="card-img">
                  <img src="/assets/img/home2/case-study-img8.jpg" alt="" />
                </div>
                <div className="card-content">
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Fitness and Yoga Services Growth rate.
                    </Link>
                  </h4>
                  <div className="number">
                    <span>+</span>
                    <h5 className="counter">
                      <CountUp end={38} delay={2} />
                    </h5>
                    <span>%</span>
                  </div>
                  <ul className="tag-list">
                    <li>
                      <Link href="/case-study">Paid Search</Link>
                    </li>
                    <li>
                      <Link href="/case-study">Paid Social</Link>
                    </li>
                    <li>
                      <Link href="/case-study">SEO</Link>
                    </li>
                  </ul>
                  <Link
                    href="/case-study/case-study-details"
                    className="read-more-btn"
                  >
                    Read The Success Stories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card2">
                <div className="card-img">
                  <img src="/assets/img/home2/case-study-img9.jpg" alt="" />
                </div>
                <div className="card-content">
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Beauty Spa &amp; Wellness Salon Growth rate.
                    </Link>
                  </h4>
                  <div className="number">
                    <span>+</span>
                    <h5 className="counter">
                      <CountUp end={31} delay={2} />
                    </h5>
                    <span>%</span>
                  </div>
                  <ul className="tag-list">
                    <li>
                      <Link href="/case-study">Paid Search</Link>
                    </li>
                    <li>
                      <Link href="/case-study">Paid Social</Link>
                    </li>
                    <li>
                      <Link href="/case-study">SEO</Link>
                    </li>
                  </ul>
                  <Link
                    href="/case-study/case-study-details"
                    className="read-more-btn"
                  >
                    Read The Success Stories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12 d-flex justify-content-center wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <Link href="#" className="load-btn">
                <span>
                  Load More
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CaseStudyPage;

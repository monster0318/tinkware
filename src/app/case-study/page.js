"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";

const CaseStudyPage = () => {
  useWow()

  const handleClick = (e) => {
    e.preventDefault(); // Prevents the default navigation behavior
  };

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
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/innerpage/case-study-img1.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study" onClick={handleClick}>Startup Company</Link>
                  <h4>
                    <Link href="/case-study/case-study-details" onClick={handleClick}>
                      Navigating Growth A Startup Agency Success Story.
                    </Link>
                  </h4>
                  <p>
                    In this case study, we dissect the challenges faci the
                    strategies employed, and the remarkable oun achieved through
                    our collaborative efforts.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/innerpage/case-study-img2.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study" onClick={handleClick}>Design Agency</Link>
                  <h4>
                    <Link href="/case-study/case-study-details" onClick={handleClick}>
                      Customer Centric Strategies Acquiring Retaining.
                    </Link>
                  </h4>
                  <p>
                    This case study unveils the strategic roadmap, the
                    technology stack deployed, and the tangible benefits reaped
                    by Egenslab.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/innerpage/case-study-img3.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study" onClick={handleClick}>Digital Transformation</Link>
                  <h4>
                    <Link href="/case-study/case-study-details" onClick={handleClick}>
                      Tech Breakthroughs Solution Pioneering Digital Age.
                    </Link>
                  </h4>
                  <p>
                    In this case study, we dissect the challenges faci the
                    strategies employed, and the remarkable oun achieved through
                    our collaborative efforts.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/home1/case-study-img1.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study" onClick={handleClick}>Startup Company</Link>
                  <h4>
                    <Link href="/case-study/case-study-details" onClick={handleClick}>
                      Navigating Growth A Startup Agency Success Story.
                    </Link>
                  </h4>
                  <p>
                    In this case study, we dissect the challenges faci the
                    strategies employed, and the remarkable oun achieved through
                    our collaborative efforts.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/home1/case-study-img2.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study" onClick={handleClick}>It Agency</Link>
                  <h4>
                    <Link href="/case-study/case-study-details" onClick={handleClick}>
                      Digital Transformation Long Journey to Industry.
                    </Link>
                  </h4>
                  <p>
                    This case study unveils the strategic roadmap, the
                    technology stack deployed, and the tangible benefits reaped
                    by Egenslab.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/home1/case-study-img3.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study" onClick={handleClick}>Creative Agency</Link>
                  <h4>
                    <Link href="/case-study/case-study-details" onClick={handleClick}>
                      Overcoming Expansion An Initial Agency's Triumph
                    </Link>
                  </h4>
                  <p>
                    In this case study, we dissect the challenges faci the
                    strategies employed, and the remarkable oun achieved through
                    our collaborative efforts.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/home1/case-study-img4.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study" onClick={handleClick}>Marketing</Link>
                  <h4>
                    <Link href="/case-study/case-study-details" onClick={handleClick}>
                      A Business Consulting to Increase Marketing Analaytic
                    </Link>
                  </h4>
                  <p>
                    This case study unveils the strategic roadmap, the
                    technology stack deployed, and the tangible benefits reaped
                    by Egenslab.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/innerpage/case-study-img4.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study" onClick={handleClick}>Global Impact</Link>
                  <h4>
                    <Link href="/case-study/case-study-details" onClick={handleClick}>
                      Small Business Triumph Over coming Challenges.
                    </Link>
                  </h4>
                  <p>
                    In this case study, we dissect the challenges faci the
                    strategies employed, and the remarkable oun achieved through
                    our collaborative efforts.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/innerpage/case-study-img5.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study" onClick={handleClick}>Global Impact</Link>
                  <h4>
                    <Link href="/case-study/case-study-details" onClick={handleClick}>
                      Global Impact Scaling Across Operations Borders.
                    </Link>
                  </h4>
                  <p>
                    In this case study, we dissect the challenges faci the
                    strategies employed, and the remarkable oun achieved through
                    our collaborative efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CaseStudyPage;

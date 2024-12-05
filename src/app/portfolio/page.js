"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";

const PortfolioPage = () => {
  useWow()
  return (
    <MainLayout>
      <div
        className="portfolio-grid-section scroll-margin pt-120 mb-120"
        id="portfolio-grid"
      >
        <div className="container">
          <div className="row g-4 mb-50">
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-01.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href="/portfolio/portfolio-details">
                      Unveiling Iconic Identities
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-02.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href="/portfolio/portfolio-details">
                      Navigating Digital Excellence
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Logo Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Digital Graphics</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-03.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href="/portfolio/portfolio-details">
                      Crafting Graphic Marvels
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Print Collateral</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Digital Graphics</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-06.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href="/portfolio/portfolio-details">
                      Set the Industry Ablaze{" "}
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Print Collateral</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Digital Graphics</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-07.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href="/portfolio/portfolio-details">
                      Works of Art in Our Portfolio
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Logo Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Digital Graphics</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-08.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href="/portfolio/portfolio-details">
                      Centric Designs Reshaping
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Print Collateral</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Digital Graphics</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-09.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href="/portfolio/portfolio-details">
                      Unveiling Iconic Identities
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Print Collateral</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Digital Graphics</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-10.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href="/portfolio/portfolio-details">
                      Captivating Digital Campaign
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Digital Graphics</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-11.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href="/portfolio/portfolio-details">
                      Digital Masterpieces Redfin
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                  </ul>
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

export default PortfolioPage;

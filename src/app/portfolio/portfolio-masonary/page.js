"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";

const PortfolioMasonaryPage = () => {
  useWow()
  return (
    <MainLayout>
      <div
        className="portfolio-grid-section scroll-margin pt-120 mb-120"
        id="portfolio-grid"
      >
        <div className="container">
          <div className="row gy-lg-5 g-4 justify-content-between mb-60">
            <div
              className="col-lg-6 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="/portfolio">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Software</Link>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="/assets/img/home5/portfolio-01.jpg" alt="" />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <Link href="/portfolio/portfolio-details">
                      Smart Design, Smarter Solutions.
                    </Link>
                  </h4>
                  <Link
                    className="details-btn"
                    href="/portfolio/portfolio-details"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="/portfolio">Logo</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Color</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Typography</Link>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="/assets/img/home5/portfolio-02.jpg" alt="" />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <Link href="/portfolio/portfolio-details">
                      Where Vision Meets Technology.
                    </Link>
                  </h4>
                  <Link
                    className="details-btn"
                    href="/portfolio/portfolio-details"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="/portfolio">Logo</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Color</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Typography</Link>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="/assets/img/home5/portfolio-03.jpg" alt="" />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <Link href="/portfolio/portfolio-details">
                      Studio Navigating the Digital Wave.
                    </Link>
                  </h4>
                  <Link
                    className="details-btn"
                    href="/portfolio/portfolio-details"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="/portfolio">Logo</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Color</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Typography</Link>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="/assets/img/home5/portfolio-04.jpg" alt="" />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <Link href="/portfolio/portfolio-details">
                      NexGen Pioneering Digital Solutions.
                    </Link>
                  </h4>
                  <Link
                    className="details-btn"
                    href="/portfolio/portfolio-details"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="/portfolio">Logo</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Color</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Typography</Link>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="/assets/img/home5/portfolio-05.jpg" alt="" />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <Link href="/portfolio/portfolio-details">
                      Unveiling Iconic Identities
                    </Link>
                  </h4>
                  <Link
                    className="details-btn"
                    href="/portfolio/portfolio-details"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="/portfolio">Logo</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Color</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Typography</Link>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="/assets/img/home5/portfolio-06.jpg" alt="" />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <Link href="/portfolio/portfolio-details">
                      Innovative digital options from NexGen.
                    </Link>
                  </h4>
                  <Link
                    className="details-btn"
                    href="/portfolio/portfolio-details"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
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
              <Link href="/" className="load-btn">
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

export default PortfolioMasonaryPage;

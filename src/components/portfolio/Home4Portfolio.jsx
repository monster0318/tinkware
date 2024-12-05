import Link from "next/link";
import React from "react";

const Home4Portfolio = () => {
  return (
    <>
      <div className="home4-portfolio-section mb-130">
        <div className="container">
          <div
            className="row mb-60 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <g>
                      <circle cx={5} cy={5} r={5} />
                    </g>
                  </svg>
                  Our Project
                </span>
                <h2>A Showcase of Zenfy</h2>
              </div>
              <Link href="/portfolio" className="details-button">
                View All Work
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="row g-4 mb-60">
            <div
              className="col-lg-4 col-md-6 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div className="card-img">
                  <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href=".portfolio/portfolio-details">
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
              className="col-lg-4 col-md-6 pt--40 wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div className="card-img">
                  <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href=".portfolio/portfolio-details">
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
              className="col-lg-4 col-md-6 wow animate fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div className="card-img">
                  <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href=".portfolio/portfolio-details">
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
          </div>
          <div className="row g-4">
            <div
              className="col-lg-6 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2 two">
                <div className="card-img">
                  <img src="assets/img/home4/portfolio-img-04.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href=".portfolio/portfolio-details">
                      Narratives in Advertising
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
              className="col-lg-6 wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2 two">
                <div className="card-img">
                  <img src="assets/img/home4/portfolio-img-05.jpg" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Egenslab</span>
                  <h5>
                    <Link href=".portfolio/portfolio-details">
                      Consultation and Creative Strategy
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Copywriting</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Article Writing</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home4Portfolio;

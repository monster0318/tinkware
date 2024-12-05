"use client";
import React, { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import useWow from "@/hooks/useWow";

const PortfolioInfoFlow = () => {
  useWow()
  useEffect(() => {
    const infoflow1TextItem = document.querySelectorAll(".infoflow-wrap");
    console.log(infoflow1TextItem);
    function followImageCursor(event, infoflow1TextItem) {
      const contentBox = infoflow1TextItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      infoflow1TextItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    infoflow1TextItem.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, item), 100);
      });
    });
  }, []);
  return (
    <MainLayout>
      <div
        className="portfolio-info-flow-section  scroll-margin pt-120 mb-120"
        id="portfolio-grid"
      >
        <div className="container">
          <div className="row g-4 mb-50">
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link
                href="/portfolio/portfolio-details"
                className="eg-card2 style-3 infoflow-wrap"
              >
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-01.jpg" alt="" />
                </div>
                <div class="inflow-content">
                  <span>Client: Egenslab</span>
                  <h6>Unveiling Iconic Identities</h6>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link
                href="/portfolio/portfolio-details"
                className="eg-card2 style-3 infoflow-wrap"
              >
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-02.jpg" alt="" />
                </div>
                <div class="inflow-content">
                  <span>Client: Egenslab</span>
                  <h6>Unveiling Iconic Identities</h6>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link
                href="/portfolio/portfolio-details"
                className="eg-card2 style-3 infoflow-wrap"
              >
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-03.jpg" alt="" />
                </div>
                <div class="inflow-content">
                  <span>Client: Egenslab</span>
                  <h6>Unveiling Iconic Identities</h6>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link
                href="/portfolio/portfolio-details"
                className="eg-card2 style-3 infoflow-wrap"
              >
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-06.jpg" alt="" />
                </div>
                <div class="inflow-content">
                  <span>Client: Egenslab</span>
                  <h6>Unveiling Iconic Identities</h6>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link
                href="/portfolio/portfolio-details"
                className="eg-card2 style-3 infoflow-wrap"
              >
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-07.jpg" alt="" />
                </div>
                <div class="inflow-content">
                  <span>Client: Egenslab</span>
                  <h6>Unveiling Iconic Identities</h6>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link
                href="/portfolio/portfolio-details"
                className="eg-card2 style-3 infoflow-wrap"
              >
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-08.jpg" alt="" />
                </div>
                <div class="inflow-content">
                  <span>Client: Egenslab</span>
                  <h6>Unveiling Iconic Identities</h6>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link
                href="/portfolio/portfolio-details"
                className="eg-card2 style-3 infoflow-wrap"
              >
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-09.jpg" alt="" />
                </div>
                <div class="inflow-content">
                  <span>Client: Egenslab</span>
                  <h6>Unveiling Iconic Identities</h6>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link
                href="/portfolio/portfolio-details"
                className="eg-card2 style-3 infoflow-wrap"
              >
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-10.jpg" alt="" />
                </div>
                <div class="inflow-content">
                  <span>Client: Egenslab</span>
                  <h6>Unveiling Iconic Identities</h6>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link
                href="/portfolio/portfolio-details"
                className="eg-card2 style-3 infoflow-wrap"
              >
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-11.jpg" alt="" />
                </div>
                <div class="inflow-content">
                  <span>Client: Egenslab</span>
                  <h6>Unveiling Iconic Identities</h6>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link
                href="/portfolio/portfolio-details"
                className="eg-card2 style-3 infoflow-wrap"
              >
                <div className="card-img">
                  <img src="/assets/img/home4/portfolio-img-12.jpg" alt="" />
                </div>
                <div class="inflow-content">
                  <span>Client: Egenslab</span>
                  <h6>Unveiling Iconic Identities</h6>
                </div>
              </Link>
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

export default PortfolioInfoFlow;

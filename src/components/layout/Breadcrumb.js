"use client"
import React from "react";
import breadcrumbData from "../../data/Breadcrumb.json";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb = () => {
  const currentSlug = usePathname(); // Get the current route's slug

  // Filter breadcrumbData based on matching slugs
  const filteredBreadcrumbData = breadcrumbData.filter(
    (item) => item.slug === currentSlug
  );

  // Render the breadcrumb only if there's a matching slug
  if (filteredBreadcrumbData.length === 0) {
    return (
        <div
        className="breadcrumb-section"
        style={{
          backgroundImage: "url(/assets/img/innerpage/breadcrumb-bg1.png), linear-gradient(180deg, #121212 0%, #121212 100%)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-wrapper">
                <div className="banner-content">
                  <ul className="breadcrumb-list">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                  </ul>
                  <h1>Path Not Match</h1>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  
  const currentBreadcrumb = filteredBreadcrumbData[0];

  return (
    <>
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:
            "url(/assets/img/innerpage/breadcrumb-bg1.png), linear-gradient(180deg, #121212 0%, #121212 100%)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-wrapper">
                <div className="banner-content">
                  <ul className="breadcrumb-list">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>{currentBreadcrumb.name}</li>
                  </ul>
                  <h1>{currentBreadcrumb.pageTitle}</h1>
                </div>
                <div className="scroll-down-btn">
                  <a href={currentBreadcrumb.section_down_scroll}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={29}
                      viewBox="0 0 19 29"
                    >
                      <path d="M9.5 0V28M9.5 28C10 24.3333 12.4 17.1 18 17.5M9.5 28C8.5 24.1667 5.4 16.7 1 17.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;

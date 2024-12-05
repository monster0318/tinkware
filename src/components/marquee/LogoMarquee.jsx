import React from "react";
import Marquee from "react-fast-marquee";
const LogoMarquee = () => {
  return (
    <div
      className="logo-section mb-110 wow animate fadeInUp"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <div className="container-fluid">
        <div className="logo-wrap">
          <div className="logo-title">
            <h6>We Worked With Global Largest Brand</h6>
          </div>
          <div className="logo-area">
            <div className="marquee_text2">
              <Marquee>
                <a href="#">
                  <img src="assets/img/home1/company-logo-01.png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/home1/company-logo-02.png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/home1/company-logo-03.png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/home1/company-logo-04.png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/home1/company-logo-05.png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/home1/company-logo-06.png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/home1/company-logo-07.png" alt="" />
                </a>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;

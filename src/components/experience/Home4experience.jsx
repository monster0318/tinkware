"use client";
import React, { useEffect } from "react";
const Home4experience = () => {
  useEffect(() => {
    var skillPers = document.querySelectorAll(".experience-bar-per");

    skillPers.forEach(function (skillPer) {
      var per = parseFloat(skillPer.getAttribute("data-per"));
      skillPer.style.width = per + "%";

      var animatedValue = 0;
      var startTime = null;

      function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)

        if (stepPercentage < 1) {
          animatedValue = per * stepPercentage;
          skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
          requestAnimationFrame(animate);
        } else {
          animatedValue = per;
          skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
        }
      }
      requestAnimationFrame(animate);
    });
  }, []);
  return (
    <>
      <div className="home4-experience-section">
        <div className="container">
          <div className="row g-lg-4 gy-5 align-items-center">
            <div className="col-lg-5">
              <div
                className="experience-card-wrap mb-20 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-experience">
                  <div className="background-img">
                    <img
                      src="assets/img/home4/experience-card-bg-img2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>Discovery</h4>
                    <p>
                      Welcome to Zenfy, where’r digital agi innovation meet
                      strategic expensive dynamic force in the.
                    </p>
                  </div>
                  <div className="number">
                    <span>01</span>
                  </div>
                </div>
              </div>
              <div
                className="experience-card-wrap mb-20 wow animate fadeInLeft"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="single-experience">
                  <div className="background-img">
                    <img
                      src="assets/img/home4/experience-card-bg-img1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>Strategy</h4>
                    <p>
                      Welcome to Zenfy, where’r digital agi innovation meet
                      strategic expensive dynamic force in the.
                    </p>
                  </div>
                  <div className="number">
                    <span>02</span>
                  </div>
                </div>
              </div>
              <div
                className="experience-card-wrap wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-experience">
                  <div className="background-img">
                    <img
                      src="assets/img/home4/experience-card-bg-img3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>Development</h4>
                    <p>
                      Welcome to Zenfy, where’r digital agi innovation meet
                      strategic expensive dynamic force in the.
                    </p>
                  </div>
                  <div className="number">
                    <span>03</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-end">
              <div
                className="experience-percentage-wrap wow animate zoomIn"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="section-title3 mb-60">
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
                    Our Experience
                  </span>
                  <h2>Tracking Our Percentage</h2>
                </div>
                <div className="eg-progress-wrap">
                  <div className="eg-progress-bar-single mb-45">
                    <div className="eg-progress-bar-title">
                      <h6>Web Design</h6>
                    </div>
                    <div className="eg-progress-bar">
                      <div className="experience-bar-per" data-per={90} />
                    </div>
                  </div>
                  <div className="eg-progress-bar-single mb-45">
                    <div className="eg-progress-bar-title">
                      <h6>Digital Marketing</h6>
                    </div>
                    <div className="eg-progress-bar">
                      <div className="experience-bar-per" data-per={80} />
                    </div>
                  </div>
                  <div className="eg-progress-bar-single mb-45">
                    <div className="eg-progress-bar-title">
                      <h6>Content Creation</h6>
                    </div>
                    <div className="eg-progress-bar">
                      <div className="experience-bar-per" data-per={80} />
                    </div>
                  </div>
                  <div className="eg-progress-bar-single">
                    <div className="eg-progress-bar-title">
                      <h6>App Development</h6>
                    </div>
                    <div className="eg-progress-bar">
                      <div className="experience-bar-per" data-per={98} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home4experience;

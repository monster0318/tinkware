"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import CountUp from "react-countup";
const Home4About = () => {
  useEffect(() => {
    const element = document.querySelectorAll(".badge__char");
    const step = 360 / element.length;

    element.forEach((elem, i) => {
      elem.style.setProperty("--char-rotate", i * step + "deg");
    });
  }, []);
  return (
    <>
      <div className="home4-about-section mb-130" id="about-section">
        <div className="container">
          <div className="row align-items-center mb-110">
            <div
              className="col-xl-9 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="about-content-wrap">
                <div className="about-section-title mb-40">
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
                    Unveiling Work Zenfy
                  </span>
                  <h2>
                    We are a Creative agency working with young talents on
                    delivering unique ideas and creative work.
                  </h2>
                  <p>
                    Where innovation meets passion in a journey that started
                    with a simple idea and a shared dr. Founded in recent year
                    we embarked on a mission to bring the new innovation and
                    introduct the technology. From humble beginnings to our
                    current aspirations.
                  </p>
                </div>
                <Link href="/about" className="explore-btn">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={11}
                    height={11}
                    viewBox="0 0 10 10"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-3 wow animate fadeInRight"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="text-rotate-area">
                <div className="badge">
                  <span className="badge__char">W</span>
                  <span className="badge__char">E</span>
                  <span className="badge__char">L</span>
                  <span className="badge__char">C</span>
                  <span className="badge__char">O</span>
                  <span className="badge__char">M</span>
                  <span className="badge__char">E</span>
                  <span className="badge__char" />
                  <span className="badge__char">T</span>
                  <span className="badge__char">O</span>
                  <span className="badge__char" />
                  <span className="badge__char">Z</span>
                  <span className="badge__char">E</span>
                  <span className="badge__char">N</span>
                  <span className="badge__char">F</span>
                  <span className="badge__char">Y</span>
                  <span className="badge__char">*</span>
                  <span className="badge__char">M</span>
                  <span className="badge__char">E</span>
                  <span className="badge__char">E</span>
                  <span className="badge__char">T</span>
                  <span className="badge__char">S</span>
                  <span className="badge__char" />
                  <span className="badge__char">E</span>
                  <span className="badge__char">X</span>
                  <span className="badge__char">E</span>
                  <span className="badge__char">C</span>
                  <span className="badge__char">U</span>
                  <span className="badge__char">T</span>
                  <span className="badge__char">I</span>
                  <span className="badge__char">O</span>
                  <span className="badge__char">N</span>
                  <span className="badge__char">*</span>
                  <span className="badge__char">O</span>
                  <span className="badge__char">F</span>
                  <span className="badge__char" />
                  <span className="badge__char">C</span>
                  <span className="badge__char">R</span>
                  <span className="badge__char">E</span>
                  <span className="badge__char">A</span>
                  <span className="badge__char">T</span>
                  <span className="badge__char">I</span>
                  <span className="badge__char">V</span>
                  <span className="badge__char">I</span>
                  <span className="badge__char">T</span>
                  <span className="badge__char">Y</span>
                  <span className="badge__char">*</span>
                  <div className="inner-circle"></div>
                </div>
                <div className="half-circle-img-area">
                  <img
                    src="assets/img/home4/about-half-circle-img.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="about-coundown-area">
            <div className="row g-lg-4 gy-5">
              <div
                className="col-lg-3 col-md-6 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-countdown">
                  <div className="number">
                    <h2 className="counter">
                      <CountUp end={40} delay={5} />
                    </h2>
                  </div>
                  <div className="content">
                    <p>Project Completed</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-flex justify-content-center wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="single-countdown">
                  <div className="number">
                    <h2 className="counter">
                      <CountUp end={1} delay={5} />
                    </h2>
                    <span>K</span>
                  </div>
                  <div className="content">
                    <p>Awesome clients</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-flex justify-content-center wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="single-countdown">
                  <div className="number">
                    <h2 className="counter">
                      <CountUp end={4} delay={5} />
                    </h2>
                  </div>
                  <div className="content">
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-flex justify-content-center wow animate fadeInUp"
                data-wow-delay="800ms"
                data-wow-duration="1500ms"
              >
                <div className="single-countdown">
                  <div className="number">
                    <h2 className="counter">
                      <CountUp end={9} delay={5} />
                    </h2>
                  </div>
                  <div className="content">
                    <p>Awards Winning</p>
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

export default Home4About;

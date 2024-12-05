"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
gsap.registerPlugin(ScrollTrigger);
const Home2horizontalScroll = () => {
  const [deviceWidth, setDeviceWidth] = useState(null);

  useEffect(() => {
    const updateDeviceWidth = () => {
      setDeviceWidth(window.innerWidth);
    };

    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      updateDeviceWidth();

      // Add event listener to update device width on window resize
      window.addEventListener("resize", updateDeviceWidth);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", updateDeviceWidth);
      };
    }
  }, []); // Empty dependency array to run the effect only once on mount

  useEffect(() => {
    // Check if deviceWidth is greater than 1200
    if (deviceWidth > 1200) {
      var workflow_section_3 = document.querySelector(
        ".horizontal-scrolling-wrapper"
      );
      if (workflow_section_3) {
        let duration = 1,
          sections = gsap.utils.toArray(".single-scroll"),
          sectionIncrement = duration / (sections.length - 1),
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".horizontal-scrolling-wrapper",
              pin: true,
              scrub: 1,
              start: "-80px top",
              end: "+=5000",
            },
          });

        tl.to(sections, {
          xPercent: -100 * (sections.length - 1),
          duration: duration,
          ease: "none",
        });

        sections.forEach((section, index) => {
          let tween = gsap.from(section, {
            opacity: 0,
            scale: 1,
            duration: 0.5,
            force3D: true,
            paused: true,
          });
          addSectionCallbacks(tl, {
            start: sectionIncrement * (index - 0.99),
            end: sectionIncrement * (index + 0.99),
            onEnter: () => tween.play(),
            onLeave: () => tween.reverse(),
            onEnterBack: () => tween.play(),
            onLeaveBack: () => tween.reverse(),
          });
          index || tween.progress(1);
        });

        function addSectionCallbacks(
          timeline,
          { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }
        ) {
          let trackDirection = (animation) => {
              let onUpdate = animation.eventCallback("onUpdate"),
                prevTime = animation.time();
              animation.direction = animation.reversed() ? -1 : 1;
              animation.eventCallback("onUpdate", () => {
                let time = animation.time();
                if (prevTime !== time) {
                  animation.direction = time < prevTime ? -1 : 1;
                  prevTime = time;
                }
                onUpdate && onUpdate.call(animation);
              });
            },
            empty = (v) => v;
          timeline.direction || trackDirection(timeline);
          start >= 0 &&
            timeline.add(
              () =>
                ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(
                  param
                ),
              start
            );
          end <= timeline.duration() &&
            timeline.add(
              () =>
                ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(
                  param
                ),
              end
            );
        }
      }
    }
  }, [deviceWidth]); // Run this effect whenever deviceWidth changes

  // Rest of your component code

  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: ".home2-process-next",
        prevEl: ".home2-process-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);

  return (
    <>
      <div className="horizontal-scrolling-section mb-120">
        <div className="horizontal-scrolling-wrapper">
          {/* Start Home2 Process section */}
          <div className="home2-process-section single-scroll">
            <div className="container">
              <div
                className="section-title2 text-center wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                  >
                    <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                  </svg>
                  5 Step Process
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                  >
                    <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                  </svg>
                </span>
                <h2>Our Work Progress in Digital Mastery.</h2>
              </div>
            </div>
            <div className="container-fluid p-0">
              <div className="process-slider-area">
                <div className="row">
                  <div className="col-lg-12">
                    <Swiper
                      {...settings}
                      className="swiper home2-process-slider"
                    >
                      <div className="swiper-wrapper">
                        <SwiperSlide
                          className="swiper-slide wow animate fadeInDown"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="single-process">
                            <div className="step">
                              <div className="number">
                                <h6>Step</h6>
                                <span>01</span>
                              </div>
                            </div>
                            <div className="content">
                              <h4>Client Consultation</h4>
                              <p>
                                Sed accumsan sem cursus luctus porta. amem
                                Phasellu du enim, efficitur quis velit ac,
                                fringilla posuere leo fusci.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide
                          className="swiper-slide wow animate fadeInDown"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="single-process">
                            <div className="step">
                              <div className="number">
                                <h6>Step</h6>
                                <span>02</span>
                              </div>
                            </div>
                            <div className="content">
                              <h4>Strategy Development</h4>
                              <p>
                                Sed accumsan sem cursus luctus porta. amem
                                Phasellu du enim, efficitur quis velit ac,
                                fringilla posuere leo fusci.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide
                          className="swiper-slide wow animate fadeInDown"
                          data-wow-delay="600ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="single-process">
                            <div className="step">
                              <div className="number">
                                <h6>Step</h6>
                                <span>03</span>
                              </div>
                            </div>
                            <div className="content">
                              <h4>Market Research</h4>
                              <p>
                                Sed accumsan sem cursus luctus porta. amem
                                Phasellu du enim, efficitur quis velit ac,
                                fringilla posuere leo fusci.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide
                          className="swiper-slide wow animate fadeInDown"
                          data-wow-delay="800ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="single-process">
                            <div className="step">
                              <div className="number">
                                <h6>Step</h6>
                                <span>04</span>
                              </div>
                            </div>
                            <div className="content">
                              <h4>Campaign Planning</h4>
                              <p>
                                Sed accumsan sem cursus luctus porta. amem
                                Phasellu du enim, efficitur quis velit ac,
                                fringilla posuere leo fusci.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="single-process">
                            <div className="step">
                              <div className="number">
                                <h6>Step</h6>
                                <span>05</span>
                              </div>
                            </div>
                            <div className="content">
                              <h4>Campaign Planning</h4>
                              <p>
                                Sed accumsan sem cursus luctus porta. amem
                                Phasellu du enim, efficitur quis velit ac,
                                fringilla posuere leo fusci.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                    <div className="slider-btn-area">
                      <div className="slider-btn home2-process-prev">
                        <i className="bi bi-arrow-left" />
                      </div>
                      <div className="content">
                        <p>Our Marketing Challenge</p>
                      </div>
                      <div className="slider-btn home2-process-next">
                        <i className="bi bi-arrow-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Home2 Process section */}
          {/* Start Home2 Marketing Agency section */}
          <div className="home2-marketing-agency-section single-scroll">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 d-flex align-items-center justify-content-between">
                  <div className="graf-img">
                    <img
                      src="assets/img/home2/marketing-activity-graf-img.png"
                      alt=""
                      className="light"
                    />
                    <img
                      src="assets/img/home2/marketing-activity-graf-img-dark.png"
                      alt=""
                      className="dark"
                    />
                  </div>
                  <div className="marketing-agency-content">
                    <div
                      className="section-title2 text-center mb-70 wow animate fadeInDown"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={11}
                          viewBox="0 0 11 11"
                        >
                          <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                        </svg>
                        Marketing Agency Of The Year
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={11}
                          viewBox="0 0 11 11"
                        >
                          <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                        </svg>
                      </span>
                      <h2>
                        <span>Expert Great Things</span> <br />
                        From Your Marketing Agency
                      </h2>
                      <p>
                        Sed accumsan sem cursus luctus porta. amem Phasellu du
                        enim, efficitur quis velit ac, fringilla posuere leo
                        fusci.
                      </p>
                    </div>
                    <div className="nav-and-tab-area">
                      <div className="nav-area mb-70">
                        <span>Before</span>
                        <nav>
                          <div
                            className="nav nav-tabs"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              className="nav-link active"
                              id="before-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#before"
                              type="button"
                              role="tab"
                              aria-controls="before"
                              aria-selected="true"
                            />
                            <button
                              className="nav-link yearly"
                              id="after-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#after"
                              type="button"
                              role="tab"
                              aria-controls="after"
                              aria-selected="false"
                            />
                          </div>
                        </nav>
                        <span>After</span>
                      </div>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="before"
                          role="tabpanel"
                          aria-labelledby="before-tab"
                          tabIndex={0}
                        >
                          <ul className="counter-wrap">
                            <li className="single-countdown">
                              <div className="number">
                                <h5 className="counter">
                                  <CountUp end={40} delay={5} />
                                </h5>
                                <span>%</span>
                              </div>
                              <p>Average increase in sales for our clients.</p>
                            </li>
                            <li className="single-countdown">
                              <div className="number">
                                <h5 className="counter">
                                  <CountUp end={840} delay={5} />
                                </h5>
                              </div>
                              <p>Google and Facebook -certified team.</p>
                            </li>
                            <li className="single-countdown">
                              <div className="number">
                                <h5 className="counter">
                                  <CountUp end={90} delay={5} />
                                </h5>
                                <span>%</span>
                              </div>
                              <p>
                                Results improved compared to previous agencies.
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="after"
                          role="tabpanel"
                          aria-labelledby="after-tab"
                          tabIndex={0}
                        >
                          <ul className="counter-wrap">
                            <li className="single-countdown">
                              <div className="number">
                                <h5 className="counter">
                                  <CountUp end={55} delay={5} />
                                </h5>
                                <span>%</span>
                              </div>
                              <p>Average increase in sales for our clients.</p>
                            </li>
                            <li className="single-countdown">
                              <div className="number">
                                <h5 className="counter">
                                  <CountUp end={830} delay={5} />
                                </h5>
                              </div>
                              <p>Google and Facebook -certified team.</p>
                            </li>
                            <li className="single-countdown">
                              <div className="number">
                                <h5 className="counter">
                                  <CountUp end={90} delay={5} />
                                </h5>
                                <span>%</span>
                              </div>
                              <p>
                                Results improved compared to previous agencies.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="graf-img">
                    <img
                      src="assets/img/home2/marketing-performance-graf-img.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Home2 Marketing Agency section */}
        </div>
      </div>
    </>
  );
};

export default Home2horizontalScroll;

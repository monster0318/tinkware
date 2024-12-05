"use client";
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

const Home4Team = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      // autoplay: {
      // 	delay: 2500, // Autoplay duration in milliseconds
      // 	disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".home4-team-slider-next",
        prevEl: ".home4-team-slider-prev",
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
      <div className="home4-team-section mb-130">
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
                  Our Creative Team
                </span>
                <h2>The Artisans Behind</h2>
              </div>
              <div className="slider-btn-group2">
                <div className="slider-btn home4-team-slider-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={25}
                    viewBox="0 0 35 25"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.15411 11.8136C9.06541 10.0964 13.4251 6.61458 14.7922 0.289057L13.4457 0C11.6123 8.48324 3.84793 11.4138 0.135674 11.8136H0V13.1864H0.135674C3.84793 13.5862 11.6123 16.5168 13.4457 25L14.7922 24.711C13.4251 18.3854 9.06541 14.9036 5.15411 13.1864H35V11.8136H5.15411Z"
                    />
                  </svg>
                </div>
                <div className="slider-btn home4-team-slider-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={25}
                    viewBox="0 0 35 25"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.8459 11.8136C25.9346 10.0964 21.5749 6.61458 20.2078 0.289057L21.5543 0C23.3877 8.48324 31.1521 11.4138 34.8643 11.8136H35V13.1864H34.8643C31.1521 13.5862 23.3877 16.5168 21.5543 25L20.2078 24.711C21.5749 18.3854 25.9346 14.9036 29.8459 13.1864H0V11.8136H29.8459Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-50">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper home4-teams-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide
                    className="swiper-slide wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="teams-card">
                      <div className="card-img-wrap">
                        <div className="card-img">
                          <img
                            src="assets/img/home4/home4-teams-img1.png"
                            alt=""
                          />
                        </div>
                        <div className="overlay">
                          <div className="social-area">
                            <div className="social-list">
                              <a href="https://twitter.com/">
                                <i className="bi bi-twitter-x" />
                              </a>
                              <span>
                                {" "}
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.instagram.com/">
                                <i className="bi bi-instagram" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <h4>Cassian Coleson</h4>
                        <span>Founder at, Zenfy</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="swiper-slide wow animate fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="teams-card">
                      <div className="card-img-wrap">
                        <div className="card-img">
                          <img
                            src="assets/img/home4/home4-teams-img2.png"
                            alt=""
                          />
                        </div>
                        <div className="overlay">
                          <div className="social-area">
                            <div className="social-list">
                              <a href="https://twitter.com/">
                                <i className="bi bi-twitter-x" />
                              </a>
                              <span>
                                {" "}
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.instagram.com/">
                                <i className="bi bi-instagram" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <h4>Maverick Dylan</h4>
                        <span>Web Designer</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="swiper-slide wow animate fadeInUp"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="teams-card">
                      <div className="card-img-wrap">
                        <div className="card-img">
                          <img
                            src="assets/img/home4/home4-teams-img3.png"
                            alt=""
                          />
                        </div>
                        <div className="overlay">
                          <div className="social-area">
                            <div className="social-list">
                              <a href="https://twitter.com/">
                                <i className="bi bi-twitter-x" />
                              </a>
                              <span>
                                {" "}
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.instagram.com/">
                                <i className="bi bi-instagram" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <h4>Anthony Thomas</h4>
                        <span>Software Developer</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="swiper-slide wow animate fadeInUp"
                    data-wow-delay="800ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="teams-card">
                      <div className="card-img-wrap">
                        <div className="card-img">
                          <img
                            src="assets/img/home4/home4-teams-img4.png"
                            alt=""
                          />
                        </div>
                        <div className="overlay">
                          <div className="social-area">
                            <div className="social-list">
                              <a href="https://twitter.com/">
                                <i className="bi bi-twitter-x" />
                              </a>
                              <span>
                                {" "}
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.instagram.com/">
                                <i className="bi bi-instagram" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <h4>Christopher Nathan</h4>
                        <span>Graphic designer</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="teams-card">
                      <div className="card-img-wrap">
                        <div className="card-img">
                          <img
                            src="assets/img/home4/home4-teams-img5.png"
                            alt=""
                          />
                        </div>
                        <div className="overlay">
                          <div className="social-area">
                            <div className="social-list">
                              <a href="https://twitter.com/">
                                <i className="bi bi-twitter-x" />
                              </a>
                              <span>
                                {" "}
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.instagram.com/">
                                <i className="bi bi-instagram" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <h4>Thomas Robert</h4>
                        <span>Web Designer</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="teams-card">
                      <div className="card-img-wrap">
                        <div className="card-img">
                          <img
                            src="assets/img/home4/home4-teams-img6.png"
                            alt=""
                          />
                        </div>
                        <div className="overlay">
                          <div className="social-area">
                            <div className="social-list">
                              <a href="https://twitter.com/">
                                <i className="bi bi-twitter-x" />
                              </a>
                              <span>
                                {" "}
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.instagram.com/">
                                <i className="bi bi-instagram" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <h4>Daniel Scoot</h4>
                        <span>Software Developer</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="teams-card">
                      <div className="card-img-wrap">
                        <div className="card-img">
                          <img
                            src="assets/img/home4/home4-teams-img7.png"
                            alt=""
                          />
                        </div>
                        <div className="overlay">
                          <div className="social-area">
                            <div className="social-list">
                              <a href="https://twitter.com/">
                                <i className="bi bi-twitter-x" />
                              </a>
                              <span>
                                {" "}
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.instagram.com/">
                                <i className="bi bi-instagram" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                              <span>
                                <i className="bi bi-dot" />
                              </span>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <h4>Cris Mories</h4>
                        <span>Graphic designer</span>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <a href="#" className="details-button">
                Join Our Team
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home4Team;

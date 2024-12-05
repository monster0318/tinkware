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

const Home1Portfolio = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="portfolio-section mb-110">
        <div className="container">
          <div className="row mb-60">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div
                className="section-title wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <g>
                      <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                    </g>
                  </svg>
                  Visual Excellence
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <g>
                      <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                    </g>
                  </svg>
                </span>
                <h2>Our Creative Showcase</h2>
              </div>
              <Link
                href="/portfolio"
                className="primary-btn2 wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
                data-text="View All Portfolio"
              >
                <span>View All Portfolio</span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper portfolio-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card">
                      <div className="card-img">
                        <img
                          src="assets/img/home1/portfolio-img-01.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <Link
                          className="view-btn"
                          href="/portfolio/portfolio-details"
                        >
                          <img src="assets/img/home1/right-arrow.png" alt="" />
                        </Link>
                        <div className="catgory-and-title">
                          <Link href="/portfolio">Marketing</Link>
                          <h5>
                            <Link href="/portfolio/portfolio-details">
                              Management Consulting
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card">
                      <div className="card-img">
                        <img
                          src="assets/img/home1/portfolio-img-02.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <Link
                          className="view-btn"
                          href="/portfolio/portfolio-details"
                        >
                          <img src="assets/img/home1/right-arrow.png" alt="" />
                        </Link>
                        <div className="catgory-and-title">
                          <Link href="/portfolio">Resources</Link>
                          <h5>
                            <Link href="/portfolio/portfolio-details">
                              Human Resources Consulting
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card">
                      <div className="card-img">
                        <img
                          src="assets/img/home1/portfolio-img-03.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <Link
                          className="view-btn"
                          href="/portfolio/portfolio-details"
                        >
                          <img src="assets/img/home1/right-arrow.png" alt="" />
                        </Link>
                        <div className="catgory-and-title">
                          <Link href="/portfolio">Technology</Link>
                          <h5>
                            <Link href="/portfolio/portfolio-details">
                              IT Consulting
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card">
                      <div className="card-img">
                        <img
                          src="assets/img/home1/portfolio-img-04.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <Link
                          className="view-btn"
                          href="/portfolio/portfolio-details"
                        >
                          <img src="assets/img/home1/right-arrow.png" alt="" />
                        </Link>
                        <div className="catgory-and-title">
                          <Link href="/portfolio">Finance</Link>
                          <h5>
                            <Link href="/portfolio/portfolio-details">
                              Finance Consulting
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card">
                      <div className="card-img">
                        <img
                          src="assets/img/home1/portfolio-img-05.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <Link
                          className="view-btn"
                          href="/portfolio/portfolio-details"
                        >
                          <img src="assets/img/home1/right-arrow.png" alt="" />
                        </Link>
                        <div className="catgory-and-title">
                          <Link href="/portfolio">Consulting</Link>
                          <h5>
                            <Link href="/portfolio/portfolio-details">
                              Human Resources
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card">
                      <div className="card-img">
                        <img
                          src="assets/img/home1/portfolio-img-06.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <Link
                          className="view-btn"
                          href="/portfolio/portfolio-details"
                        >
                          <img src="assets/img/home1/right-arrow.png" alt="" />
                        </Link>
                        <div className="catgory-and-title">
                          <Link href="/portfolio">Health Care</Link>
                          <h5>
                            <Link href="/portfolio/portfolio-details">
                              Health Care Consult
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="portfolio-bottom-area">
          <div className="container-fluid">
            <div className="pagination-area">
              <div className="swiper-pagination pagination1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Portfolio;

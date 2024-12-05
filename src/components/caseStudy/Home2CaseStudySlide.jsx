"use client";
import React, { useMemo } from "react";

import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const Home2CaseStudySlide = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      // autoplay: {
      // 	delay: 2500, // Autoplay duration in milliseconds
      // 	disableOnInteraction: false,
      // },
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
      <div className="home2-case-study-section mb-110">
        <div className="container">
          <div className="row mb-60">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div
                className="section-title2 wow animate fadeInLeft"
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
                  Success Stories
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                  >
                    <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                  </svg>
                </span>
                <h2>Stories of Growth Triumph</h2>
              </div>
              <Link
                href="/case-study/case-study2"
                className="primary-btn2 wow animate fadeInRight"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                data-text="View All Stories"
              >
                <span>View All Stories</span>
              </Link>
            </div>
          </div>
          <div
            className="row wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-12">
              <Swiper
                {...settings}
                className="swiper home2-case-study-slider mb-50"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="case-study-card2">
                      <div className="card-img">
                        <img
                          src="assets/img/home2/case-study-img1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <h4>
                          <Link href="/case-study/case-study-details">
                            Beautico E-commerce Growth rate.{" "}
                          </Link>
                        </h4>
                        <div className="number">
                          <span>+</span>
                          <h5 className="counter">
                            <CountUp end={40} delay={5} />
                          </h5>
                          <span>%</span>
                        </div>
                        <ul className="tag-list">
                          <li>
                            <Link href="/case-study">Paid Search</Link>
                          </li>
                          <li>
                            <Link href="/case-study">Paid Social</Link>
                          </li>
                          <li>
                            <Link href="/case-study">SEO</Link>
                          </li>
                        </ul>
                        <Link
                          href="/case-study/case-study-details"
                          className="read-more-btn"
                        >
                          Read The Success Stories
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="case-study-card2">
                      <div className="card-img">
                        <img
                          src="assets/img/home2/case-study-img2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <h4>
                          <Link href="/case-study/case-study-details">
                            Goldmiths Corpo Engagement rates.
                          </Link>
                        </h4>
                        <div className="number">
                          <span>+</span>
                          <h5 className="counter">
                            <CountUp end={40} delay={5} />
                          </h5>
                          <span>%</span>
                        </div>
                        <ul className="tag-list">
                          <li>
                            <Link href="/case-study">Organic Social Meida</Link>
                          </li>
                          <li>
                            <Link href="/case-study">Paid Social</Link>
                          </li>
                          <li>
                            <Link href="/case-study">SEO</Link>
                          </li>
                        </ul>
                        <Link
                          href="/case-study/case-study-details"
                          className="read-more-btn"
                        >
                          Read The Success Stories
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="case-study-card2">
                      <div className="card-img">
                        <img
                          src="assets/img/home2/case-study-img3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <h4>
                          <Link href="/case-study/case-study-details">
                            Fashion E-commerce Growth rate.
                          </Link>
                        </h4>
                        <div className="number">
                          <span>+</span>
                          <h5 className="counter">
                            <CountUp end={40} delay={5} />
                          </h5>
                          <span>%</span>
                        </div>
                        <ul className="tag-list">
                          <li>
                            <Link href="/case-study">Paid Search</Link>
                          </li>
                          <li>
                            <Link href="/case-study">Paid Social</Link>
                          </li>
                          <li>
                            <Link href="/case-study">SEO</Link>
                          </li>
                        </ul>
                        <Link
                          href="/case-study/case-study-details"
                          className="read-more-btn"
                        >
                          Read The Success Stories
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="case-study-card2">
                      <div className="card-img">
                        <img
                          src="assets/img/home2/case-study-img4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <h4>
                          <Link href="/case-study/case-study-details">
                            Health E-commerce Success rate.{" "}
                          </Link>
                        </h4>
                        <div className="number">
                          <span>+</span>
                          <h5 className="counter">
                            <CountUp end={40} delay={5} />
                          </h5>
                          <span>%</span>
                        </div>
                        <ul className="tag-list">
                          <li>
                            <Link href="/case-study">Paid Search</Link>
                          </li>
                          <li>
                            <Link href="/case-study">Paid Social</Link>
                          </li>
                          <li>
                            <Link href="/case-study">SEO</Link>
                          </li>
                        </ul>
                        <Link
                          href="/case-study/case-study-details"
                          className="read-more-btn"
                        >
                          Read The Success Stories
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="case-study-card2">
                      <div className="card-img">
                        <img
                          src="assets/img/home2/case-study-img5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <h4>
                          <Link href="/case-study/case-study-details">
                            Travel &amp; Tour Agency Growth rate.
                          </Link>
                        </h4>
                        <div className="number">
                          <span>+</span>
                          <h5 className="counter">
                            <CountUp end={30} delay={5} />
                          </h5>
                          <span>%</span>
                        </div>
                        <ul className="tag-list">
                          <li>
                            <Link href="/case-study">Organic Social Meida</Link>
                          </li>
                          <li>
                            <Link href="/case-study">Paid Social</Link>
                          </li>
                          <li>
                            <Link href="/case-study">SEO</Link>
                          </li>
                        </ul>
                        <Link
                          href="/case-study/case-study-details"
                          className="read-more-btn"
                        >
                          Read The Success Stories
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="case-study-card2">
                      <div className="card-img">
                        <img
                          src="assets/img/home2/case-study-img2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <h4>
                          <Link href="/case-study/case-study-details">
                            Goldmiths Corpo Engagement rates.
                          </Link>
                        </h4>
                        <div className="number">
                          <span>+</span>
                          <h5 className="counter">
                            <CountUp end={30} delay={5} />
                          </h5>
                          <span>%</span>
                        </div>
                        <ul className="tag-list">
                          <li>
                            <Link href="/case-study">Organic Social Meida</Link>
                          </li>
                          <li>
                            <Link href="/case-study">Paid Social</Link>
                          </li>
                          <li>
                            <Link href="/case-study">SEO</Link>
                          </li>
                        </ul>
                        <Link
                          href="/case-study/case-study-details"
                          className="read-more-btn"
                        >
                          Read The Success Stories
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="pagination-area">
                <div className="swiper-pagination pagination1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2CaseStudySlide;

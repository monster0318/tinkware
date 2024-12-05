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

const Home3Testimonial = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 30,
      // autoplay: {
      // 	delay: 2500, // Autoplay duration in milliseconds
      // 	disableOnInteraction: false,
      // },
      pagination: {
        el: ".franctional-pagi2",
        type: "fraction",
      },
      navigation: {
        nextEl: ".home3-testimonial-next",
        prevEl: ".home3-testimonial-prev",
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
          slidesPerView: 2,
          spaceBetween: 20,
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
      <div className="home3-testimonial-section mb-110">
        <div className="container-fluid">
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8">
              <div
                className="section-title text-center wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
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
                  Voices of Confidence
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
                </span>
                <h2>Hear What Our Clients Say</h2>
                <p>
                  Welcome to Zenfy, where digital innovation meets strategic
                  excellence. As a dynamic force in the realm of digital
                  marketing, we are dedicated to propelling businesses into the
                  spotlight of online success.
                </p>
              </div>
            </div>
          </div>
          <div
            className="testimonial-wrap wow animate fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  {...settings}
                  className="swiper home3-testimonial-slider"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="assets/img/home2/testi-author-05.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6>Luke Julian</h6>
                            <span>CEO At astra.com</span>
                          </div>
                        </div>
                        <p>
                          “Integer purus odio, placerat nec rhoncus in, going
                          tour of ulamcorper necless dolor. and utor offer tha
                          wegon poort himenaeos. Praesent necles neque att dolor
                          venenatis Donec lacinia placerat.”
                        </p>
                        <div className="logo-and-rating">
                          <div className="logo">
                            <img
                              src="assets/img/home3/icon/google-logo.svg"
                              alt=""
                            />
                          </div>
                          <ul className="rating">
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="assets/img/home2/testi-author-01.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6>David Beckham</h6>
                            <span>CEO At astra.com</span>
                          </div>
                        </div>
                        <p>
                          “Integer purus odio, placerat nec rhoncus in, going
                          tour of ulamcorper necless dolor. and utor offer tha
                          wegon poort himenaeos. Praesent necles neque att dolor
                          venenatis Donec lacinia placerat.”
                        </p>
                        <div className="logo-and-rating">
                          <div className="logo">
                            <img
                              src="assets/img/home3/icon/google-logo.svg"
                              alt=""
                            />
                          </div>
                          <ul className="rating">
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="assets/img/home2/testi-author-02.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6>Daniel Scoot</h6>
                            <span>CEO At astra.com</span>
                          </div>
                        </div>
                        <p>
                          “Integer purus odio, placerat nec rhoncus in, going
                          tour of ulamcorper necless dolor. and utor offer tha
                          wegon poort himenaeos. Praesent necles neque att dolor
                          venenatis Donec lacinia placerat.”
                        </p>
                        <div className="logo-and-rating">
                          <div className="logo">
                            <img
                              src="assets/img/home3/icon/google-logo.svg"
                              alt=""
                            />
                          </div>
                          <ul className="rating">
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="assets/img/home2/testi-author-03.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6>Flurance Miyagi</h6>
                            <span>CEO At astra.com</span>
                          </div>
                        </div>
                        <p>
                          “Integer purus odio, placerat nec rhoncus in, going
                          tour of ulamcorper necless dolor. and utor offer tha
                          wegon poort himenaeos. Praesent necles neque att dolor
                          venenatis Donec lacinia placerat.”
                        </p>
                        <div className="logo-and-rating">
                          <div className="logo">
                            <img
                              src="assets/img/home3/icon/google-logo.svg"
                              alt=""
                            />
                          </div>
                          <ul className="rating">
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="assets/img/home2/testi-author-04.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6>Thomas Robert</h6>
                            <span>CEO At astra.com</span>
                          </div>
                        </div>
                        <p>
                          “Integer purus odio, placerat nec rhoncus in, going
                          tour of ulamcorper necless dolor. and utor offer tha
                          wegon poort himenaeos. Praesent necles neque att dolor
                          venenatis Donec lacinia placerat.”
                        </p>
                        <div className="logo-and-rating">
                          <div className="logo">
                            <img
                              src="assets/img/home3/icon/google-logo.svg"
                              alt=""
                            />
                          </div>
                          <ul className="rating">
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="row justify-content-end wow animate fadeInUp"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="col-md-6">
              <div className="slider-btn-and-pagination-wrap">
                <div className="franctional-pagi2" />
                <div className="slider-btn-group">
                  <div className="slider-btn home3-testimonial-prev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={11}
                      viewBox="0 0 15 11"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                      />
                    </svg>
                  </div>
                  <div className="slider-btn home3-testimonial-next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={11}
                      viewBox="0 0 15 11"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                      />
                    </svg>
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

export default Home3Testimonial;

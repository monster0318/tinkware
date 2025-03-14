"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home1Testimonial = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".case-study-slider-next",
        prevEl: ".case-study-slider-prev",
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
          slidesPerView: 1,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 1,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home1-testimonial-section two mb-110 ">
        <div className="container-fluid">
          <div className="row g-lg-4 gy-5">
            <div
              className="col-lg-5 d-flex align-items-center wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="testimonial-content">
                <div className="section-title">
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
                    Client feedback
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
                  <h2>Happy Client Stories</h2>
                  <p>
                    These voices echo the confidence and satisfaction of clients
                    who've witnessed firsthand the impact of our solutions. At {process.env.NEXT_PUBLIC_COMPANY_NAME},
                    our clients aren't just partners.
                  </p>
                </div>
                <ul className="rating-area">
                  <li>
                    <a href="https://clutch.co" className="single-rating">
                      <div className="review">
                        <span>Review On</span>
                        <img
                          className="logo-dark"
                          src="assets/img/home1/icon/clutch-logo.svg"
                          alt=""
                        />
                        <img
                          className="logo-light"
                          src="assets/img/home1/icon/clutch-logo-white.svg"
                          alt=""
                        />
                      </div>
                      <div className="rating">
                        <ul className="star">
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
                            <i className="bi bi-star-half" />
                          </li>
                        </ul>
                        <span>(50 reviews)</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/"
                      className="single-rating google"
                    >
                      <div className="review">
                        <span>Review On</span>
                        <img
                          src="assets/img/home1/icon/google-logo.svg"
                          alt=""
                        />
                      </div>
                      <div className="rating">
                        <ul className="star">
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
                            <i className="bi bi-star-half" />
                          </li>
                        </ul>
                        <span>(50 reviews)</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-7 wow animate fadeInRight"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="tetimonial-slider-wrapper">
                <Swiper
                  {...settings}
                  className="swiper home1-testimonial-slider"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3 style-2">
                        <span>Great Digital Marketing!</span>
                        <p>
                          “We were struggling with growing our brand and reaching the right customers. TinkWare totally changed that. They helped us build smarter marketing strategies that actually worked. We saw a big uptick in our customer base and engagement right after teaming up with them. They really know how to make tech work for marketing. 10/10 would recommend.”
                        </p>
                        <div className="author-and-logo-area">
                          <div className="author-area">
                            <div className="author-img">
                              <img
                                src="assets/img/testimonial/t-1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <h6>Rick Schultz</h6>
                              <span>Marketing Director At Databricks</span>
                            </div>
                          </div>
                          <div className="logo">
                            <img
                              src="assets/img/home1/icon/testimonial-card-logo1.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3 style-2">
                        <span>Great Consulting!</span>
                        <p>
                          “I've worked with TinkWare on multiple software development projects, and they consistently deliver high-quality results that exceed our expectations. Their team of experienced professionals brings innovative ideas and cutting-edge technology to every project, making them an invaluable partner for our company.”
                        </p>
                        <div className="author-and-logo-area">
                          <div className="author-area">
                            <div className="author-img">
                              <img
                                src="assets/img/testimonial/t-2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <h6>Aidan Gomez</h6>
                              <span>CEO At Cohere</span>
                            </div>
                          </div>
                          <div className="logo">
                            <img
                              src="assets/img/home1/icon/testimonial-card-logo2.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3 style-2">
                        <span>Great Digital Marketing!</span>
                        <p>
                          “TinkWare's software development expertise has played a pivotal role in enhancing our marketing automation capabilities and enabling us to deliver personalized experiences to our customers. Their ability to quickly understand our business needs, propose effective solutions, and execute them flawlessly has made them an indispensable partner in our marketing technology strategy.”
                        </p>
                        <div className="author-and-logo-area">
                          <div className="author-area">
                            <div className="author-img">
                              <img
                                src="assets/img/testimonial/t-3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <h6>Sachin Rajendra</h6>
                              <span>COO At FlyFin</span>
                            </div>
                          </div>
                          <div className="logo">
                            <img
                              src="assets/img/home1/icon/testimonial-card-logo3.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3 style-2">
                        <span>Great Consulting!</span>
                        <p>
                          “TinkWare has provided us with top-notch software consulting services, helping us identify areas of improvement and optimize our technology stack for maximum efficiency. Their team has excellent communication skills, a deep understanding of industry best practices, and a strong commitment to delivering results that drive real business value.”
                        </p>
                        <div className="author-and-logo-area">
                          <div className="author-area">
                            <div className="author-img">
                              <img
                                src="assets/img/testimonial/t-4.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <h6>Wade Green</h6>
                              <span>Engineering Manager At Overjet</span>
                            </div>
                          </div>
                          <div className="logo">
                            <img
                              src="assets/img/home1/icon/testimonial-card-logo4.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Testimonial;
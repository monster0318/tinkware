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

const Home4Testimonial = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 4000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },
    };
  }, []);
  return (
    <>
      <div className="home4-testimonial-section mb-130">
        <div className="container">
          <div
            className="section-title-area wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="row mb-60">
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
                    Client Testimonial
                  </span>
                  <h2>
                    We would love to Our Client about{" "}
                    <span>Voices of Trust.</span>
                  </h2>
                </div>
                <Link href="/contact" className="button-area d-xl-none d-flex">
                  <span className="details-button">
                    Become a Client
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-11 col-xl-9">
              <div className="testimonial-wrap">
                <Swiper
                  {...settings}
                  className="swiper home2-testimonial-slider wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card2">
                        <div className="author-img">
                          <img
                            src="assets/img/home4/testi-author-01.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <span>Great Digital Marketing!</span>
                          <p>
                            Feel free to customize the key features based on the
                            services and strategies you offer in each plan. This
                            breakdown helps potential clients understand the
                            specific value they'll receive at each pricing tier.
                          </p>
                          <div className="author-name-desig">
                            <div className="content">
                              <h6>Mrs. Flurance Miyagi</h6>
                              <span>Froxio, CEO</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card2">
                        <div className="author-img">
                          <img
                            src="assets/img/home4/testi-author-02.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <span>Great Digital Marketing!</span>
                          <p>
                            You can adjust the length and style of the line to
                            match the overall design and formatting of your
                            document. Some other divider options include dashes,
                            stars, or even a graphical element.
                          </p>
                          <div className="author-name-desig">
                            <div className="content">
                              <h6>Dani Alves</h6>
                              <span>Nurio, CEO</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card2">
                        <div className="author-img">
                          <img
                            src="assets/img/home4/testi-author-03.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <span>Great Digital Marketing!</span>
                          <p>
                            The information you might include in a Managing
                            Director's profile or information list typically
                            consists of the individual's background, experience,
                            and responsibilities within a company.
                          </p>
                          <div className="author-name-desig">
                            <div className="content">
                              <h6>Mr. Daniel Scoot</h6>
                              <span>Froxio, CEO</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card2">
                        <div className="author-img">
                          <img
                            src="assets/img/home4/testi-author-04.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <span>Great Digital Marketing!</span>
                          <p>
                            The specific services offered by business
                            consultants can vary widely depending on the
                            consultant's expertise and the needs of the client.
                            Consultants typically work closely with their
                            clients.
                          </p>
                          <div className="author-name-desig">
                            <div className="content">
                              <h6>Mr. Thomas Robert</h6>
                              <span>Maxcrio, HR</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div className="slider-btn-area">
                  <span className="dash" />
                  <div className="slider-btn-group w-100">
                    <div className="slider-btn prev-2">
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
                    <div className="slider-btn next-2">
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
        <a
          href="#"
          className="button-area wow animate zoomIn"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <span className="details-button">
            Become a Client
            <svg viewBox="0 0 13 20">
              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
            </svg>
          </span>
        </a>
      </div>
    </>
  );
};

export default Home4Testimonial;

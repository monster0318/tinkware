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

const Home5Workprocess = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
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
      <div className="home2-process-section two mb-120">
        <div className="container">
          <div
            className="section-title5 text-center mb-70 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <span className="sub-title5 two">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
              >
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
              </svg>
              Working Process
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
              >
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
              </svg>
            </span>
            <h2>
              Bringing the best IT <span> Vendors To You.</span>
            </h2>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="process-slider-area">
            <div className="row">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper home2-process-slider">
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
                            Sed accumsan sem cursus luctus porta. amem Phasellu
                            du enim, efficitur quis velit ac, fringilla posuere
                            leo fusci.
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
                            Sed accumsan sem cursus luctus porta. amem Phasellu
                            du enim, efficitur quis velit ac, fringilla posuere
                            leo fusci.
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
                            Sed accumsan sem cursus luctus porta. amem Phasellu
                            du enim, efficitur quis velit ac, fringilla posuere
                            leo fusci.
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
                            Sed accumsan sem cursus luctus porta. amem Phasellu
                            du enim, efficitur quis velit ac, fringilla posuere
                            leo fusci.
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
                            Sed accumsan sem cursus luctus porta. amem Phasellu
                            du enim, efficitur quis velit ac, fringilla posuere
                            leo fusci.
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
                    <p>Overcome the IT Challenges</p>
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
    </>
  );
};

export default Home5Workprocess;

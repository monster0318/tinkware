"use client";
import ModalVideo from "react-modal-video";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home1Banner = () => {
  const [isOpen, setOpen] = useState(false);
  const settings = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 2500,
      spaceBetween: 25,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".home1-banner-next",
        prevEl: ".home1-banner-prev",
      },
    };
  }, []);
  useEffect(() => {
    const element = document.querySelectorAll(".badge__char");
    const step = 360 / element.length;

    element.forEach((elem, i) => {
      elem.style.setProperty("--char-rotate", i * step + "deg");
    });
  }, []);
  return (
    <>
      <div className="home1-banner-section">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-xxl-start align-items-center">
              <div className="banner-content">
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
                  Expertise You Can Trust
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
                <h1>Empowering your brand in the digital universe </h1>
                <p>
                  Join us as we carve a path to success, driven by passion,
                  powered by innovation, and fueled by the collective spirit of
                  our team. we believe in the power of bold ideas, and we're
                  here to turn them into reality.{" "}
                </p>
                <div className="banner-content-bottom">
                  <Link
                    href="/contact"
                    className="primary-btn1"
                    data-text="Free Consultation"
                  >
                    <span>Free Consultation</span>
                  </Link>
                  <a href="https://clutch.co" className="rating-area">
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
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img-wrap">
                <Swiper {...settings} className="swiper banner-img-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/home1/banner-img1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/home1/banner-img2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/home1/banner-img3.jpg" alt="" />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="video-area">
          <div className="badge">
            <span className="badge__char">S</span>
            <span className="badge__char">T</span>
            <span className="badge__char">R</span>
            <span className="badge__char">A</span>
            <span className="badge__char">T</span>
            <span className="badge__char">E</span>
            <span className="badge__char">G</span>
            <span className="badge__char">Y</span>
            <span className="badge__char">.</span>
            <span className="badge__char">D</span>
            <span className="badge__char">E</span>
            <span className="badge__char">S</span>
            <span className="badge__char">I</span>
            <span className="badge__char">G</span>
            <span className="badge__char">N</span>
            <span className="badge__char">.</span>
            <span className="badge__char">S</span>
            <span className="badge__char">C</span>
            <span className="badge__char">A</span>
            <span className="badge__char">L</span>
            <span className="badge__char">E</span>
            <span className="badge__char">.</span>
            <div className="play">
              <a
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
                className="play-icon video1"
              >
                <i className="bi bi-play-fill" />
              </a>
            </div>
          </div>
        </div>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            onClick={() => setOpen(true)}
            isOpen={isOpen}
            animationSpeed="350"
            videoId="r4KpWiK08vM"
            ratio="16:9"
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </div>
    </>
  );
};

export default Home1Banner;

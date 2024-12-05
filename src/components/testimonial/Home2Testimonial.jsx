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

const Home2Testimonial = () => {
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
      <div className="home2-testimonial-section mb-110">
        <div className="row g-0">
          <div className="col-lg-5">
            <div className="testimonial-content">
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
                  Glowing Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                  >
                    <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                  </svg>
                </span>
                <h2>They Say About Us</h2>
                <p>
                  Sed accumsan sem cursus luctus porta. amem Phasellu du enim,
                  efficitur quis velit ac, fringilla posuere leo fusci
                  ullamcorper id porent gone this way.
                </p>
              </div>
              <div
                className="bottom-area wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                  >
                    <path d="M33.4778 2.58887H2.52211C1.44162 2.58887 0.5625 3.46798 0.5625 4.54848V27.3271C0.5625 28.4077 1.44162 29.2868 2.52211 29.2868H12.3782V32.8485C12.3782 32.9977 12.4374 33.1407 12.5429 33.2462C12.6484 33.3517 12.7915 33.411 12.9407 33.411H15.4517C15.6009 33.411 15.744 33.3517 15.8495 33.2462C15.955 33.1407 16.0142 32.9977 16.0142 32.8485V29.2868H17.7266V32.8485C17.7266 32.9977 17.7859 33.1407 17.8914 33.2462C17.9969 33.3517 18.1399 33.411 18.2891 33.411H20.8003C20.9494 33.411 21.0925 33.3517 21.198 33.2462C21.3035 33.1407 21.3628 32.9977 21.3628 32.8485V29.2868H23.0751V32.8485C23.0751 32.9977 23.1343 33.1407 23.2398 33.2462C23.3453 33.3517 23.4884 33.411 23.6376 33.411H26.1488C26.298 33.411 26.4411 33.3517 26.5465 33.2462C26.652 33.1407 26.7113 32.9977 26.7113 32.8485V29.2868H28.4237V32.8485C28.4237 32.9977 28.483 33.1407 28.5884 33.2462C28.6939 33.3517 28.837 33.411 28.9862 33.411H31.4973C31.6464 33.411 31.7895 33.3517 31.895 33.2462C32.0005 33.1407 32.0598 32.9977 32.0598 32.8485V29.2868H33.478C34.5585 29.2868 35.4376 28.4077 35.4376 27.3271V4.54848C35.4375 3.46798 34.5584 2.58887 33.4778 2.58887ZM2.52211 3.71387H33.4778C33.9381 3.71387 34.3125 4.08828 34.3125 4.54848V7.90245H1.6875V4.54848C1.6875 4.08835 2.06191 3.71387 2.52211 3.71387ZM14.8892 32.2861H13.5032V28.5936H14.8892V32.2861ZM20.2377 32.2861H18.8516V24.357H20.2377V32.2861ZM25.5862 32.2861H24.2V26.0696H25.5862V32.2861ZM30.9346 32.2861H29.5485V21.063H30.9346V32.2861ZM33.4778 28.1618H32.0596V20.5005C32.0596 20.3513 32.0004 20.2082 31.8949 20.1027C31.7894 19.9972 31.6463 19.938 31.4971 19.938H28.986C28.8369 19.938 28.6938 19.9972 28.5883 20.1027C28.4828 20.2082 28.4235 20.3513 28.4235 20.5005V28.1618H26.7112V25.507C26.7112 25.3578 26.6519 25.2148 26.5464 25.1093C26.4409 25.0038 26.2978 24.9445 26.1487 24.9445H23.6374C23.4883 24.9445 23.3452 25.0038 23.2397 25.1093C23.1342 25.2148 23.0749 25.3578 23.0749 25.507V28.1618H21.3626V23.7945C21.3626 23.6453 21.3034 23.5022 21.1979 23.3967C21.0924 23.2912 20.9493 23.232 20.8001 23.232H18.289C18.1398 23.232 17.9967 23.2912 17.8912 23.3967C17.7857 23.5022 17.7265 23.6453 17.7265 23.7945V28.1618H16.0141V28.0311C16.0141 27.8819 15.9548 27.7388 15.8493 27.6333C15.7439 27.5279 15.6008 27.4686 15.4516 27.4686H12.9405C12.7913 27.4686 12.6483 27.5279 12.5428 27.6333C12.4373 27.7388 12.378 27.8819 12.378 28.0311V28.1618H2.52211C2.06191 28.1618 1.6875 27.7874 1.6875 27.3271V9.02752H34.3125V27.3272C34.3125 27.7874 33.9381 28.1618 33.4778 28.1618ZM4.78941 5.8082C4.78941 5.35721 5.15496 4.99166 5.60595 4.99166C6.05693 4.99166 6.42248 5.35721 6.42248 5.8082C6.42248 6.25918 6.05693 6.62473 5.60595 6.62473C5.15496 6.62473 4.78941 6.25918 4.78941 5.8082ZM11.0582 5.8082C11.0582 5.35721 11.4237 4.99166 11.8747 4.99166C12.3257 4.99166 12.6913 5.35721 12.6913 5.8082C12.6913 6.25918 12.3257 6.62473 11.8747 6.62473C11.4237 6.62473 11.0582 6.25918 11.0582 5.8082ZM7.9238 5.8082C7.9238 5.35721 8.28935 4.99166 8.74034 4.99166C9.19132 4.99166 9.55688 5.35721 9.55688 5.8082C9.55688 6.25918 9.19132 6.62473 8.74034 6.62473C8.28935 6.62473 7.9238 6.25918 7.9238 5.8082ZM30.1783 16.6381C30.2313 16.7023 30.2694 16.7775 30.2898 16.8583C30.3102 16.939 30.3123 17.0233 30.2962 17.105L29.9087 19.0653C29.8834 19.193 29.8147 19.308 29.7142 19.3907C29.6137 19.4734 29.4877 19.5187 29.3575 19.5189C29.3207 19.5189 29.2839 19.5152 29.2478 19.5081C29.1754 19.4938 29.1064 19.4653 29.0449 19.4244C28.9835 19.3834 28.9307 19.3308 28.8896 19.2694C28.8484 19.208 28.8198 19.1392 28.8053 19.0668C28.7908 18.9943 28.7907 18.9198 28.8051 18.8473L28.862 18.5593L25.2717 21.8256C25.1918 21.8983 25.0927 21.9464 24.9862 21.9643C24.8796 21.9821 24.7702 21.969 24.671 21.9263L19.6237 19.7559L14.5363 23.6187C14.4387 23.6931 14.3193 23.7334 14.1966 23.7332C14.0788 23.7333 13.9639 23.6964 13.8682 23.6277C13.7725 23.559 13.7008 23.462 13.6632 23.3504C13.6255 23.2388 13.6239 23.1182 13.6585 23.0055C13.6931 22.8929 13.7622 22.794 13.856 22.7228L19.2044 18.6617C19.2836 18.6015 19.3775 18.5634 19.4763 18.5513C19.5751 18.5392 19.6753 18.5535 19.7667 18.5928L24.7826 20.7497L28.2843 17.564L27.7482 17.5659H27.7461C27.5969 17.5662 27.4537 17.5072 27.348 17.4019C27.2424 17.2966 27.1829 17.1536 27.1826 17.0044C27.1823 16.8552 27.2414 16.712 27.3467 16.6064C27.452 16.5007 27.5949 16.4412 27.7441 16.4409L29.7423 16.4336H29.7444C29.8273 16.4335 29.9092 16.4518 29.9843 16.4872C30.0593 16.5225 30.1256 16.5741 30.1783 16.6381ZM14.8839 19.7885C14.9367 19.7298 14.9765 19.6607 15.0007 19.5856C15.025 19.5105 15.0332 19.4311 15.0248 19.3526C14.9781 18.9128 14.8589 18.4836 14.6721 18.0826H18.6078C18.6867 18.0826 18.7647 18.066 18.8368 18.0339C18.9089 18.0018 18.9734 17.9548 19.0261 17.8961C19.0789 17.8374 19.1187 17.7683 19.143 17.6932C19.1672 17.6181 19.1754 17.5388 19.167 17.4603C19.0132 16.0221 18.1156 14.8342 16.88 14.2579C17.2562 13.8475 17.4862 13.3011 17.4862 12.7018C17.4862 11.4308 16.4521 10.3967 15.1811 10.3967C13.91 10.3967 12.8759 11.4308 12.8759 12.7018C12.8759 12.9182 12.9066 13.1274 12.9625 13.3261C12.5496 12.7018 11.8417 12.289 11.0388 12.289C10.2359 12.289 9.52791 12.7019 9.11503 13.3263C9.17246 13.1231 9.20161 12.913 9.20166 12.7018C9.20166 11.4308 8.16757 10.3967 6.89653 10.3967C5.62549 10.3967 4.59141 11.4308 4.59141 12.7018C4.59141 13.3011 4.8214 13.8475 5.19764 14.2579C3.96197 14.8342 3.06443 16.0222 2.91052 17.4604C2.90208 17.5389 2.91025 17.6182 2.93452 17.6933C2.95878 17.7684 2.99858 17.8376 3.05134 17.8963C3.10409 17.955 3.16862 18.0019 3.24071 18.0341C3.31281 18.0662 3.39086 18.0828 3.46978 18.0827H7.40545C7.21865 18.4837 7.09947 18.9128 7.05277 19.3527C7.04433 19.4312 7.0525 19.5105 7.07677 19.5856C7.10103 19.6608 7.14083 19.7299 7.19359 19.7886C7.24634 19.8473 7.31087 19.8943 7.38296 19.9264C7.45506 19.9585 7.53311 19.9751 7.61203 19.975H14.4656C14.5445 19.975 14.6225 19.9584 14.6946 19.9262C14.7666 19.8941 14.8311 19.8472 14.8839 19.7885ZM17.9117 16.9576H13.8864C13.5823 16.651 13.2306 16.3956 12.8449 16.2014C13.3808 15.462 14.246 15.0069 15.181 15.0069C16.441 15.0069 17.523 15.8111 17.9117 16.9576ZM15.181 11.5216C15.8318 11.5216 16.3612 12.051 16.3612 12.7017C16.3612 13.3524 15.8318 13.8818 15.181 13.8818C14.5303 13.8818 14.0008 13.3524 14.0008 12.7017C14.0008 12.051 14.5303 11.5216 15.181 11.5216ZM13.484 14.26C13.4318 14.2844 13.3803 14.3102 13.3292 14.3369C13.3153 14.2128 13.2913 14.09 13.2574 13.9699C13.3251 14.0724 13.4009 14.1694 13.484 14.26ZM11.0387 13.4139C11.6895 13.4139 12.2189 13.9433 12.2189 14.594C12.2189 15.2444 11.69 15.7737 11.0396 15.7741H11.0378C10.3875 15.7737 9.85859 15.2444 9.85859 14.594C9.85859 13.9434 10.388 13.4139 11.0387 13.4139ZM8.74828 14.3369C8.6972 14.3102 8.64556 14.2845 8.59338 14.26C8.67659 14.1694 8.75246 14.0723 8.82028 13.9696C8.78629 14.0899 8.76221 14.2127 8.74828 14.3369ZM5.71634 12.7017C5.71634 12.051 6.24572 11.5216 6.89646 11.5216C7.5472 11.5216 8.07659 12.051 8.07659 12.7017C8.07659 13.3524 7.5472 13.8818 6.89646 13.8818C6.24572 13.8818 5.71634 13.3524 5.71634 12.7017ZM4.16573 16.9576C4.55442 15.8111 5.63639 15.0069 6.89646 15.0069C7.83141 15.0069 8.69667 15.462 9.23252 16.2014C8.84683 16.3957 8.49511 16.6511 8.19098 16.9577H4.16573V16.9576ZM8.30798 18.85C8.69653 17.7039 9.7778 16.8999 11.0372 16.8992H11.0401C12.2996 16.8999 13.3807 17.7039 13.7693 18.85H8.30798Z" />
                  </svg>
                </div>
                <div className="text">
                  <p>Average Traffic Increase for Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
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
                      <span>Great Digital Marketing!</span>
                      <p>
                        Feel free to customize the key features based on the
                        services and strategies you offer in each plan. This
                        breakdown helps potential clients understand the
                        specific value they'll receive at each pricing tier.
                      </p>
                      <div className="author-area">
                        <div className="author-img">
                          <img
                            src="assets/img/home2/testi-author-01.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>Mr. Daniel Scoot</h6>
                          <span>Froxio, CEO</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card2">
                      <span>Great Consulting!</span>
                      <p>
                        You can adjust the length and style of the line to match
                        the overall design and formatting of your document. Some
                        other divider options include dashes, stars, or even a
                        graphical element.
                      </p>
                      <div className="author-area">
                        <div className="author-img">
                          <img
                            src="assets/img/home2/testi-author-02.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>Dani Alves</h6>
                          <span>Nurio, CEO</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card2">
                      <span>Great Consulting!</span>
                      <p>
                        The information you might include in a Managing
                        Director's profile or information list typically
                        consists of the individual's background, experience, and
                        responsibilities within a company.
                      </p>
                      <div className="author-area">
                        <div className="author-img">
                          <img
                            src="assets/img/home2/testi-author-03.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>Mrs. Flurance Miyagi</h6>
                          <span>Froxio, CEO</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card2">
                      <span>Great Consulting!</span>
                      <p>
                        The specific services offered by business consultants
                        can vary widely depending on the consultant's expertise
                        and the needs of the client. Consultants typically work
                        closely with their clients.
                      </p>
                      <div className="author-area">
                        <div className="author-img">
                          <img
                            src="assets/img/home2/testi-author-04.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>Mr. Thomas Robert</h6>
                          <span>Maxcrio, HR</span>
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
              <ul
                className="rating-area wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
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
                      <img src="assets/img/home1/icon/google-logo.svg" alt="" />
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
        </div>
      </div>
    </>
  );
};

export default Home2Testimonial;

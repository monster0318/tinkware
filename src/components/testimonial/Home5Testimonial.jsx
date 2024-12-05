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

const Home5Testimonial = () => {
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
      <div className="home5-testimonial-section mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-70 d-flex flex-wrap gap-3 align-items-center justify-content-between">
              <div
                className="section-title5 wow animate fadeInLeft"
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
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z"></path>
                  </svg>
                  Client Testimonial
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z"></path>
                  </svg>
                </span>
                <h2>
                  Inspiring Words from <span>Clients of Us.</span>
                </h2>
              </div>
              <Link
                href="/contact"
                className="details-button wow animate fadeInRight"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                Become a Client
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="testimonial-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={112}
                  height={114}
                  viewBox="0 0 112 114"
                  fill="none"
                >
                  <path d="M74.8037 106.591L74.8051 106.59C75.1415 106.509 75.8358 106.226 76.7784 105.785C77.7041 105.351 78.8272 104.785 79.9983 104.166C82.3445 102.924 84.8576 101.482 86.3443 100.473L86.3448 100.472C90.2351 97.84 92.4185 96.0575 95.6965 92.7209L95.6976 92.7198C101.001 87.3543 104.644 81.8657 107.088 74.9965C109.536 68.1167 110.791 59.8288 111.282 48.8517L111.282 48.8498C111.434 45.7038 111.5 36.8782 111.456 27.1673L111.456 27.1672C111.423 19.5602 111.402 15.4594 111.342 13.1675C111.281 10.8322 111.175 10.4701 111.051 10.224L111.051 10.224L111.05 10.2224C110.572 9.2692 109.617 8.27413 108.61 7.72033C108.61 7.72023 108.609 7.72012 108.609 7.72001L107.826 7.29199L89.0313 7.29199C81.2978 7.29199 76.5331 7.30871 73.6148 7.35594C72.1548 7.37958 71.1637 7.41076 70.4965 7.45078C69.8071 7.49215 69.521 7.54108 69.4221 7.57541C68.9724 7.73438 68.4228 8.09396 67.9016 8.57167C67.3834 9.04659 66.9311 9.60377 66.6576 10.1207L66.234 10.9243L66.1688 29.8162L66.1688 29.8164L66.1656 30.8175C66.1347 40.6094 66.1194 45.4564 66.2692 48.0548C66.3467 49.4008 66.4667 50.0901 66.628 50.535C66.7703 50.9277 66.9468 51.1442 67.2503 51.5166C67.2746 51.5464 67.2997 51.5772 67.3257 51.6092L67.3257 51.6092L67.3307 51.6154C67.6245 51.9893 68.3688 52.5697 68.9518 52.8561L68.9518 52.8561L68.9581 52.8593L69.9887 53.3838L78.9032 53.3838L87.9376 53.3838L88.4376 53.3838L88.4376 53.8838L88.4376 55.5092C88.4376 59.1307 87.574 64.193 86.3346 67.9777L86.3345 67.9781C84.9273 72.2638 82.9922 75.7794 80.2417 78.8147C77.4937 81.8472 73.9503 84.3799 69.3531 86.7252C68.4753 87.1775 67.6105 87.6563 66.9193 88.0724C66.5732 88.2807 66.2747 88.471 66.0414 88.6326C65.7983 88.801 65.6558 88.9182 65.5973 88.9811L65.5974 88.9811L65.5917 88.987C64.7007 89.9136 64.3158 91.0579 64.4177 92.6371C64.4972 93.7676 64.749 94.4722 67.0618 99.3821L67.0619 99.3824C68.413 102.256 69.1945 103.842 69.8311 104.798C70.1437 105.268 70.4086 105.564 70.6726 105.78C70.9352 105.995 71.2182 106.147 71.593 106.303L71.5975 106.305C72.0283 106.49 72.6023 106.621 73.1967 106.673C73.7917 106.725 74.3685 106.696 74.8037 106.591Z" />
                  <path d="M43.1299 75.5255L43.1302 75.5246C44.5323 71.8799 45.7942 66.2902 46.5132 60.5019L46.5133 60.5009C47.4275 53.2558 47.5156 50.5475 47.5156 30.2822C47.5156 20.9386 47.5101 16.0638 47.4556 13.4236C47.4002 10.7452 47.2896 10.4559 47.1512 10.1742L47.1512 10.1742L47.1495 10.1705C46.6743 9.18315 45.8131 8.30019 44.7382 7.72221L44.7382 7.72221L44.7353 7.72065L43.9505 7.29199L25.0469 7.29199C15.6035 7.292 10.8541 7.29204 8.3405 7.35031C7.07949 7.37954 6.40593 7.42315 5.99189 7.48395C5.60851 7.54025 5.46338 7.60786 5.24578 7.71122L5.24439 7.71187C4.17121 8.21759 3.37204 9.00365 2.76128 10.142L2.75827 10.1478C2.66146 10.3354 2.60016 10.4542 2.54632 10.8036C2.4861 11.1943 2.44127 11.847 2.40842 13.0952C2.343 15.5814 2.32658 20.3265 2.29375 29.8152L2.29375 29.8162L2.29375 29.8164L2.2906 30.8175C2.2597 40.6094 2.2444 45.4564 2.3941 48.0548C2.47165 49.4008 2.59169 50.0901 2.75294 50.535C2.8953 50.9277 3.07171 51.1442 3.37525 51.5166C3.39954 51.5464 3.42466 51.5772 3.45063 51.6092L3.45068 51.6092L3.45562 51.6155C3.74945 51.9893 4.49374 52.5697 5.07676 52.8561L5.07679 52.8561L5.08304 52.8593L6.11367 53.3838L15.1375 53.3838L15.1753 53.3838C19.5936 53.3838 21.8863 53.3838 23.0706 53.4372C23.6423 53.463 24.0303 53.5022 24.2772 53.593C24.4162 53.6442 24.5789 53.7353 24.6838 53.9125C24.7813 54.0772 24.7813 54.2429 24.7813 54.3054L24.7813 54.3068C24.7813 56.0196 24.207 60.9744 23.7656 63.2204L23.7655 63.221C23.0797 66.6887 22.3455 68.9314 20.9063 72.0189L20.9061 72.0194C17.8288 78.6016 13.1391 83.017 5.25141 86.8851L5.25011 86.8857C3.23408 87.8671 2.10054 88.5795 1.45204 89.3517C0.83509 90.0863 0.620109 90.9229 0.609386 92.2939C0.609402 93.0301 0.61805 93.3712 0.909416 94.162C1.21953 95.0038 1.83493 96.3069 3.0771 98.9362C3.76405 100.379 4.46142 101.788 5.02991 102.889C5.31439 103.441 5.56535 103.913 5.76587 104.273C5.97188 104.644 6.10657 104.862 6.16611 104.939C7.53928 106.629 9.87577 107.066 12.4845 105.907C27.1058 99.4056 38.2193 88.3623 43.1299 75.5255Z" />
                </svg>
                <div
                  className="testimonial-img wow animate zoomIn"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <img src="assets/img/home5/testimonial-left-img.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
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
                        <div className="content">
                          <span>Great Digital Marketing!</span>
                          <p>
                            Feel free to customize the key features based on the
                            services and strategies you offer in each plan. This
                            breakdown helps potential clients understand the
                            specific value they'll receive at each pricing tier.
                          </p>
                          <div className="author-name-desig">
                            <div className="author-img">
                              <img
                                src="assets/img/home4/testi-author-01.png"
                                alt=""
                              />
                            </div>
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
                        <div className="content">
                          <span>Great Digital Marketing!</span>
                          <p>
                            You can adjust the length and style of the line to
                            match the overall design and formatting of your
                            document. Some other divider options include dashes,
                            stars, or even a graphical element.
                          </p>
                          <div className="author-name-desig">
                            <div className="author-img">
                              <img
                                src="assets/img/home4/testi-author-02.png"
                                alt=""
                              />
                            </div>
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
                        <div className="content">
                          <span>Great Digital Marketing!</span>
                          <p>
                            The information you might include in a Managing
                            Director's profile or information list typically
                            consists of the individual's background, experience,
                            and responsibilities within a company.
                          </p>
                          <div className="author-name-desig">
                            <div className="author-img">
                              <img
                                src="assets/img/home4/testi-author-03.png"
                                alt=""
                              />
                            </div>
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
                            <div className="author-img">
                              <img
                                src="assets/img/home4/testi-author-04.png"
                                alt=""
                              />
                            </div>
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
      </div>
    </>
  );
};

export default Home5Testimonial;

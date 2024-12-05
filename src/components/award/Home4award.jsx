"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const Home4award = () => {
  const followImageCursor = (event, serviceImgItem) => {
    const contentBox = serviceImgItem.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    serviceImgItem.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(20deg)`;
  };

  useEffect(() => {
    const serviceImgItems = document.querySelectorAll(
      ".sevices-wrap2 .single-services"
    );

    const handleMouseMove = (event) => {
      serviceImgItems.forEach((item) => {
        followImageCursor(event, item);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run the effect only once on mount
  return (
    <>
      <div className="home4-award-section mb-130">
        <div className="container-fluid">
          <div className="row g-lg-4 gy-5">
            <div
              className="col-lg-5 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title-wrap">
                <div className="section-title3 mb-40">
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
                    Our Award Time
                  </span>
                  <h2>
                    Celebrating Zenfy's <span>Award-Winning </span>Excellence.
                  </h2>
                </div>
                <Link href="/about" className="details-button">
                  About Us More
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </Link>
                <div className="vector">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.4993 24V0H12.4993V24H11.4993Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 12.499H0V11.499H24V12.499Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.4993 24V0H12.4993V24H11.4993Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 12.499H0V11.499H24V12.499Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.23291 23.0226L15.8334 0.617188L16.767 0.975552L8.16649 23.3809L7.23291 23.0226Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.0228 16.7675L0.617432 8.16698L0.975796 7.2334L23.3812 15.8339L23.0228 16.7675Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.44971 20.4344L19.8177 2.88184L20.549 3.56383L4.18106 21.1164L3.44971 20.4344Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.4346 20.5485L2.88208 4.18057L3.56408 3.44922L21.1166 19.8172L20.4346 20.5485Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.607178 15.8229L23.023 7.23145L23.381 8.16545L0.96516 16.7569L0.607178 15.8229Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8241 23.391L7.23267 0.975169L8.16667 0.617188L16.7581 23.033L15.8241 23.391Z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="sevices-wrap2">
                <div
                  className="single-services wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <span>2024</span>
                    <h5>Innovation Ignition Award</h5>
                    <p>Site Of The Day</p>
                  </div>
                  <Link className="explore-btn" href="/about">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.582 1.41649L0 14.9978L1.00217 16L14.5835 2.41795L14.5835 11.8086H16L16 0L4.1914 0V1.41649L13.582 1.41649Z"
                      />
                    </svg>
                  </Link>
                  <div className="services-img">
                    <img src="assets/img/home4/award-img1.jpg" alt="" />
                  </div>
                </div>
                <div
                  className="single-services wow animate fadeInDown"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <span>2024</span>
                    <h5>CSS Design Award</h5>
                    <p>Site Of The Month</p>
                  </div>
                  <Link className="explore-btn" href="/about">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.582 1.41649L0 14.9978L1.00217 16L14.5835 2.41795L14.5835 11.8086H16L16 0L4.1914 0V1.41649L13.582 1.41649Z"
                      />
                    </svg>
                  </Link>
                  <div className="services-img">
                    <img src="assets/img/home4/award-img2.jpg" alt="" />
                  </div>
                </div>
                <div
                  className="single-services wow animate fadeInDown"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <span>2024</span>
                    <h5>Masterpiece Maker</h5>
                    <p>Awards Jury 2024</p>
                  </div>
                  <Link className="explore-btn" href="/about">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.582 1.41649L0 14.9978L1.00217 16L14.5835 2.41795L14.5835 11.8086H16L16 0L4.1914 0V1.41649L13.582 1.41649Z"
                      />
                    </svg>
                  </Link>
                  <div className="services-img">
                    <img src="assets/img/home4/award-img3.jpg" alt="" />
                  </div>
                </div>
                <div
                  className="single-services wow animate fadeInDown"
                  data-wow-delay="800ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <span>2024</span>
                    <h5>Alchemy Achievement</h5>
                    <p>Site Of The Day</p>
                  </div>
                  <Link className="explore-btn" href="/about">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.582 1.41649L0 14.9978L1.00217 16L14.5835 2.41795L14.5835 11.8086H16L16 0L4.1914 0V1.41649L13.582 1.41649Z"
                      />
                    </svg>
                  </Link>
                  <div className="services-img">
                    <img src="assets/img/home4/award-img4.jpg" alt="" />
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

export default Home4award;

import Link from 'next/link'
import React from 'react'

const Home4Blog = () => {
  return (
    <>
     <div className="home4-blog-section mb-130">
        <div className="container">
          <div
            className="row mb-60 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
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
                  Our Blog &amp; Article
                </span>
                <h2>
                  See Our latest articles from our <span>Creative agency</span>.
                </h2>
              </div>
              <Link href="/blog" className="details-button">
                View All Blog
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-xl-9">
              <div className="blog-card-wrapper">
                <div className="blog-card2 border--top">
                  <div className="row g-0 align-items-center">
                    <div
                      className="col-lg-5 wow animate fadeInLeft"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="blog-card-img-wrap">
                        <Link href="/blog/blog-details" className="card-img">
                          <img src="assets/img/home4/blog-img1.jpg" alt="" />
                        </Link>
                        <Link href="/blog" className="date">
                          <span>
                            <strong>15</strong> January
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="blog-card-content-wrap">
                        <div
                          className="blog-card-content wow animate fadeInLeft"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="blog-meta">
                            <ul className="category">
                              <li>
                                <Link href="/blog">Development</Link>
                              </li>
                            </ul>
                            <div className="blog-comment">
                              <span>Comment (20)</span>
                            </div>
                          </div>
                          <h4>
                            <Link href="/blog/blog-details">
                              Decoding the Cloud And Deep Dive into Creative
                              Trends.
                            </Link>
                          </h4>
                          <p>
                            Welcome to Zenfy, where digital innovation meets arg
                            strategic excellence. As a dynamic force in thereal
                            on digital marketing, we are dedicated.
                          </p>
                        </div>
                        <div className="button-area btn_wrapper">
                          <Link
                            href="/blog/blog-details"
                            className="read-more-btn"
                          >
                            Read More
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
                    </div>
                  </div>
                </div>
                <div className="blog-card2 border--top">
                  <div className="row g-0 align-items-center">
                    <div
                      className="col-lg-5 wow animate fadeInLeft"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="blog-card-img-wrap">
                        <Link href="/blog/blog-details" className="card-img">
                          <img src="assets/img/home4/blog-img2.jpg" alt="" />
                        </Link>
                        <Link href="/blog" className="date">
                          <span>
                            <strong>20</strong> March
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="blog-card-content-wrap">
                        <div
                          className="blog-card-content wow animate fadeInLeft"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="blog-meta">
                            <ul className="category">
                              <li>
                                <Link href="/blog">Graphic Design</Link>
                              </li>
                            </ul>
                            <div className="blog-comment">
                              <span>Comment (15)</span>
                            </div>
                          </div>
                          <h4>
                            <Link href="/blog/blog-details">
                              Beyond then Canvas Exploring Innovative Design
                              Trends.
                            </Link>
                          </h4>
                          <p>
                            Welcome to Zenfy, where digital innovation meets arg
                            strategic excellence. As a dynamic force in thereal
                            on digital marketing, we are dedicated.
                          </p>
                        </div>
                        <div className="button-area btn_wrapper">
                          <Link
                            href="/blog/blog-details"
                            className="read-more-btn"
                          >
                            Read More
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
                    </div>
                  </div>
                </div>
                <div className="blog-card2 last-item">
                  <div className="row g-0 align-items-center">
                    <div
                      className="col-lg-5 wow animate fadeInLeft"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="blog-card-img-wrap">
                        <Link href="/blog/blog-details" className="card-img">
                          <img src="assets/img/home4/blog-img3.jpg" alt="" />
                        </Link>
                        <Link href="/blog" className="date">
                          <span>
                            <strong>25</strong> March
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="blog-card-content-wrap">
                        <div
                          className="blog-card-content wow animate fadeInLeft"
                          data-wow-delay="600ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="blog-meta">
                            <ul className="category">
                              <li>
                                <Link href="/blog">Technology</Link>
                              </li>
                            </ul>
                            <div className="blog-comment">
                              <span>Comment (17)</span>
                            </div>
                          </div>
                          <h4>
                            <Link href="/blog/blog-details">
                              The Aesthete Corner Unveiling Design Inspirations.
                            </Link>
                          </h4>
                          <p>
                            Welcome to Zenfy, where digital innovation meets arg
                            strategic excellence. As a dynamic force in thereal
                            on digital marketing, we are dedicated.
                          </p>
                        </div>
                        <div className="button-area btn_wrapper">
                          <Link
                            href="/blog/blog-details"
                            className="read-more-btn"
                          >
                            Read More
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Home4Blog

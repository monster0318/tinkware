import Link from "next/link";
import React from "react";

const Home2Blog = () => {
  return (
    <>
      <div className="home2-blog-section mb-110">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div
              className="col-lg-4 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-section-left">
                <div className="section-title2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                    >
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                    Latest Blog
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                    >
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                  </span>
                  <h2>Marketing Insights</h2>
                  <p>
                    Sed accumsan sem cursus luctus porta. amem Phasellu du enim,
                    efficitur quis velit ac, fringilla posuere leo fusci
                    ullamcorper id porent gone this way.
                  </p>
                </div>
                <Link href="/blog/blog-details" className="explore-btn">
                  View All Article
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
            <div className="col-lg-8">
              <div className="row g-4">
                <div
                  className="col-md-6 wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card style-2">
                    <div className="blog-card-img-wrap">
                      <Link href="/blog/blog-details" className="card-img">
                        <img src="assets/img/home2/blog-img1.jpg" alt="" />
                      </Link>
                      <Link href="/blog" className="date">
                        <span>
                          <strong>15</strong> January
                        </span>
                      </Link>
                    </div>
                    <div className="card-content">
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
                          How to Been population the Startup Company of this.
                        </Link>
                      </h4>
                      <Link href="/blog/blog-details" className="read-more-btn">
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
                <div
                  className="col-md-6 wow animate fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card style-2">
                    <div className="blog-card-img-wrap">
                      <Link href="/blog/blog-details" className="card-img">
                        <img src="assets/img/home2/blog-img2.jpg" alt="" />
                      </Link>
                      <Link href="/blog" className="date">
                        <span>
                          <strong>20</strong> April
                        </span>
                      </Link>
                    </div>
                    <div className="card-content">
                      <div className="blog-meta">
                        <ul className="category">
                          <li>
                            <Link href="/blog">Cyber Security</Link>
                          </li>
                        </ul>
                        <div className="blog-comment">
                          <span>Comment (16)</span>
                        </div>
                      </div>
                      <h4>
                        <Link href="/blog/blog-details">
                          How to Start and Grow Your Owner Startup Company.
                        </Link>
                      </h4>
                      <Link href="/blog/blog-details" className="read-more-btn">
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
    </>
  );
};

export default Home2Blog;

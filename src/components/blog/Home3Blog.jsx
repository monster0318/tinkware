import Link from "next/link";
import React from "react";

const Home3Blog = () => {
  return (
    <>
      <div className="home3-blog-section mb-110">
        <div className="container">
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
                  Task Manager Feature
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
                <h2>Our Article Must Be Read</h2>
                <p>
                  Welcome to Zenfy, where digital innovation meets strategic
                  excellence. As a dynamic force in the realm of digital
                  marketing, we are dedicated to propelling businesses into the
                  spotlight of online success.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href="/blog-details" className="card-img">
                    <img src="assets/img/home3/blog-img1.jpg" alt="" />
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
                    <Link href="/blog-details">
                      Decoding the Cloud A Deep Dive into SaaS Trends.
                    </Link>
                  </h4>
                  <Link href="/blog-details" className="read-more-btn">
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
              className="col-lg-4 col-md-6 wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href="/blog-details" className="card-img">
                    <img src="assets/img/home3/blog-img2.jpg" alt="" />
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
                      <span>Comment (10)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      Mastering Efiecy Tips and Tricks with our Zenfy.
                    </Link>
                  </h4>
                  <Link href="/blog-details" className="read-more-btn">
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
              className="col-lg-4 col-md-6 wow animate fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href="/blog-details" className="card-img">
                    <img src="assets/img/home3/blog-img3.jpg" alt="" />
                  </Link>
                  <Link href="/blog" className="date">
                    <span>
                      <strong>25</strong> April
                    </span>
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/blog">Consulting</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (15)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      From Ideas How Xtore Transforms Workflows.
                    </Link>
                  </h4>
                  <Link href="/blog-details" className="read-more-btn">
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
    </>
  );
};

export default Home3Blog;

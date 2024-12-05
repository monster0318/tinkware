"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";

const BlogGirdSidebar = () => {
  useWow()
  return (
    <MainLayout>
      <div
        className="blog-grid-sidebar-section scroll-margin pt-120 mb-120"
        id="blog-grid"
      >
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="row g-4 mb-50">
                <div
                  className="col-md-6 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card style-2">
                    <div className="blog-card-img-wrap">
                      <Link href="/blog/blog-details" className="card-img">
                        <img src="/assets/img/home3/blog-img1.jpg" alt="" />
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
                          Decoding the Cloud A Deep Dive into SaaS Trends.
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
                  className="col-md-6 wow animate fadeInDown"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card style-2">
                    <div className="blog-card-img-wrap">
                      <Link href="/blog/blog-details" className="card-img">
                        <img src="/assets/img/home3/blog-img2.jpg" alt="" />
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
                          <span>Comment (12)</span>
                        </div>
                      </div>
                      <h4>
                        <Link href="/blog/blog-details">
                          Mastering Efiecy Tips and Tricks with our Zenfy.
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
                  className="col-md-6 wow animate fadeInDown"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card style-2">
                    <div className="blog-card-img-wrap">
                      <Link href="/blog/blog-details" className="card-img">
                        <img src="/assets/img/home3/blog-img3.jpg" alt="" />
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
                          <span>Comment (24)</span>
                        </div>
                      </div>
                      <h4>
                        <Link href="/blog/blog-details">
                          From Ideas How Xtore Transforms Workflows.
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
                  className="col-md-6 wow animate fadeInDown"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card style-2">
                    <div className="blog-card-img-wrap">
                      <Link href="/blog/blog-details" className="card-img">
                        <img src="/assets/img/home1/blog-img1.jpg" alt="" />
                      </Link>
                      <Link href="/blog" className="date">
                        <span>
                          <strong>20</strong> May
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
                          <span>Comment (15)</span>
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
                  className="col-md-6 wow animate fadeInDown"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card style-2">
                    <div className="blog-card-img-wrap">
                      <Link href="/blog/blog-details" className="card-img">
                        <img src="/assets/img/home1/blog-img2.jpg" alt="" />
                      </Link>
                      <Link href="/blog" className="date">
                        <span>
                          <strong>15</strong> May
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
                <div
                  className="col-md-6 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card style-2">
                    <div className="blog-card-img-wrap">
                      <Link href="/blog/blog-details" className="card-img">
                        <img src="/assets/img/home1/blog-img3.jpg" alt="" />
                      </Link>
                      <Link href="/blog" className="date">
                        <span>
                          <strong>12</strong> June
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
                          <span>Comment (12)</span>
                        </div>
                      </div>
                      <h4>
                        <Link href="/blog/blog-details">
                          Innovation The Power of an Startup Company business.
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
              <div className="row">
                <div
                  className="col-lg-12 d-flex justify-content-center wow animate fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="pagination-area">
                    <ul className="paginations">
                      <li className="page-item active">
                        <a href="#">01</a>
                      </li>
                      <li className="page-item">
                        <a href="#">02</a>
                      </li>
                      <li className="page-item">
                        <a href="#">03</a>
                      </li>
                      <li className="page-item paginations-button">
                        <a href="#">
                          NXT
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={12}
                            viewBox="0 0 14 12"
                          >
                            <path d="M0.020025 6.33628C0.0901115 6.5271 0.25031 6.73476 0.400496 6.83017C0.550683 6.91997 0.946172 6.92558 5.76715 6.95364L10.9736 6.98171L9.08627 8.77205C7.85974 9.93381 7.16889 10.6297 7.11883 10.7476C6.94862 11.1517 7.10381 11.6961 7.44423 11.8981C7.63947 12.0216 8.01494 12.0328 8.18014 11.9318C8.24022 11.8925 9.53682 10.6803 11.0687 9.23226C12.941 7.45876 13.8722 6.53833 13.9273 6.42047C14.0775 6.05567 13.9923 5.65719 13.697 5.3429C13.2014 4.82656 8.1451 0.140237 8.00993 0.0728886C7.79466 -0.0337464 7.60943 -0.0225217 7.36413 0.100951C6.96864 0.302995 6.79843 0.909129 7.0137 1.31883C7.06376 1.41424 7.96988 2.301 9.02619 3.28316C10.0775 4.27093 10.9436 5.09034 10.9436 5.11279C10.9486 5.14085 8.61068 5.15769 5.74713 5.15769L0.550683 5.15769L0.385478 5.28116C0.135167 5.47759 0.0250308 5.67964 0.00500557 5.98271C-0.00500609 6.12863 -2.49531e-07 6.29139 0.020025 6.33628Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow animate fadeInRight"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="sidebar-area">
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Search Here</h5>
                  <form>
                    <div className="search-box">
                      <input type="text" placeholder="Search Here" />
                      <button type="submit">
                        <i className="bx bx-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Category</h5>
                  <ul className="category-list">
                    <li>
                      <Link href="/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          Digital Marketing
                        </span>
                        <span>(20)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          Creative Agency
                        </span>
                        <span>(15)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          Web Design
                        </span>
                        <span>(25)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          Web Development
                        </span>
                        <span>(30)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          Content Marketing
                        </span>
                        <span>(32)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          App Development
                        </span>
                        <span>(35)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          UI/UX Design
                        </span>
                        <span>(38)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Popular Post </h5>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details">
                        <img
                          src="/assets/img/innerpage/popular-post-img1.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">20 January, 2024</Link>
                      <h6>
                        <Link href="/blog/blog-details">
                          Looking Inspiration Traveling The World.
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details">
                        <img
                          src="/assets/img/innerpage/popular-post-img2.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">12 January, 2024</Link>
                      <h6>
                        <Link href="/blog/blog-details">
                          Challenges creating a multi-brand system.
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details">
                        <img
                          src="/assets/img/innerpage/popular-post-img3.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">04 January, 2024</Link>
                      <h6>
                        <Link href="/blog/blog-details">
                          Decoding the Cloud And Deep Dive Creative.
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">New Tags</h5>
                  <ul className="tag-list">
                    <li>
                      <Link href=".blog">Creative</Link>
                    </li>
                    <li>
                      <Link href=".blog">Web Design</Link>
                    </li>
                    <li>
                      <Link href=".blog">Software</Link>
                    </li>
                    <li>
                      <Link href=".blog">Industry</Link>
                    </li>
                    <li>
                      <Link href=".blog">Marketing</Link>
                    </li>
                    <li>
                      <Link href=".blog">Product</Link>
                    </li>
                    <li>
                      <Link href=".blog">Optimization</Link>
                    </li>
                    <li>
                      <Link href=".blog">Graphic</Link>
                    </li>
                    <li>
                      <Link href=".blog">Natural</Link>
                    </li>
                  </ul>
                </div>
                <div className="single-widget">
                  <h5 className="widget-title">Social Share</h5>
                  <ul className="social-list">
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bi bi-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bi bi-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bi bi-instagram" />
                        <span>Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogGirdSidebar;

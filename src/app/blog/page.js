"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";


const Blogpage = () => {
  useWow()
  return (
    <MainLayout>
      <div
        className="blog-grid-section scroll-margin pt-120 mb-120"
        id="blog-grid"
      >
        <div className="container">
          <div className="row g-4 mb-50">
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href="/blog/blog-details" className="card-img">
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
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href="/blog/blog-details" className="card-img">
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
                      <span>Comment (12)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/blog/blog-details">
                      Mastering Efiecy Tips and Tricks with our {process.env.NEXT_PUBLIC_COMPANY_NAME}.
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
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href="/blog/blog-details" className="card-img">
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
                        <Link href="/blog">Cyber Security</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (25)</span>
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
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href="/blog/blog-details" className="card-img">
                    <img src="assets/img/home1/blog-img1.jpg" alt="" />
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
                      <span>Comment (28)</span>
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
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href="/blog/blog-details" className="card-img">
                    <img src="assets/img/home1/blog-img2.jpg" alt="" />
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
                        <Link href="/blog">Cyber Security</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (22)</span>
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
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href="/blog/blog-details" className="card-img">
                    <img src="assets/img/home1/blog-img3.jpg" alt="" />
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
                      <span>Comment (30)</span>
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
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href="/blog/blog-details" className="card-img">
                    <img src="assets/img/innerpage/blog-img1.jpg" alt="" />
                  </Link>
                  <Link href="/blog" className="date">
                    <span>
                      <strong>05</strong> January
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
                      <span>Comment (20)</span>
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
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href="/blog/blog-details" className="card-img">
                    <img src="assets/img/innerpage/blog-img2.jpg" alt="" />
                  </Link>
                  <Link href="/blog" className="date">
                    <span>
                      <strong>10</strong> January
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
                      Looking For Inspiration &amp; Unique Traveling The World.
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
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href="/blog/blog-details" className="card-img">
                    <img src="assets/img/innerpage/blog-img3.jpg" alt="" />
                  </Link>
                  <Link href="/blog" className="date">
                    <span>
                      <strong>18</strong> January
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
                      The complete guide unlocking your team’s power.
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
    </MainLayout>
  );
};

export default Blogpage;

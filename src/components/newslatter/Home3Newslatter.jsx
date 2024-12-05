import React from "react";

const Home3Newslatter = () => {
  return (
    <>
      <div className="home3-newsletter-section mb-110">
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="row g-lg-4 gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="section-title white">
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
                    Start your free trail
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
                  <h2>Now Here? Start your Free Trail Now.</h2>
                </div>
              </div>
              <div
                className="col-lg-5 col-md-6 wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="newsletter-form-area">
                  <h6>Request for a Demo</h6>
                  <div className="form-inner">
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="bi bi-arrow-right" />
                    </button>
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

export default Home3Newslatter;

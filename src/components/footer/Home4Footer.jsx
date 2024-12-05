import Link from "next/link";
import React from "react";

const Home4Footer = () => {
  return (
    <>
      <footer>
        <div className="home4-footer-top-section">
          <div className="container-fluid p-0">
            <div className="row justify-content-end">
              <div className="col-lg-7">
                <div className="content">
                  <h2>
                    <Link href="/contact">Let’s talk</Link>
                  </h2>
                  <svg
                    className="sm-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                  >
                    <path d="M0.147059 0H29.7059V5.58824L5.58824 30L0 24.4118L16.4706 7.94118L0.147059 8.08824V0Z" />
                    <path d="M29.7058 29.9998V11.1763L21.7646 19.1174V29.9998H29.7058Z" />
                  </svg>
                  <div className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M1 0H202V38L38 204L0 166L112 54L1 55V0Z" />
                        <path d="M202 204V76L148 130V204H202Z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home4-footer-section">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-10">
                <div className="home4-footer-wrap">
                  <div className="footer-top">
                    <div className="row g-lg-4 gy-5 justify-content-center">
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-widget">
                          <div className="footer-logo">
                            <Link href="/">
                              <img
                                src="/assets/img/footer-logo2-light.svg"
                                alt=""
                              />
                            </Link>
                          </div>
                          <h2>
                            <a href="mailto:info@example.com">
                              info@example.com
                            </a>
                          </h2>
                          {/* <div class="content">
                                          <p>Welcome to Zenfy, where innovation meets our passion in a journey that started with a simple idea and a shared dream.</p>
                                      </div> */}
                          <div className="social-area">
                            <h6>Social Just You Connected Us!</h6>
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
                      <div className="col-lg-2 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
                        <div className="footer-widget">
                          <div className="widget-title">
                            <h4>Solutions</h4>
                          </div>
                          <div className="menu-container">
                            <ul className="widget-list">
                              <li>
                                <Link href="/service/service-details">
                                  Brand Identity{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/service/service-details">
                                  Graphic Design
                                </Link>
                              </li>
                              <li>
                                <Link href="/service/service-details">
                                  Web Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/service/service-details">
                                  Digital Marketing
                                </Link>
                              </li>
                              <li>
                                <Link href="/service/service-details">
                                  Video Production
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
                        <div className="footer-widget">
                          <div className="widget-title">
                            <h4>Company</h4>
                          </div>
                          <div className="menu-container">
                            <ul className="widget-list">
                              <li>
                                <Link href="/about">About us</Link>
                              </li>
                              <li>
                                <Link href="/case-study">Case Study</Link>
                              </li>
                              <li>
                                <Link href="/blog">Blogs</Link>
                              </li>
                              <li>
                                <Link href="/pricing-plan">Pricing</Link>
                              </li>
                              <li>
                                <Link href="/contact">Contact Us</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="footer-widget">
                          <div className="footer-author-area">
                            <div className="author-img">
                              <img
                                src="/assets/img/home4/footer-author-img.png"
                                alt=""
                              />
                            </div>
                            <div className="author-content">
                              <div className="author-name-desig">
                                <h6>Mr. Daniel Scoot</h6>
                                <span>Founder / Zenfy</span>
                              </div>
                              <p>
                                We're dedicated to find the right solution for
                                you.
                              </p>
                              <Link href="/contact" className="details-button">
                                Get In Touch
                                <svg viewBox="0 0 13 20">
                                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-bottom">
                    <div className="copyright-area">
                      <p>
                        Copyright 2024 <a href="#">Zenfy</a> | Design By{" "}
                        <a href="https://www.egenslab.com/">Egens Lab</a>
                      </p>
                    </div>
                    <div className="footer-bottom-right">
                      <ul>
                        <li>
                          <a href="#">Support Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 d-xl-flex d-none">
                <div className="contact-area">
                  <h6>Address 01</h6>
                  <a href="#">8204 Glen Ridge DriveEndicott, NY 13760</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home4Footer;

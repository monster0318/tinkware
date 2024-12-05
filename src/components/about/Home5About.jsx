"use client";
import CountUp from "react-countup";
import Link from "next/link";
import React, { useEffect } from "react";

const Home5About = () => {
  useEffect(() => {
    var skillPers = document.querySelectorAll(".experience-bar-per");

    skillPers.forEach(function (skillPer) {
      var per = parseFloat(skillPer.getAttribute("data-per"));
      skillPer.style.width = per + "%";

      var animatedValue = 0;
      var startTime = null;

      function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)

        if (stepPercentage < 1) {
          animatedValue = per * stepPercentage;
          skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
          requestAnimationFrame(animate);
        } else {
          animatedValue = per;
          skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
        }
      }
      requestAnimationFrame(animate);
    });
  }, []);
  return (
    <>
      <div className="home5-about-section mb-120">
        <div className="container">
          <div className="row mb-40">
            <div
              className="col-lg-12 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title5 two">
                <span className="sub-title5 two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                  Our Journey Success
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                </span>
                <h2>
                  We are a IT service Company working with talents{" "}
                  <span>on delivering unique ideas.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            <div
              className="col-lg-6 wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="about-content">
                <p>
                  Nam lobortis felis sit amet justo consectetur, id maximus
                  tortor consequat. Sed fringill nisi lorem, sit amet blandit
                  tellus vehicula id. Proin feugiat euismod lacus vitae suscipi.
                  Aenean fringilla molestie eros in maximus. Nunc in nisl
                  cursus, consectetur quam luck, euismod urna. Praesent pharetra
                  magna vel magna varius, ut semper risus suscipit. Cl aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeoso. Mauris risus ligula, vulputate at dapibus
                  vel, viverra in lacus.
                </p>
                <div className="eg-progress-wrap">
                  <div className="eg-progress-bar-single mb-40">
                    <div className="eg-progress-bar-title">
                      <h6>Web Design</h6>
                    </div>
                    <div className="eg-progress-bar">
                      <div className="experience-bar-per" data-per="90%" />
                    </div>
                  </div>
                  <div className="eg-progress-bar-single mb-40">
                    <div className="eg-progress-bar-title">
                      <h6>Digital Marketing</h6>
                    </div>
                    <div className="eg-progress-bar">
                      <div className="experience-bar-per" data-per="80%" />
                    </div>
                  </div>
                  <div className="eg-progress-bar-single">
                    <div className="eg-progress-bar-title">
                      <h6>App Development</h6>
                    </div>
                    <div className="eg-progress-bar">
                      <div className="experience-bar-per" data-per="95%" />
                    </div>
                  </div>
                </div>
                <div className="about-countdown-area">
                  <ul>
                    <li className="single-countdown">
                      <div className="content">
                        <div className="number">
                          <h5 className="counter">
                            <CountUp end={140} delay={5} />
                          </h5>
                          <span>Project</span>
                        </div>
                        <p>We Have Completed</p>
                      </div>
                    </li>
                    <li className="single-countdown">
                      <div className="content">
                        <div className="number">
                          <h5 className="counter">
                            <CountUp end={98} delay={5} />
                          </h5>
                          <span>%</span>
                        </div>
                        <p>Customer Satisfaction</p>
                      </div>
                    </li>
                    <li className="single-countdown">
                      <div className="content">
                        <div className="number">
                          <h5 className="counter">
                            <CountUp end={3} delay={5} />
                          </h5>
                          <span>Mins</span>
                        </div>
                        <p>Average Answer Time</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right">
                <div
                  className="about-img wow animate zoomIn"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <img src="assets/img/home5/about-img.jpg" alt="" />
                </div>
                <div className="banner-btn">
                  <Link href="/about">
                    <div className="bg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={201}
                        height={201}
                        viewBox="0 0 201 201"
                      >
                        <path d="M98.0575 1.36746C99.575 0.517864 101.425 0.517863 102.943 1.36746L113.512 7.28497C114.551 7.86633 115.762 8.05824 116.93 7.82623L128.811 5.46457C130.516 5.1255 132.276 5.69718 133.457 6.97414L141.68 15.8683C142.488 16.742 143.581 17.299 144.763 17.439L156.793 18.8644C158.52 19.0691 160.016 20.1565 160.745 21.7358L165.818 32.7359C166.316 33.8166 167.183 34.6841 168.264 35.1824L179.264 40.2553C180.844 40.9836 181.931 42.4803 182.136 44.2074L183.561 56.2367C183.701 57.4185 184.258 58.5116 185.132 59.3196L194.026 67.5434C195.303 68.7241 195.874 70.4835 195.535 72.1893L193.174 84.0704C192.942 85.2376 193.134 86.4493 193.715 87.4877L199.633 98.0575C200.482 99.575 200.482 101.425 199.633 102.943L193.715 113.512C193.134 114.551 192.942 115.762 193.174 116.93L195.535 128.811C195.874 130.516 195.303 132.276 194.026 133.457L185.132 141.68C184.258 142.488 183.701 143.581 183.561 144.763L182.136 156.793C181.931 158.52 180.844 160.016 179.264 160.745L168.264 165.818C167.183 166.316 166.316 167.183 165.818 168.264L160.745 179.264C160.016 180.844 158.52 181.931 156.793 182.136L144.763 183.561C143.581 183.701 142.488 184.258 141.68 185.132L133.457 194.026C132.276 195.303 130.516 195.874 128.811 195.535L116.93 193.174C115.762 192.942 114.551 193.134 113.512 193.715L102.943 199.633C101.425 200.482 99.575 200.482 98.0575 199.633L87.4877 193.715C86.4493 193.134 85.2376 192.942 84.0704 193.174L72.1893 195.535C70.4835 195.874 68.7241 195.303 67.5434 194.026L59.3196 185.132C58.5116 184.258 57.4185 183.701 56.2367 183.561L44.2074 182.136C42.4803 181.931 40.9836 180.844 40.2553 179.264L35.1824 168.264C34.6841 167.183 33.8166 166.316 32.7359 165.818L21.7358 160.745C20.1565 160.016 19.0691 158.52 18.8644 156.793L17.439 144.763C17.299 143.581 16.742 142.488 15.8683 141.68L6.97414 133.457C5.69718 132.276 5.1255 130.516 5.46457 128.811L7.82623 116.93C8.05824 115.762 7.86633 114.551 7.28498 113.512L1.36746 102.943C0.517864 101.425 0.517863 99.575 1.36746 98.0575L7.28497 87.4877C7.86633 86.4493 8.05824 85.2376 7.82623 84.0704L5.46457 72.1893C5.1255 70.4836 5.69718 68.7241 6.97414 67.5434L15.8683 59.3196C16.742 58.5116 17.299 57.4185 17.439 56.2367L18.8644 44.2074C19.0691 42.4803 20.1565 40.9836 21.7358 40.2553L32.7359 35.1824C33.8166 34.6841 34.6841 33.8166 35.1824 32.7359L40.2553 21.7358C40.9836 20.1565 42.4803 19.0691 44.2074 18.8644L56.2367 17.439C57.4185 17.299 58.5116 16.742 59.3196 15.8683L67.5434 6.97414C68.7241 5.69718 70.4835 5.1255 72.1893 5.46457L84.0704 7.82623C85.2376 8.05824 86.4493 7.86633 87.4877 7.28498L98.0575 1.36746Z" />
                        <path d="M98.3017 1.80374C99.6675 1.0391 101.332 1.0391 102.698 1.80374L113.268 7.72125C114.41 8.36074 115.743 8.57185 117.027 8.31663L128.908 5.95498C130.443 5.64981 132.027 6.16433 133.09 7.31359L141.313 16.2077C142.202 17.1689 143.404 17.7815 144.704 17.9356L156.734 19.3609C158.288 19.5451 159.635 20.5238 160.291 21.9452L165.364 32.9453C165.912 34.134 166.866 35.0883 168.055 35.6365L179.055 40.7094C180.476 41.3648 181.455 42.7119 181.639 44.2662L183.064 56.2956C183.218 57.5955 183.831 58.798 184.792 59.6867L193.686 67.9105C194.836 68.9731 195.35 70.5566 195.045 72.0919L192.683 83.9729C192.428 85.2569 192.639 86.5897 193.279 87.732L199.196 98.3017C199.961 99.6675 199.961 101.332 199.196 102.698L193.279 113.268C192.639 114.41 192.428 115.743 192.683 117.027L195.045 128.908C195.35 130.443 194.836 132.027 193.686 133.09L184.792 141.313C183.831 142.202 183.218 143.404 183.064 144.704L181.639 156.734C181.455 158.288 180.476 159.635 179.055 160.291L168.055 165.364C166.866 165.912 165.912 166.866 165.364 168.055L160.291 179.055C159.635 180.476 158.288 181.455 156.734 181.639L144.704 183.064C143.404 183.218 142.202 183.831 141.313 184.792L133.09 193.686C132.027 194.836 130.443 195.35 128.908 195.045L117.027 192.683C115.743 192.428 114.41 192.639 113.268 193.279L102.698 199.196C101.332 199.961 99.6675 199.961 98.3017 199.196L87.732 193.279C86.5897 192.639 85.2569 192.428 83.9729 192.683L72.0919 195.045C70.5566 195.35 68.9731 194.836 67.9105 193.686L59.6867 184.792C58.798 183.831 57.5955 183.218 56.2956 183.064L44.2662 181.639C42.7119 181.455 41.3648 180.476 40.7094 179.055L35.6365 168.055C35.0883 166.866 34.134 165.912 32.9453 165.364L21.9452 160.291C20.5238 159.635 19.5451 158.288 19.3609 156.734L17.9356 144.704C17.7815 143.404 17.1689 142.202 16.2077 141.313L7.31359 133.09C6.16433 132.027 5.64981 130.443 5.95498 128.908L8.31663 117.027C8.57185 115.743 8.36074 114.41 7.72126 113.268L1.80374 102.698C1.0391 101.332 1.0391 99.6675 1.80374 98.3017L7.72125 87.732C8.36074 86.5897 8.57185 85.2569 8.31663 83.9729L5.95498 72.0919C5.64981 70.5566 6.16432 68.9731 7.31359 67.9105L16.2077 59.6867C17.1689 58.798 17.7815 57.5955 17.9356 56.2956L19.3609 44.2662C19.5451 42.7119 20.5238 41.3648 21.9452 40.7094L32.9453 35.6365C34.134 35.0883 35.0883 34.134 35.6365 32.9453L40.7094 21.9452C41.3648 20.5238 42.7119 19.5451 44.2662 19.3609L56.2956 17.9356C57.5955 17.7815 58.798 17.1689 59.6867 16.2077L67.9105 7.31359C68.9731 6.16432 70.5566 5.64981 72.0919 5.95498L83.9729 8.31663C85.2569 8.57185 86.5897 8.36074 87.732 7.72126L98.3017 1.80374Z" />
                      </svg>
                    </div>
                    <div className="details-button">
                      Learn More
                      <svg viewBox="0 0 13 20">
                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                      </svg>
                    </div>
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

export default Home5About;

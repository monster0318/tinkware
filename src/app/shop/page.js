"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";

const ShopPage = () => {
  useWow()
  return (
    <MainLayout>
      <div className="shop-page scroll-margin pt-120 pb-120" id="shop">
        <div className="container">
          <div className="row g-4 mb-50">
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img1.jpg" alt="" />
                    <div className="batch">
                      <span>-15%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Air pod Pro Original</Link>
                  </h6>
                  <span>
                    $150.00 <del>$200.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img2.jpg" alt="" />
                    <div className="batch">
                      <span>-10%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Sports Shoe For Men</Link>
                  </h6>
                  <span>
                    $318.00 <del>$350.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img3.jpg" alt="" />
                    <div className="batch">
                      <span>-5%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Redmi Smart Watch</Link>
                  </h6>
                  <span>
                    $90.00 <del>$120.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img4.jpg" alt="" />
                    <div className="batch">
                      <span>-8%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">canon Old Cemera</Link>
                  </h6>
                  <span>
                    $100.00 <del>$130.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img5.jpg" alt="" />
                    <div className="batch">
                      <span>-3%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Body Cream For Women</Link>
                  </h6>
                  <span>
                    $80.00 <del>$100.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img6.jpg" alt="" />
                    <div className="batch">
                      <span>-12%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Dove Beauty Cream</Link>
                  </h6>
                  <span>
                    $120.00 <del>$180.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img7.jpg" alt="" />
                    <div className="batch">
                      <span>New</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">
                      Crystal-Infused Highlighter
                    </Link>
                  </h6>
                  <span>$130.00</span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img8.jpg" alt="" />
                    <div className="batch">
                      <span>-8%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Macbook Pro 14”</Link>
                  </h6>
                  <span>
                    $1805.00 <del>$2000.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img9.jpg" alt="" />
                    <div className="batch">
                      <span>-5%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Givenchy Makeup Pack</Link>
                  </h6>
                  <span>
                    $110.00 <del>$150.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
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
      </div>
    </MainLayout>
  );
};

export default ShopPage;

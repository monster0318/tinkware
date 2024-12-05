"use client";
import Link from "next/link";
import { useEffect, useMemo, useReducer, useRef } from "react";
import navData from "../../data/nav.json";
import ScrollProgress from "../common/ScrollProgress";
const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
  isRightSidebar: false,
  isLang: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    case "TOGGLE_LANG":
      return {
        ...state,
        isLang: !state.isLang,
      };
    case "TOGGLE_RIGHTSIDEBAR":
      return {
        ...state,
        isRightSidebar: !state.isRightSidebar,
      };
    default:
      return state;
  }
}

const Header1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleRightSidebar = () => {
    dispatch({ type: "TOGGLE_RIGHTSIDEBAR" });
  };
  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <>
      <ScrollProgress />
      <div className={`sidebar-menu ${state.isRightSidebar ? "active" : ""}`}>
        <div className="sidebar-menu-top-area">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="sidebar-menu-logo">
              <Link href="/" className="logo-dark">
                <img
                  alt="image"
                  className="img-fluid"
                  src="assets/img/logo.svg"
                />
              </Link>
              <Link href="/" className="logo-light">
                <img
                  alt="image"
                  className="img-fluid"
                  src="assets/img/logo-light.svg"
                />
              </Link>
            </div>
            <div className="sidebar-menu-close" onClick={toggleRightSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 0L11.1686 8.99601L18 18L9.0041 11.1605L0 18L6.83156 8.99601L0 0L9.0041 6.83156L18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="sidebar-menu-wrap">
                <ul className="main-menu">
                  <li>
                    <Link href="/">Agency </Link>
                    <span
                      className={`dropdown-icon2 ${
                        state.activeMenu === "home" ? "active" : ""
                      }`}
                      onClick={() => toggleMenu("home")}
                    >
                      <i className="bi bi-plus" />
                    </span>
                    <ul
                      className={`submenu-list active ${
                        state.activeMenu === "home" ? "d-block" : "d-none"
                      }`}
                    >
                      <li>
                        <a href="#">Light Version</a>
                        <span
                          className={`dropdown-icon2 two ${
                            state.activeSubMenu === "light" ? "active" : ""
                          }`}
                          onClick={() => toggleSubMenu("light")}
                        >
                          <i className="bi bi-plus" />
                        </span>
                        <ul
                          className={`submenu-list ${
                            state.activeSubMenu === "light"
                              ? "d-block"
                              : "d-none"
                          }`}
                        >
                          <li>
                            <Link href="/">
                              Startup Agency
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/digital-marketing">
                              Digital Marketing Agency
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/saas">
                              Saas Product
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/creative-agency">
                              Creative Agency
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/it-solution">
                              It Solution
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Dark Version</a>
                        <span
                          className={`dropdown-icon2 two ${
                            state.activeSubMenu === "dark" ? "active" : ""
                          }`}
                          onClick={() => toggleSubMenu("dark")}
                        >
                          <i className="bi bi-plus" />
                        </span>
                        <ul
                          className={`submenu-list ${
                            state.activeSubMenu === "dark"
                              ? "d-block"
                              : "d-none"
                          }`}
                        >
                          <li>
                            <Link href="/">
                              Startup Agency
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/digital-marketing">
                              Digital Marketing Agency
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/saas">
                              Saas Product
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/creative-agency">
                              Creative Agency
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/it-solution">
                              It Solution
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                    <span
                      className={`dropdown-icon2 ${
                        state.activeMenu === "service" ? "active" : ""
                      }`}
                      onClick={() => toggleMenu("service")}
                    >
                      <i className="bi bi-plus" />
                    </span>
                    <ul
                      className={`submenu-list ${
                        state.activeMenu === "service" ? "d-block" : "d-none"
                      }`}
                    >
                      <li>
                        <Link href="/service">
                          Service style 01
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/service2">
                          Service style 02
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/service3">
                          Service style 03
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/service4">
                          Service style 04
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/service-details">
                          Service Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/case-study">Case Study</Link>
                    <span
                      className={`dropdown-icon2 ${
                        state.activeMenu === "case-study" ? "active" : ""
                      }`}
                      onClick={() => toggleMenu("case-study")}
                    >
                      <i className="bi bi-plus" />
                    </span>
                    <ul
                      className={`submenu-list ${
                        state.activeMenu === "case-study" ? "d-block" : "d-none"
                      }`}
                    >
                      <li>
                        <Link href="/case-study">
                          Case Study Style 01
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/case-study2">
                          Case Study Style 02
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/case-study-details">
                          Case Study Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                    <span
                      className={`dropdown-icon2 ${
                        state.activeMenu === "blog" ? "active" : ""
                      }`}
                      onClick={() => toggleMenu("blog")}
                    >
                      <i className="bi bi-plus" />
                    </span>
                    <ul
                      className={`submenu-list ${
                        state.activeMenu === "blog" ? "d-block" : "d-none"
                      }`}
                    >
                      <li>
                        <Link href="/blog">
                          Blog Grid
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/blog-sidebar">
                          Blog Grid Sidebar
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/blog-list">
                          Blog List
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/blog-standard">
                          Blog Standard
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/blog-details">
                          Blog Details Style 01
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/blog-details2">
                          Blog Details Style 02
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <span
                      className={`dropdown-icon2 ${
                        state.activeMenu === "pages" ? "active" : ""
                      }`}
                      onClick={() => toggleMenu("pages")}
                    >
                      <i className="bi bi-plus" />
                    </span>
                    <ul
                      className={`submenu-list ${
                        state.activeMenu === "pages" ? "d-block" : "d-none"
                      }`}
                    >
                      <li>
                        <Link href="/blog">
                          About
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio">Portfolio </Link>
                        <span
                          className={`dropdown-icon2 two ${
                            state.activeSubMenu === "portfolio" ? "active" : ""
                          }`}
                          onClick={() => toggleSubMenu("portfolio")}
                        >
                          <i className="bi bi-plus" />
                        </span>
                        <ul
                          className={`submenu-list ${
                            state.activeSubMenu === "portfolio"
                              ? "d-block"
                              : "d-none"
                          }`}
                        >
                          <li>
                            <Link href="/portfolio">
                              Portfolio Grid
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio/portfolio-masonary">
                              Portfolio Masonary
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio/portfolio-info-flow">
                              Portfolio Info Flow
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio/portfolio-list">
                              Portfolio List
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio/portfolio-details">
                              Portfolio Details
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/team">Our Team</Link>
                        <span
                          className={`dropdown-icon2 two ${
                            state.activeSubMenu === "team" ? "active" : ""
                          }`}
                          onClick={() => toggleSubMenu("team")}
                        >
                          <i className="bi bi-plus" />
                        </span>
                        <ul
                          className={`submenu-list ${
                            state.activeSubMenu === "team"
                              ? "d-block"
                              : "d-none"
                          }`}
                        >
                          <li>
                            <Link href="/team1">
                              Team Style 1
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/team2">
                              Team Style 2
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/features">
                          Features
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">Shop</Link>
                        <span
                          className={`dropdown-icon2 two ${
                            state.activeSubMenu === "shop" ? "active" : ""
                          }`}
                          onClick={() => toggleSubMenu("shop")}
                        >
                          <i className="bi bi-plus" />
                        </span>
                        <ul
                          className={`submenu-list ${
                            state.activeSubMenu === "shop"
                              ? "d-block"
                              : "d-none"
                          }`}
                        >
                          <li>
                            <Link href="/shop">
                              Shop
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              Product Details
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/cart">
                              Cart
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/checkout">
                              CheckOut
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/pricing-plan">
                          Pricing Plan
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq">
                          Faq
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 d-lg-flex align-items-center d-none">
              <div className="sidebar-contact">
                <div className="getin-touch-area mb-60">
                  <h4>
                    Get in Touch
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </h4>
                  <ul>
                    <li className="single-contact">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                        >
                          <path d="M14.2333 11.1504C13.8642 10.7667 13.4191 10.5615 12.9473 10.5615C12.4794 10.5615 12.0304 10.7629 11.6462 11.1466L10.4439 12.3433C10.345 12.2901 10.2461 12.2407 10.151 12.1913C10.014 12.1229 9.88467 12.0583 9.77433 11.9899C8.64819 11.2757 7.62476 10.345 6.64319 9.14067C6.16762 8.54043 5.84804 8.03516 5.61596 7.52229C5.92793 7.23736 6.21708 6.94104 6.49861 6.65611C6.60514 6.54974 6.71167 6.43957 6.8182 6.33319C7.61715 5.5354 7.61715 4.50207 6.8182 3.70427L5.77955 2.66714C5.66161 2.54937 5.53987 2.4278 5.42573 2.30623C5.19746 2.07069 4.95777 1.82755 4.71047 1.59961C4.34143 1.2349 3.9001 1.04115 3.43595 1.04115C2.97179 1.04115 2.52286 1.2349 2.1424 1.59961L2.13479 1.60721L0.841243 2.91027C0.35426 3.39655 0.076528 3.9892 0.0156552 4.67682C-0.0756541 5.78614 0.251537 6.81947 0.502638 7.4957C1.11898 9.15587 2.03968 10.6945 3.41312 12.3433C5.07952 14.3301 7.08452 15.8991 9.37486 17.0047C10.2499 17.4187 11.4179 17.9088 12.7229 17.9924C12.8028 17.9962 12.8865 18 12.9626 18C13.8414 18 14.5795 17.6847 15.1578 17.0578C15.1616 17.0502 15.1692 17.0464 15.173 17.0388C15.3708 16.7995 15.5991 16.583 15.8388 16.3512C16.0024 16.1955 16.1698 16.0321 16.3334 15.8611C16.71 15.4698 16.9079 15.014 16.9079 14.5467C16.9079 14.0756 16.7062 13.6235 16.322 13.2436L14.2333 11.1504ZM15.5953 15.1507C15.5915 15.1545 15.5915 15.1507 15.5953 15.1507C15.4469 15.3103 15.2947 15.4547 15.1311 15.6142C14.8838 15.8498 14.6327 16.0967 14.3969 16.374C14.0126 16.7843 13.5599 16.9781 12.9664 16.9781C12.9093 16.9781 12.8484 16.9781 12.7913 16.9743C11.6614 16.9021 10.6113 16.4614 9.82379 16.0853C7.67042 15.0444 5.77955 13.5665 4.20827 11.6936C2.91092 10.1322 2.04348 8.68859 1.46899 7.13859C1.11517 6.19263 0.985816 5.45562 1.04288 4.7604C1.08093 4.31591 1.25214 3.94741 1.56791 3.63209L2.86527 2.33662C3.05169 2.16187 3.24953 2.06689 3.44356 2.06689C3.68324 2.06689 3.87728 2.21125 3.99902 2.33282L4.01044 2.34422C4.24251 2.56076 4.46318 2.78491 4.69526 3.02424C4.8132 3.14581 4.93494 3.26738 5.05669 3.39275L6.09533 4.42988C6.49861 4.83258 6.49861 5.20488 6.09533 5.60758C5.985 5.71775 5.87847 5.82792 5.76814 5.9343C5.44856 6.26101 5.14419 6.56494 4.8132 6.86126C4.80559 6.86886 4.79798 6.87266 4.79417 6.88025C4.46698 7.20697 4.52786 7.52609 4.59634 7.74263L4.60775 7.77682C4.87787 8.43026 5.25833 9.0457 5.83662 9.77891L5.84043 9.78271C6.89048 11.0744 7.99761 12.0811 9.21887 12.8523C9.37486 12.9511 9.53465 13.0309 9.68683 13.1069C9.82379 13.1752 9.95315 13.2398 10.0635 13.3082C10.0787 13.3158 10.0939 13.3272 10.1091 13.3348C10.2385 13.3994 10.3602 13.4298 10.4858 13.4298C10.8016 13.4298 10.9994 13.2322 11.0641 13.1676L12.3652 11.8684C12.4946 11.7392 12.7 11.5834 12.9397 11.5834C13.1756 11.5834 13.3696 11.7316 13.4876 11.8608L13.4952 11.8684L15.5915 13.9616C15.9834 14.3491 15.9834 14.748 15.5953 15.1507ZM9.72868 4.28172C10.7255 4.44888 11.631 4.91996 12.3538 5.64177C13.0767 6.36359 13.5446 7.26775 13.7159 8.2631C13.7577 8.51383 13.9746 8.68859 14.2219 8.68859C14.2523 8.68859 14.2789 8.68479 14.3094 8.68099C14.5909 8.6354 14.7773 8.36947 14.7317 8.08834C14.5262 6.88405 13.9555 5.78614 13.0843 4.91616C12.2131 4.04618 11.1135 3.47633 9.90749 3.27118C9.62596 3.22559 9.36344 3.41175 9.31398 3.68907C9.26452 3.9664 9.44714 4.23613 9.72868 4.28172ZM17.9922 7.94018C17.6536 5.95709 16.7176 4.15255 15.2795 2.71652C13.8414 1.28049 12.0342 0.345932 10.0483 0.00781895C9.77053 -0.0415684 9.50802 0.148383 9.45856 0.425712C9.4129 0.70684 9.59932 0.968972 9.88086 1.01836C11.6538 1.31848 13.2707 2.15807 14.5567 3.43834C15.8426 4.72241 16.6796 6.33699 16.9802 8.10734C17.022 8.35808 17.2389 8.53283 17.4862 8.53283C17.5166 8.53283 17.5432 8.52903 17.5737 8.52523C17.8514 8.48344 18.0416 8.21751 17.9922 7.94018Z" />
                        </svg>
                      </div>
                      <div className="contact">
                        <span>Phone</span>
                        <h6>
                          <a href="#">+991 - 763 684 4563</a>
                        </h6>
                      </div>
                    </li>
                    <li className="single-contact">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                        >
                          <path d="M0 4.5C0 3.90326 0.237053 3.33097 0.65901 2.90901C1.08097 2.48705 1.65326 2.25 2.25 2.25H15.75C16.3467 2.25 16.919 2.48705 17.341 2.90901C17.7629 3.33097 18 3.90326 18 4.5V13.5C18 14.0967 17.7629 14.669 17.341 15.091C16.919 15.5129 16.3467 15.75 15.75 15.75H2.25C1.65326 15.75 1.08097 15.5129 0.65901 15.091C0.237053 14.669 0 14.0967 0 13.5V4.5ZM2.25 3.375C1.95163 3.375 1.66548 3.49353 1.4545 3.7045C1.24353 3.91548 1.125 4.20163 1.125 4.5V4.74413L9 9.46912L16.875 4.74413V4.5C16.875 4.20163 16.7565 3.91548 16.5455 3.7045C16.3345 3.49353 16.0484 3.375 15.75 3.375H2.25ZM16.875 6.05587L11.5785 9.234L16.875 12.4931V6.05587ZM16.8367 13.7914L10.4918 9.8865L9 10.7809L7.50825 9.8865L1.16325 13.7903C1.22718 14.0296 1.36836 14.2412 1.56486 14.3922C1.76137 14.5431 2.00221 14.625 2.25 14.625H15.75C15.9976 14.625 16.2384 14.5434 16.4349 14.3926C16.6313 14.2419 16.7726 14.0306 16.8367 13.7914ZM1.125 12.4931L6.4215 9.234L1.125 6.05587V12.4931Z" />
                        </svg>
                      </div>
                      <div className="contact">
                        <span>Email Now</span>
                        <h6>
                          <a href="#">info@examplegmail.com</a>
                        </h6>
                      </div>
                    </li>
                    <li className="single-contact">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={18}
                          viewBox="0 0 14 18"
                        >
                          <path d="M11.8603 10.0575C11.249 11.2522 10.4207 12.4425 9.57367 13.5113C8.77018 14.5188 7.91105 15.484 7 16.4025C6.08893 15.484 5.2298 14.5188 4.42633 13.5113C3.57933 12.4425 2.751 11.2522 2.13967 10.0575C1.52133 8.85037 1.16667 7.71975 1.16667 6.75C1.16667 5.25816 1.78125 3.82742 2.87521 2.77252C3.96917 1.71763 5.4529 1.125 7 1.125C8.5471 1.125 10.0308 1.71763 11.1248 2.77252C12.2188 3.82742 12.8333 5.25816 12.8333 6.75C12.8333 7.71975 12.4775 8.85037 11.8603 10.0575ZM7 18C7 18 14 11.6033 14 6.75C14 4.95979 13.2625 3.2429 11.9497 1.97703C10.637 0.711159 8.85652 0 7 0C5.14348 0 3.36301 0.711159 2.05025 1.97703C0.737498 3.2429 2.76642e-08 4.95979 0 6.75C0 11.6033 7 18 7 18Z" />
                          <path d="M7 9C6.38116 9 5.78767 8.76295 5.35008 8.34099C4.9125 7.91903 4.66667 7.34674 4.66667 6.75C4.66667 6.15326 4.9125 5.58097 5.35008 5.15901C5.78767 4.73705 6.38116 4.5 7 4.5C7.61884 4.5 8.21233 4.73705 8.64992 5.15901C9.0875 5.58097 9.33333 6.15326 9.33333 6.75C9.33333 7.34674 9.0875 7.91903 8.64992 8.34099C8.21233 8.76295 7.61884 9 7 9ZM7 10.125C7.92826 10.125 8.8185 9.76942 9.47487 9.13649C10.1313 8.50355 10.5 7.64511 10.5 6.75C10.5 5.85489 10.1313 4.99645 9.47487 4.36351C8.8185 3.73058 7.92826 3.375 7 3.375C6.07174 3.375 5.1815 3.73058 4.52513 4.36351C3.86875 4.99645 3.5 5.85489 3.5 6.75C3.5 7.64511 3.86875 8.50355 4.52513 9.13649C5.1815 9.76942 6.07174 10.125 7 10.125V10.125Z" />
                        </svg>
                      </div>
                      <div className="contact">
                        <h6>
                          Canada City, Office-02, Road-11, House-3B/B, Section-H
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="social-link-area">
                  <h6>
                    Social Link
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </h6>
                  <ul className="social-area">
                    <li>
                      <a href="#">
                        <i className="bi bi-dribbble" /> Dribbble
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-behance" /> Behance
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-pinterest" /> Pinterest
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook" /> Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        ref={headerRef}
        className={`header-area style-1 ${state.scrollY > 10 ? "sticky" : ""}`}
      >
        <div className="container d-flex flex-nowrap align-items-center justify-content-between">
          <div className="company-logo">
            <Link href="/" className="logo-dark">
              <img
                alt="image"
                className="img-fluid"
                src="assets/img/logo.svg"
              />
            </Link>
            <Link href="/" className="logo-light">
              <img
                alt="image"
                className="img-fluid"
                src="assets/img/logo-light.svg"
              />
            </Link>
          </div>
          <div className="main-menu d-lg-flex d-none">
            <ul className="menu-list">
              {navData.map((data) => {
                const { id, label, link, icon, subMenu } = data;
                return (
                  <li
                    key={id}
                    className={`${
                      icon === true ? "menu-item-has-children" : ""
                    }`}
                  >
                    <Link href={link} className="drop-down">
                      {label}
                    </Link>
                    {icon && (
                      <i
                        onClick={() => toggleMenu(label)}
                        className={`bi bi-${
                          state.activeMenu === label ? "dash" : "plus"
                        } dropdown-icon`}
                      />
                    )}

                    {subMenu && (
                      <ul
                        className={`sub-menu ${
                          state.activeMenu === label ? "d-block" : ""
                        }`}
                      >
                        {subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link legacyBehavior href={subItem.link}>
                              <a>{subItem.label}</a>
                            </Link>
                            {subItem.icon && subItem.icon ? (
                              <>
                                <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                                <i
                                  onClick={() => toggleSubMenu(subItem.label)}
                                  className={`d-lg-none d-flex bi bi-${
                                    state.activeSubMenu === subItem.label
                                      ? "dash"
                                      : "plus"
                                  } dropdown-icon `}
                                />
                              </>
                            ) : (
                              ""
                            )}
                            {subItem.subMenu && (
                              <ul
                                className={`sub-menu ${
                                  state.activeSubMenu === subItem.label
                                    ? "d-block"
                                    : ""
                                }`}
                              >
                                {subItem.subMenu.map((subItem, subIndex) => (
                                  <li key={subItem.id}>
                                    <Link legacyBehavior href={subItem.link}>
                                      <a>{subItem.label}</a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav-right d-flex jsutify-content-end align-items-center">
            <div className="right-sidebar-and-hotline-area">
              <div className="hotline-area d-xl-flex d-none">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                  >
                    <path d="M21.4233 16.9723L16.9701 14.0025C16.4049 13.6286 15.6474 13.7516 15.2296 14.2851L13.9324 15.953C13.8518 16.0593 13.7355 16.133 13.6049 16.1605C13.4743 16.1879 13.3382 16.1674 13.2215 16.1026L12.9748 15.9666C12.1568 15.5207 11.139 14.9656 9.08843 12.9143C7.03782 10.863 6.48163 9.84441 6.03578 9.02794L5.90048 8.78119C5.8348 8.66457 5.81347 8.52814 5.84042 8.39704C5.86736 8.26593 5.94077 8.14897 6.04712 8.06771L7.71384 6.77093C8.24713 6.35309 8.37031 5.59578 7.9969 5.03048L5.02713 0.577286C4.64443 0.00163523 3.87664 -0.171172 3.28419 0.184969L1.42202 1.30357C0.836918 1.64754 0.407665 2.20464 0.224235 2.85811C-0.446327 5.30138 0.0581298 9.51809 6.26973 15.7304C11.2109 20.6712 14.8894 21.9999 17.4178 21.9999C17.9997 22.0024 18.5792 21.9267 19.141 21.7748C19.7946 21.5916 20.3517 21.1623 20.6955 20.5771L21.8152 18.716C22.1719 18.1234 21.9992 17.3552 21.4233 16.9723ZM21.1835 18.3398L20.0663 20.202C19.8194 20.6244 19.4187 20.935 18.9481 21.0687C16.6925 21.688 12.7519 21.175 6.78849 15.2117C0.825106 9.24827 0.312228 5.308 0.931488 3.05209C1.06539 2.58083 1.37635 2.17961 1.7993 1.93237L3.66147 0.815229C3.91853 0.660553 4.25177 0.735528 4.41783 0.985329L6.03106 3.40733L7.38507 5.43814C7.54722 5.68334 7.49394 6.01198 7.26262 6.19343L5.59552 7.49021C5.08818 7.87814 4.9433 8.58007 5.25566 9.13716L5.38804 9.37768C5.85662 10.2371 6.43918 11.3062 8.56606 13.4327C10.6929 15.5592 11.7617 16.1418 12.6207 16.6104L12.8616 16.7431C13.4186 17.0554 14.1206 16.9106 14.5085 16.4032L15.8053 14.7361C15.9868 14.5049 16.3153 14.4517 16.5606 14.6137L21.0134 17.5834C21.2634 17.7494 21.3384 18.0828 21.1835 18.3398ZM12.4659 3.66805C15.9066 3.67187 18.6949 6.4602 18.6988 9.90091C18.6988 10.1034 18.8629 10.2675 19.0654 10.2675C19.2679 10.2675 19.432 10.1034 19.432 9.90091C19.4278 6.05538 16.3114 2.93901 12.4659 2.9348C12.2634 2.9348 12.0993 3.09893 12.0993 3.30142C12.0993 3.50392 12.2634 3.66805 12.4659 3.66805Z" />
                    <path d="M12.4653 5.86759C14.6916 5.87021 16.4957 7.67433 16.4983 9.90062C16.4983 9.99786 16.5369 10.0911 16.6057 10.1599C16.6744 10.2286 16.7677 10.2672 16.8649 10.2672C16.9622 10.2672 17.0554 10.2286 17.1242 10.1599C17.1929 10.0911 17.2315 9.99786 17.2315 9.90062C17.2285 7.26951 15.0963 5.13735 12.4653 5.13434C12.2628 5.13434 12.0986 5.29847 12.0986 5.50096C12.0986 5.70346 12.2628 5.86759 12.4653 5.86759Z" />
                    <path d="M12.4653 8.06738C13.4772 8.06859 14.2972 8.88863 14.2985 9.90059C14.2985 9.99783 14.3371 10.0911 14.4058 10.1598C14.4746 10.2286 14.5679 10.2672 14.6651 10.2672C14.7623 10.2672 14.8556 10.2286 14.9243 10.1598C14.9931 10.0911 15.0317 9.99783 15.0317 9.90059C15.0301 8.48385 13.882 7.33573 12.4653 7.33414C12.2628 7.33414 12.0986 7.49827 12.0986 7.70076C12.0986 7.90326 12.2628 8.06738 12.4653 8.06738Z" />
                  </svg>
                </div>
                <div className="content">
                  <span>Any Question</span>
                  <h6>
                    <Link href="tel:+990737621432">+990-737 621 432</Link>
                  </h6>
                </div>
              </div>
              <div className="sidebar-btn" onClick={toggleRightSidebar}>
                <svg
                  className="open"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                >
                  <g>
                    <path d="M6.79688 9.375H2.57812C1.15652 9.375 0 8.21848 0 6.79688V2.57812C0 1.15652 1.15652 0 2.57812 0H6.79688C8.21848 0 9.375 1.15652 9.375 2.57812V6.79688C9.375 8.21848 8.21848 9.375 6.79688 9.375ZM2.57812 1.25C1.84578 1.25 1.25 1.84578 1.25 2.57812V6.79688C1.25 7.52922 1.84578 8.125 2.57812 8.125H6.79688C7.52922 8.125 8.125 7.52922 8.125 6.79688V2.57812C8.125 1.84578 7.52922 1.25 6.79688 1.25H2.57812ZM17.4219 9.375H13.2031C11.7815 9.375 10.625 8.21848 10.625 6.79688V2.57812C10.625 1.15652 11.7815 0 13.2031 0H17.4219C18.8435 0 20 1.15652 20 2.57812V6.79688C20 8.21848 18.8435 9.375 17.4219 9.375ZM13.2031 1.25C12.4708 1.25 11.875 1.84578 11.875 2.57812V6.79688C11.875 7.52922 12.4708 8.125 13.2031 8.125H17.4219C18.1542 8.125 18.75 7.52922 18.75 6.79688V2.57812C18.75 1.84578 18.1542 1.25 17.4219 1.25H13.2031ZM15.3125 20C12.7278 20 10.625 17.8972 10.625 15.3125C10.625 12.7278 12.7278 10.625 15.3125 10.625C17.8972 10.625 20 12.7278 20 15.3125C20 17.8972 17.8972 20 15.3125 20ZM15.3125 11.875C13.4171 11.875 11.875 13.4171 11.875 15.3125C11.875 17.2079 13.4171 18.75 15.3125 18.75C17.2079 18.75 18.75 17.2079 18.75 15.3125C18.75 13.4171 17.2079 11.875 15.3125 11.875ZM6.79688 20H2.57812C1.15652 20 0 18.8435 0 17.4219V13.2031C0 11.7815 1.15652 10.625 2.57812 10.625H6.79688C8.21848 10.625 9.375 11.7815 9.375 13.2031V17.4219C9.375 18.8435 8.21848 20 6.79688 20ZM2.57812 11.875C1.84578 11.875 1.25 12.4708 1.25 13.2031V17.4219C1.25 18.1542 1.84578 18.75 2.57812 18.75H6.79688C7.52922 18.75 8.125 18.1542 8.125 17.4219V13.2031C8.125 12.4708 7.52922 11.875 6.79688 11.875H2.57812Z" />
                  </g>
                </svg>
              </div>
              <div className="sidebar-button mobile-menu-btn d-none">
                <span />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;

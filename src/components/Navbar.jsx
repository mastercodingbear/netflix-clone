/// MODULES
import { connect } from "react-redux";
import { changeIsLoggedIn } from "../redux/actions";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

/// IMAGES
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.webp";

/// STYLES
import "../styles/navbar.sass";
import "../styles/mob-nav-menu.sass";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { changeIsLoggedIn })(
  function MainNavbar({ changeIsLoggedIn, isUserLoggedIn }) {
    const location = useLocation();

    const nav = useRef();
    const menu = useRef();
    const menu_nav = useRef();
    const home = useRef();
    const home_nav = useRef();

    const [currentPage, setCurrentPage] = useState(null);
    const [navFixed, setNavFixed] = useState(false);
    const [scrollY, setscrollY] = useState(0);

    const setActiveClass = () => {
      [...nav.current.children].map((el) => {
        el.children[0].classList.remove("active");
        if (currentPage === "") {
          home.current.classList.add("active");
        }
        if (currentPage && el.children[0].innerHTML === currentPage) {
          el.children[0].classList.add("active");
        }
      });

      [...menu_nav.current.children].map((el) => {
        el.classList.remove("active");
        if (currentPage === "") {
          home_nav.current.classList.add("active");
        }
        if (currentPage && el.children[0].innerHTML === currentPage) {
          el.classList.add("active");
        }
      });
    };

    const closeModal = () => {
      menu.current.classList.remove("show");
    };

    document.addEventListener("scroll", () => {
      setscrollY(window.scrollY);
    });
    useEffect(() => {
      setCurrentPage(location.pathname.split("/")[1]);
    }, [location]);
    useEffect(() => {
      setActiveClass();
    }, [currentPage]);
    useEffect(() => {
      if (scrollY > 120) {
        setNavFixed(true);
      } else if (scrollY <= 120) {
        setNavFixed(false);
      }
    }, [scrollY]);

    return (
      <>
        <div className="mob-nav-menu d-lg-none" ref={menu}>
          <header>
            <div className="row align-items-center">
              <div className="col">
                <Link to="/" className="brand-link me-4">
                  <img
                    width={120}
                    src={logo}
                    alt="netflix logo"
                    title="NETFLIX"
                  />
                </Link>
              </div>
              <div className="col text-end">
                <button
                  className="p-0 nav-menu-btn"
                  onClick={() => {
                    menu.current.classList.remove("show");
                  }}
                >
                  <i className="fal fa-2x fa-times text-white"></i>
                </button>
              </div>
            </div>
          </header>
          <ul ref={menu_nav}>
            <li ref={home_nav}>
              <Link onClick={closeModal} to={"/"}>
                home
              </Link>
            </li>
            <li>
              <Link onClick={closeModal} to={"/movies"}>
                movies
              </Link>
            </li>
            <li>
              <Link onClick={closeModal} to={"/series"}>
                series
              </Link>
            </li>
            <li>
              <Link onClick={closeModal} to={"/people"}>
                people
              </Link>
            </li>
            <li>
              <Link onClick={closeModal} to={"/favourites"}>
                favourites
              </Link>
            </li>
          </ul>
        </div>
        <div className="mob-navbar d-lg-none">
          <Link to={"/"} className="home-btn navbar-btn ">
            <i className="fal fa-home"></i>
          </Link>
          <Link to={"/search"} className="search-btn navbar-btn">
            <i className="fal fa-search"></i>
          </Link>
          {!isUserLoggedIn ? (
            <button
              className="login_signup-link navbar-btn "
              onClick={changeIsLoggedIn}
            >
              <i className="fal fa-user"></i>
            </button>
          ) : (
            <>
              <Link className=" navbar-btn user-avatar" to="/account">
                <img className="avatar-img" src={avatar} alt={"avatar"} />
              </Link>
              <Link to={"/favourites"} className="favourites-btn navbar-btn">
                <i className="fal fa-heart"></i>
              </Link>
              <button className=" navbar-btn" onClick={changeIsLoggedIn}>
                <i className="fal fa-power-off"></i>
              </button>
            </>
          )}
        </div>
        <nav className={navFixed ? "invert nav-top-fixed" : null}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col navbar-left-area">
                <Link to="/" className="brand-link me-4">
                  <img
                    width={120}
                    src={logo}
                    alt="netflix logo"
                    title="NETFLIX"
                  />
                </Link>
                <ul className="navbar-short-links d-none d-lg-flex" ref={nav}>
                  <li className="nav-item">
                    <Link to="/" className="nav-link" ref={home}>
                      home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/movies" className="nav-link">
                      movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/series" className="nav-link">
                      series
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/people" className="nav-link">
                      people
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/favourites" className="nav-link">
                      favourites
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col navbar-right-area">
                <div className="d-none d-lg-flex">
                  <Link
                    to={"/search"}
                    title="Search"
                    className="search-btn navbar-btn"
                  >
                    <i className="fal fa-search"></i>
                  </Link>
                  {!isUserLoggedIn ? (
                    <button
                      className="login_signup-link ms-4"
                      onClick={changeIsLoggedIn}
                    >
                      login
                    </button>
                  ) : (
                    <>
                      <Link className="ms-4 navbar-btn user-avatar" to="/">
                        <img
                          className="avatar-img"
                          src={avatar}
                          alt={"avatar"}
                          title="Account"
                        />
                      </Link>
                      <button
                        title="Logout"
                        className="ms-4 navbar-btn"
                        onClick={changeIsLoggedIn}
                      >
                        <i className="fal fa-power-off"></i>
                      </button>
                    </>
                  )}
                </div>
                <div className="d-lg-none">
                  <button
                    className="p-0 nav-menu-btn"
                    onClick={() => {
                      menu.current.classList.add("show");
                    }}
                  >
                    <i className="fal fa-2x fa-bars text-white"></i>
                  </button>
                </div>
               </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
);

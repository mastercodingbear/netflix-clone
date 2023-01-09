/// MODULES
import React from "react";
import { Link } from "react-router-dom";

/// IMAGES
import logo from "../assets/images/logo.svg";

/// STYLES
import "../styles/main-menu.sass";

export default function MainMenu() {
  return (
    <>
      <div className="main-menu pt-4">
        <div className="container">
          <div className="row">
            <div className="my-4 col-sm-6 col-md-3 col-12">
              <Link to="/" className="brand-link mb-3">
                <img
                  width={120}
                  src={logo}
                  alt="netflix logo"
                  title="NETFLIX"
                />
              </Link>
            </div>
            <div className="my-4 col-sm-6 col-md-3 col-12">
              <Link className="head-link" to="/movies">
                movies
              </Link>
              <ul className="nav-list">
                <li>
                  <Link to={"/movies"}>Popular Movies</Link>
                </li>
                <li>
                  <Link to={"/movies/now_playing"}>Now Playing Movies</Link>
                </li>
                <li>
                  <Link to={"/movies/top_rated"}>Top Rated Movies</Link>
                </li>
                <li>
                  <Link to={"/movies/upcoming"}>Upcoming Movies</Link>
                </li>
              </ul>
            </div>
            <div className="my-4 col-sm-6 col-md-3 col-12">
              <Link className="head-link" to="/series">
                series
              </Link>
              <ul className="nav-list">
                <li>
                  <Link to={"/series"}>Popular Series</Link>
                </li>
                <li>
                  <Link to={"/series/airing_today"}>Airing Today Series</Link>
                </li>
                <li>
                  <Link to={"/series/top_rated"}>Top Rated Series</Link>
                </li>
                <li>
                  <Link to={"/series/on_tv"}>On Tv Series</Link>
                </li>
              </ul>
            </div>
            <div className="my-4 col-sm-6 col-md-3  col-12">
              <ul className="social-links">
                <li>
                  <a
                    href="https://github.com/mastercodingbear"
                    target={"_blank"}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://join.skype.com/invite/JmNrWxIrLmAO"
                    target={"_blank"}
                  >
                    <i className="fab fa-skype"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ren-yoshida/"
                    target={"_blank"}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <p>
                All rights reserved by
                <a
                  className="rights"
                  href="https://bluelotus.vercel.app"
                  target={"_blank"}
                >
                  Ren Yoshida
                </a>{" "}
                © 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../styles/mob-nav-menu.sass";

import logo from "../assets/images/logo.svg";

export default function MobileNavMenu() {
  return (
    <div className="mob-nav-menu d-lg-none">
      <header>
        <div className="row align-items-center">
          <div className="col">
            <Link to="/" className="brand-link me-4">
              <img width={120} src={logo} alt="netflix logo" title="NETFLIX" />
            </Link>
          </div>
          <div className="col text-end">
            <button className="p-0 nav-menu-btn">
              <i className="fal fa-2x fa-times text-white"></i>
            </button>
          </div>
        </div>
      </header>
      <ul>
        <li className="active">
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/movies"}>Movies</Link>
        </li>
        <li>
          <Link to={"/series"}>Series</Link>
        </li>
        <li>
          <Link to={"/people"}>People</Link>
        </li>
        <li>
          <Link to={"/favourites"}>Favourites</Link>
        </li>
      </ul>
    </div>
  );
}

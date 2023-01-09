import React from "react";
import { Link } from "react-router-dom";
import netflix_icon from "../assets/images/icon.png";
import "../styles/movie_slider_view.sass";

export default function MovieOnSliderView({ trend }) {
  return (
    <Link
      to={`/${trend.title ? "movie" : "serie"}/${trend.id}`}
      className="trend_slider_view"
    >
      <img
        className="trend_backdrop_img"
        src={`http://image.tmdb.org/t/p/w500${trend.backdrop_path}`}
        alt="trend_backdrop"
      />
      <div className="work-category">
        <img width={25} height={20} src={netflix_icon} alt="netflix" />
        <span className="ms-1">
          {trend.media_type !== "movie" ? "series" : "movies"}
        </span>
      </div>
      <div className="work-title">{trend.title || trend.name}</div>
      <span className="work-language">{trend.original_language}</span>
    </Link>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import WorkScore from "./WorkScore";
import "../styles/movie_serie_view.sass";

export default function MovieSerieView({ work }) {
  return (
    <div
      title={work.title || work.name}
      key={work.id}
      className="MovieSerieView mt-2"
    >
      <WorkScore
        score={
          work.profile_path
            ? Math.floor(work.popularity)
            : work.vote_average * 10 || 0
        }
      />
      <span className="ribbon-container">
        <div className="ribbon">{work.original_language || "N/A"}</div>
      </span>
      <div className="poster-img-container">
        <Link
          to={
            work.profile_path
              ? `/person/${work.id}`
              : `/${work.title ? "movie" : "serie"}/${work.id}`
          }
        >
          <img
            className="work-poster"
            src={
              work.poster_path || work.profile_path
                ? `https://www.themoviedb.org/t/p/w220_and_h330_face${
                    work.poster_path || work.profile_path
                  }`
                : `https://via.placeholder.com/220X330/fff/FF2530.png?text=NOT_AVAILABLE`
            }
            alt="poster"
          />
        </Link>

        <Link
          to={`/${
            work.profile_path ? "person" : work.title ? "movie" : "serie"
          }/${work.id}`}
          className="overlay"
        ></Link>
        <Link
          className="watch-btn"
          title={
            work.profile_path ? work.name : `Watch ${work.title || work.name}`
          }
          to={
            work.profile_path
              ? `/person/${work.id}`
              : `/watch/${work.title ? "movie" : "serie"}/${work.id}/${
                  work.name ? "season/1/episode/1" : ""
                }`
          }
        >
          {work.profile_path ? (
            <i className="fal fa-eye fa-2x"></i>
          ) : (
            <i className="fal fa-play-circle fa-3x"></i>
          )}
        </Link>
      </div>
      <div className="work-info">
        <Link
          to={
            work.profile_path
              ? `/person/${work.id}`
              : `/${work.title ? "movie" : "serie"}/${work.id}`
          }
        >
          <p className="work-title">{work.title || work.name}</p>
        </Link>
        <p className="m-0 work-date">
          {work.release_date ||
            work.first_air_date ||
            work.character ||
            work.known_for_department}
        </p>
      </div>
    </div>
  );
}

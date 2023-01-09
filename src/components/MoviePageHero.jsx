import React from "react";

import work_bg from "../assets/images/work-bg.jpg";
import WorkScore from "./WorkScore";
import { Link } from "react-router-dom";

export default function MoviePageHero({ movie, btns }) {
  return (
    <div className="movie-details-page">
      <div className="movie-page-hero">
        <div className="movie-backdrop">
          <img
            className="movie-backdrop-img"
            src={
              movie.backdrop_path
                ? `https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${movie.backdrop_path}`
                : work_bg
            }
            alt="backdrop-img"
          />
        </div>
        <div className="fluid-overlay"></div>
        <div className="movie-hero-content">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="offset-1 col-3 d-none d-lg-block">
                <div className="movie-poster">
                  <img
                    src={
                      movie?.poster_path
                        ? `https://www.themoviedb.org/t/p/w440_and_h660_face${movie?.poster_path}`
                        : `https://via.placeholder.com/440X660/FF2530/fff.png?text=NOT_AVAILABLE`
                    }
                    alt="movie-poster"
                    className="movie-poster-img"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="movie-information">
                  <h1 className="pb-3 movie-title">
                    {movie.title || "N/A"}
                    <span
                      className="movie-release-date
                      "
                    >
                      {movie.release_date
                        ? `(${movie.release_date?.split("-")[0]})`
                        : null}
                    </span>
                  </h1>
                  <div className="work-info d-flex">
                    <span className="work-info-tag">{movie.release_date}</span>
                    <span className="work-info-tag age-class">
                      {movie?.release_dates?.results?.find((el) => {
                        return el?.release_dates?.find((el) => {
                          return el?.certification !== "";
                        });
                      })?.release_dates[0]?.certification || "N/A"}
                    </span>
                    {movie.genres?.map((el) => {
                      return (
                        <span key={el.id} className="work-info-tag">
                          {el.name}
                        </span>
                      );
                    })}
                  </div>
                  <div className="user-actions py-4">
                    <WorkScore score={movie?.vote_average * 10} />
                  </div>
                  <span className="tagline">{movie.tagline}</span>
                  <div className="work-description  py-3">{movie.overview}</div>
                  {btns ? (
                    <div className="work-actions-btns">
                      <Link
                        to={`/watch/movie/${movie.id}`}
                        className="btn me-3"
                      >
                        <i className="fal fa-play me-3"></i>
                        play
                      </Link>
                      {movie?.homepage ? (
                        <a
                          href={movie?.homepage}
                          target="_blank"
                          className="btn me-3 info-link-btn"
                        >
                          Visit Website
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

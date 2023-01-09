import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../redux/actions";
import "../styles/movie_details_page.sass";
import CastSlider from "./CastSlider";
import ReviewItem from "./ReviewItem";
import MoviePageHero from "./MoviePageHero";
import LoadWrapper from "./LoadWrapper";
import _ from "lodash";
import _404 from "./_404";
import scrollToTop from "../helpers/scrollToTop";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getMovieById })(
  function MovieDetails({ movie, getMovieById }) {
    const { id } = useParams();
    const [ready, setReady] = useState("loading");

    useEffect(() => {
      document.title = `NETFLIX | Loading ...`;
      scrollToTop();
      return () => {
        scrollToTop();
      };
    }, []);
    useEffect(() => {
      getMovieById(id);
    }, [id]);

    useEffect(() => {
      if (movie.success === false) {
        document.title = `NETFLIX | 404 NOT FOUND`;
        setReady("404");
      } else if (!movie.success && movie.title) {
        document.title = `NETFLIX | ${movie.title}`;
        setReady("ready");
      } else {
        setReady("loading");
      }
    }, [movie]);

    useEffect(() => {
      if (ready === "loading") {
        document.title = `NETFLIX | Loading ...`;
      }
    }, [ready]);

    if (ready === "404") return <_404 />;
    if (ready === "loading") return <LoadWrapper ready={ready} />;
    if (ready === "ready")
      return (
        <>
          <div className="movie-details-page">
            <MoviePageHero btns={true} movie={movie} />
            <div className="work-details-area">
              <div className="container pt-5">
                <div className="row">
                  <div className="col-12 col-lg-9">
                    <div className="work-main-data">
                      {(() => {
                        return (
                          <div className="movie-trailer">
                            <h5 className="mb-4">Movie Trailer</h5>
                            <div className="trailer-area mb-5">
                              <iframe
                                src={`https://www.youtube-nocookie.com/embed/${movie?.videos?.results[0]?.key}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        );
                      })()}

                      <CastSlider
                        title={movie?.title}
                        cast={movie?.credits?.cast?.filter((el) => {
                          return el.profile_path;
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 pt-5">
                    <div className="work-facts">
                      <div className="work-social-links mb-4 d-flex">
                        <a
                          title="Visit IMDB"
                          className="me-5"
                          target="_blank"
                          href={`https://www.imdb.com/title/${movie?.external_ids?.imdb_id}`}
                        >
                          <i className="fab fa-imdb"></i>
                        </a>
                        {movie?.external_ids?.facebook_id ? (
                          <a
                            title="Visit Facebook"
                            className="me-5"
                            href={`http://facebook.com/${movie?.external_ids?.facebook_id}`}
                            target="_blank"
                          >
                            <i className="fab fa-facebook-square"></i>
                          </a>
                        ) : null}
                        {movie?.external_ids?.twitter_id ? (
                          <a
                            title="Visit Twitter"
                            className="me-5"
                            href={`http://twitter.com/${movie?.external_ids?.twitter_id}`}
                            target="_blank"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        ) : null}
                        {movie?.external_ids?.instagram_id ? (
                          <a
                            title="Visit Instagram"
                            className="me-5"
                            href={`http://instagram.com/${movie?.external_ids?.instagram_id}`}
                            target="_blank"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        ) : null}
                      </div>
                      <div className="work-info-item py-2">
                        <p className="title">Status</p>
                        <p className="value">{movie.status || "N/A"}</p>
                      </div>
                      <div className="work-info-item py-2">
                        <p className="title">Original Language</p>
                        <p className="value">
                          {movie.original_language || "N/A"}
                        </p>
                      </div>
                      <div className="work-info-item py-2">
                        <p className="title">Budget</p>
                        <p className="value">
                          {!movie.budget ? "N/A" : `$ ${movie.budget}`}
                        </p>
                      </div>
                      <div className="work-info-item py-2">
                        <p className="title">Revenue</p>
                        <p className="value">
                          {!movie.revenue ? "N/A" : `$ ${movie.revenue}`}
                        </p>
                      </div>

                      {(() => {
                        if (movie?.keywords) {
                          <div className="work-info-item py-4">
                            <p className="title">Keywords</p>
                            <ul className="works-keywords">
                              {movie.keywords?.keywords.map((el) => {
                                return (
                                  <li
                                    key={el.id}
                                    className="badge bg-secondary"
                                  >
                                    {el.name}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>;
                        }
                      })()}

                      {(() => {
                        if (movie?.production_companies?.length) {
                          return (
                            <div className="work-info-item py-4">
                              <p className="title">Production</p>
                              <ul className="works-keywords">
                                {movie?.production_companies
                                  ?.filter((el) => {
                                    return el.logo_path;
                                  })
                                  .map((el) => {
                                    return (
                                      <li className="my-3 me-3" key={el.id}>
                                        <img
                                          className="network-img"
                                          src={`https://www.themoviedb.org/t/p/h30/${el.logo_path}`}
                                          alt={el.name}
                                        />
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          );
                        }
                      })()}

                      {(() => {
                        return (
                          <div className="work-info-item py-4">
                            <p className="title mb-4">{`Reviews (${
                              movie?.reviews?.results?.length || 0
                            })`}</p>
                            <ul className="works-keywords reviews-container">
                              {movie?.reviews?.results.length ? (
                                movie.reviews.results.map((rev) => {
                                  return (
                                    <ReviewItem
                                      invert={false}
                                      key={rev.id}
                                      review={rev}
                                      avatarCol={3}
                                      body={9}
                                    >
                                      {rev.content}
                                    </ReviewItem>
                                  );
                                })
                              ) : (
                                <li className="my-2">
                                  We don't have any reviews for {movie.title}.
                                </li>
                              )}
                            </ul>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
  }
);

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getSerieById } from "../redux/actions";
import "../styles/movie_details_page.sass";
import CastSlider from "./CastSlider";
import SeasonItem from "./SeasonItem";
import ReviewItem from "./ReviewItem";
import SeriePageHero from "./SeriePageHero";
import LoadWrapper from "./LoadWrapper";
import _ from "lodash";
import _404 from "./_404";
import scrollToTop from "../helpers/scrollToTop";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getSerieById })(
  function SerieDetails({ serie, getSerieById }) {
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
      getSerieById(id);
    }, [id]);

    useEffect(() => {
      if (serie.success === false) {
        document.title = `NETFLIX | 404 NOT FOUND`;
        setReady("404");
      } else if (!serie.success && serie.name) {
        document.title = `NETFLIX | ${serie.name}`;
        setReady("ready");
      } else {
        setReady("loading");
      }
    }, [serie]);

    useEffect(() => {
      if (ready === "loading") {
        document.title = `NETFLIX | Loading ...`;
      }
    }, [ready]);

    const renderSeasons = () => {
      return serie?.seasons?.map((season) => {
        if (season.season_number > 0) {
          return (
            <SeasonItem key={season.name} season={season} serieID={serie?.id} />
          );
        }
      });
    };
    if (ready === "404") return <_404 />;
    if (ready === "loading") return <LoadWrapper ready={ready}></LoadWrapper>;
    if (ready === "ready")
      return (
        <div className="movie-details-page">
          <SeriePageHero serie={serie} btns={true} />
          <div className="work-details-area pt-5">
            <div className="container mb-5">
              <div className="row">
                <div className="col-12 col-lg-9">
                  <div className="work-main-data">
                    <div className="movie-trailer">
                      <h5 className="mb-4">Movie Trailer</h5>
                      <div className="trailer-area mb-5">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${serie?.videos?.results[0]?.key}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <CastSlider
                      title={serie?.name}
                      cast={serie?.credits?.cast?.filter((el) => {
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
                        href={`https://www.imdb.com/title/${serie?.external_ids?.imdb_id}`}
                      >
                        <i className="fab fa-imdb"></i>
                      </a>
                      {serie?.external_ids?.facebook_id ? (
                        <a
                          title="Visit Facebook"
                          className="me-5"
                          href={`http://facebook.com/${serie?.external_ids?.facebook_id}`}
                          target="_blank"
                        >
                          <i className="fab fa-facebook-square"></i>
                        </a>
                      ) : null}
                      {serie?.external_ids?.twitter_id ? (
                        <a
                          title="Visit Twitter"
                          className="me-5"
                          href={`http://twitter.com/${serie?.external_ids?.twitter_id}`}
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      ) : null}
                      {serie?.external_ids?.instagram_id ? (
                        <a
                          title="Visit Instagram"
                          className="me-5"
                          href={`http://instagram.com/${serie?.external_ids?.instagram_id}`}
                          target="_blank"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      ) : null}
                    </div>
                    <div className="work-info-item py-2">
                      <p className="title">Status</p>
                      <p className="value">{serie.status || "N/A"}</p>
                    </div>
                    <div className="work-info-item py-2">
                      <p className="title">Original Language</p>
                      <p className="value">{serie.original_language}</p>
                    </div>
                    <div className="work-info-item py-2">
                      <p className="title">Type</p>
                      <p className="value">{serie.type}</p>
                    </div>
                    <div className="work-info-item py-2">
                      <p className="title">Budget</p>
                      <p className="value">
                        {!serie.budget ? "N/A" : `$ ${serie.budget}`}
                      </p>
                    </div>
                    <div className="work-info-item py-2">
                      <p className="title">Revenue</p>
                      <p className="value">
                        {!serie.revenue ? "N/A" : `$ ${serie.revenue}`}
                      </p>
                    </div>
                    {(() => {
                      if (serie?.keywords?.results?.length) {
                        return (
                          <div className="work-info-item py-4">
                            <p className="title">Keywords</p>
                            <ul className="works-keywords">
                              {serie?.keywords?.results.map((el) => {
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
                          </div>
                        );
                      }
                    })()}
                    {(() => {
                      if (serie?.networks?.length) {
                        return (
                          <div className="work-info-item py-4">
                            <p className="title">Networks</p>
                            <ul className="works-keywords">
                              {serie?.networks?.map((el) => {
                                return (
                                  <li className="my-2 me-4" key={el.id}>
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
                      if (serie?.languages?.length) {
                        return (
                          <div className="work-info-item">
                            <p className="title">Languages</p>
                            <ul className="works-keywords">
                              {serie?.languages?.map((el) => {
                                return (
                                  <li
                                    key={el}
                                    className="badge uppercase bg-danger"
                                  >
                                    {el}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      }
                    })()}
                  </div>
                </div>
              </div>
            </div>
            <div className="serie-seasons-area py-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-8">
                    <h5 className="mb-4">Tv Show Seasons</h5>
                    <div className="container p-0">
                      <div className="row">{renderSeasons()}</div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    {(() => {
                      return (
                        <div className="work-info-item ">
                          <p className="title mb-4">{`Reviews (${
                            serie?.reviews?.results?.length || 0
                          })`}</p>
                          <ul className="works-keywords tv-show-reviews-container">
                            {serie?.reviews?.results.length ? (
                              serie.reviews.results.map((rev) => {
                                return (
                                  <ReviewItem
                                    avatarCol={3}
                                    body={9}
                                    key={rev.id}
                                    review={rev}
                                    invert={true}
                                  >
                                    {rev.content}
                                  </ReviewItem>
                                );
                              })
                            ) : (
                              <li className="my-2 pe-1">
                                We don't have any reviews for {serie.name}.
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
      );
  }
);

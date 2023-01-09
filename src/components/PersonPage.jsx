import React, { useEffect, useState } from "react";
import _404 from "./_404";
import LoadWrapper from "./LoadWrapper";
import { connect } from "react-redux";
import { getPersonById } from "../redux/actions";
import { useParams } from "react-router-dom";
import MovieSerieView from "./MovieSerieView";
import scrollToTop from "../helpers/scrollToTop";

import "../styles/person-page.sass";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getPersonById })(function PersonPage({
  getPersonById,
  person,
}) {
  const { id } = useParams();
  const [ready, setReady] = useState("loading");

  useEffect(() => {
    getPersonById(id);
    scrollToTop();
    return () => {
      scrollToTop();
    };
  }, [id]);

  useEffect(() => {
    if (person.status_code === 34) {
      setReady("404");
    }
    if (person.name) {
      setReady("ready");
      document.title = `NETFLIX | ${person.name}`;
    }
  }, [person]);

  if (ready === "loading") {
    document.title = `NETFLIX | Loading ...`;
    return <LoadWrapper />;
  }
  if (ready === "404") {
    document.title = `NETFLIX | 404 NOT FOUND`;
    return <_404 />;
  }
  if (ready === "ready") {
    return (
      <div className="person-page">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 col-lg-3">
              <div className="left-sidebar">
                <div className="person-profile mb-4">
                  <img
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`}
                    alt={person.name}
                  />
                </div>
                <ul className="person-socials">
                  <li>
                    <a
                      href={`https://imdb.com/name/${person.external_ids.imdb_id}`}
                      target={"_blank"}
                    >
                      <i className="fab fa-imdb"></i>
                    </a>
                  </li>
                  {person.external_ids.facebook_id ? (
                    <li>
                      <a
                        href={`https://facebook.com/${person.external_ids.facebook_id}`}
                        target={"_blank"}
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                  ) : null}
                  {person.external_ids.instagram_id ? (
                    <li>
                      <a
                        href={`https://instagram.com/${person.external_ids.instagram_id}`}
                        target={"_blank"}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  ) : null}
                  {person.external_ids.twitter_id ? (
                    <li>
                      <a
                        href={`https://twitter.com/${person.external_ids.twitter_id}`}
                        target={"_blank"}
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  ) : null}
                </ul>
                {person.also_known_as.length ? (
                  <div className="person-fact">
                    <label>Also Known As</label>
                    {person.also_known_as.map((el) => {
                      return <span key={el}>{`${el} , `}</span>;
                    })}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div className="person-works">
                <h3 className="person-name">{person.name}</h3>
                <div className="person-fact">
                  <label>Biography</label>
                  <p className="person-biography">
                    {person.biography || "N/A"}
                  </p>
                </div>
                <div className="person-facts-container">
                  <div className="person-fact">
                    <label>Known For</label>
                    <p>{person.known_for_department || "N/A"}</p>
                  </div>
                  <div className="person-fact">
                    <label>Known Credits</label>
                    <p>{person.combined_credits.cast.length}</p>
                  </div>
                  <div className="person-fact">
                    <label>Gender</label>
                    <p>
                      {(() => {
                        if (person.gender === 1) {
                          return "Female";
                        }
                        if (person.gender === 2) {
                          return "Male";
                        } else {
                          return "N/A";
                        }
                      })()}
                    </p>
                  </div>
                  <div className="person-fact">
                    <label>Birthday</label>
                    <p>{person.birthday || "N/A"}</p>
                  </div>
                  {person.deathday ? (
                    <div className="person-fact">
                      <label>Day of Death</label>
                      <p>{person.deathday || "N/A"}</p>
                    </div>
                  ) : null}
                  <div className="person-fact">
                    <label>Place of Birth</label>
                    <p>{person.place_of_birth || "N/A"}</p>
                  </div>
                </div>
                <div className="person-fact">
                  <label className="d-block">Known For</label>
                  <div className="works-container">
                    {person.combined_credits.cast.map((el) => {
                      if (el.poster_path) {
                        return <MovieSerieView work={el} />;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

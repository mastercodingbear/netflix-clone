import React, { useState, useEffect } from "react";
import MovieSerieView from "./MovieSerieView";
import LoadWrapper from "./LoadWrapper";
import _404 from "./_404";
import { getPeople } from "../redux/actions";
import { connect } from "react-redux";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import work_bg from "../assets/images/work-bg.jpg";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getPeople })(function PeoplePage({
  people,
  getPeople,
}) {
  const location = useLocation();
  const [ready, setReady] = useState("loading");
  const [page, setPage] = useState(null);

  useEffect(() => {
    setPage(+location.search.split("=")[1] || 1);
  }, [location]);

  useEffect(() => {
    getPeople(1);
  }, []);

  useEffect(() => {
    setReady("loading");
    if (page) getPeople(page);
  }, [page]);

  useEffect(() => {
    if (people.length) {
      if (people[0] === "page must be less than or equal to 500") {
        setReady("404");
        document.title = `NETFLIX | 404 NOT FOUND`;
      } else {
        setReady("ready");
        document.title = `NETFLIX | Popular People`;
      }
    }
  }, [people]);

  if (ready === "loading") {
    document.title = `NETFLIX | Loading ...`;
    return <LoadWrapper ready={ready} />;
  }
  if (ready === "404") {
    document.title = `NETFLIX | 404 NOT FOUND`;
    return <_404 />;
  }
  if (ready === "ready")
    return (
      <div
        className="people-container"
        style={{
          backgroundImage: `linear-gradient(#000000AA,#000),url(${work_bg})`,
          backgroundPosition: "top",
          paddingTop: "113px",
        }}
      >
        <div className="container pb-5">
          <div className="row">
            {people.map((el) => {
              if (el.profile_path)
                return (
                  <div
                    key={el.id}
                    className="my-3 col-6 col-sm-4 col-md-3 col-lg-2"
                  >
                    <div className="position-relative ">
                      <MovieSerieView work={el} />
                    </div>
                  </div>
                );
            })}
          </div>
          <div className="row align-items-center">
            <Pagination page={page} />
          </div>
        </div>
      </div>
    );
});

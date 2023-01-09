import React, { useEffect, useState } from "react";
import ResultsContainer from "./ResultsContainer";
import SideBarFilter from "./SideBarFilter";
import { useLocation } from "react-router-dom";
import scrollToTop from "../helpers/scrollToTop";
import Pagination from "./Pagination";
import LoadWrapper from "./LoadWrapper";
import _ from "lodash";
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopMovies,
  getUpcomingMovies,
} from "../redux/actions";

import "../styles/movies-page.sass";
import { connect } from "react-redux";
import PageHeroSlider from "./PageHeroSlider";

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, {
  getPopularMovies,
  getNowPlayingMovies,
  getTopMovies,
  getUpcomingMovies,
})(function MoviesPage(props) {
  const location = useLocation();
  const [ready, setReady] = useState("loading");
  const [page, setpage] = useState(1);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setCategory(location.pathname.split("/")[2]);
    setpage(location.search.split("=")[1] ? +location.search.split("=")[1] : 1);
    scrollToTop();
    return () => {
      scrollToTop();
    };
  }, [location]);
  useEffect(() => {
    setReady("loading");
    switch (category) {
      case undefined:
        props.getPopularMovies(page);
        document.title = "NETFLIX | Popular Movies";
        break;
      case "now_playing":
        props.getNowPlayingMovies(page);
        document.title = "NETFLIX | Now Playing Movies";
        break;
      case "top_rated":
        props.getTopMovies(page);
        document.title = "NETFLIX | Top Rated Movies";
        break;
      case "upcoming":
        props.getUpcomingMovies(page);
        document.title = "NETFLIX | Upcoming Movies";
        break;
    }
  }, [category, page]);

  useEffect(() => {
    if (!_.isEmpty(props.movies)) {
      setReady("ready");
    }
  }, [props.movies]);

  if (ready === "loading") {
    return <LoadWrapper ready={ready}></LoadWrapper>;
  }
  if (ready === "ready")
    return (
      <>
        <div className="page-hero-slider">
          <PageHeroSlider results={props.movies.slice(0, 3)} />
        </div>
        <div className="page-main">
          <div className="container">
            <div className="row">
              <SideBarFilter
                label={`${category || "Popular"} movies`}
                list={props.movies}
              ></SideBarFilter>
              <ResultsContainer
                pathname="movies"
                categories={["popular", "now playing", "top rated", "upcoming"]}
                results={props.movies}
              >
                <Pagination page={page} />
              </ResultsContainer>
            </div>
          </div>
        </div>
      </>
    );
});

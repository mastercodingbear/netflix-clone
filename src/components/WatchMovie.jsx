import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMovieById } from "../redux/actions";
import { useParams } from "react-router-dom";
import MoviePageHero from "./MoviePageHero";
import "../styles/movie_details_page.sass";
import VideoPlayerArea from "./VideoPlayerArea";
import _404 from "./_404";
import LoadWrapper from "./LoadWrapper";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getMovieById })(function WatchMovie({
  movie,
  getMovieById,
}) {
  const [ready, setReady] = useState("loading");
  const { id } = useParams();
  useEffect(() => {
    getMovieById(id);
  }, [id]);

  useEffect(() => {
    if (movie.status_code === 34) {
      setReady("404");
      document.title = `NETFLIX | 404 NOT FOUND`;
    } else if (movie.title) {
      setReady("ready");
      document.title = `NETFLIX | Watch ${movie?.title}`;
    }
  }, [movie]);
  if (ready === "loading") {
    document.title = `NETFLIX | Loading ...`;
    return <LoadWrapper ready={ready} />;
  }
  if (ready === "404") {
    return <_404 />;
  }
  if (ready === "ready")
    return (
      <>
        <MoviePageHero btns={false} movie={movie} />
        <VideoPlayerArea id={movie.id} />
      </>
    );
});

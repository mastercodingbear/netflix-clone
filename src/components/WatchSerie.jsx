import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSerieById } from "../redux/actions";
import { useParams } from "react-router-dom";
import SeriePageHero from "./SeriePageHero";
import "../styles/movie_details_page.sass";
import VideoPlayerArea from "./VideoPlayerArea";
import LoadWrapper from "./LoadWrapper";
import _404 from "./_404";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getSerieById })(function WatchSerie({
  serie,
  getSerieById,
}) {
  const [ready, setReady] = useState("loading");
  const { id, season, ep } = useParams();

  useEffect(() => {
    getSerieById(id);
  }, [id, season, ep]);

  useEffect(() => {
    if (serie.status_code === 34) {
      setReady("404");
      document.title = `NETFLIX | 404 NOT FOUND`;
    } else if (serie.name) {
      setReady("ready");
      document.title = `NETFLIX | Watch ${serie?.name}`;
    }
  }, [serie]);

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
        <SeriePageHero btns={false} serie={serie} />
        <VideoPlayerArea id={id} season={season} ep={ep} />
      </>
    );
});

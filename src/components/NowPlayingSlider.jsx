import React, { useEffect } from "react";
import { connect } from "react-redux";
import WorksSlider from "./WorksSlider";
import { getNowPlayingMovies } from "../redux/actions";
import { getNowPlayingTv } from "../redux/actions";

import "../styles/slider-bg-white.sass";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  getNowPlayingMovies,
  getNowPlayingTv,
})(function PopularSlider(props) {
  useEffect(() => {
    props.getNowPlayingMovies();
  }, []);
  return (
    <div className="now-playing-slider slider-bg-white">
      <WorksSlider
        navEl="now-playing"
        btnsGroup={["movies", "series"]}
        btnsFunctions={[props.getNowPlayingMovies, props.getNowPlayingTv]}
        icon="stopwatch"
        title={"Now Playing"}
        works={props.now_playing}
      />
    </div>
  );
});

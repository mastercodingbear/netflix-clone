import React, { useEffect } from "react";
import { connect } from "react-redux";
import WorksSlider from "./WorksSlider";
import { getTopMovies, getTopTv } from "../redux/actions";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  getTopMovies,
  getTopTv,
})(function PopularSlider(props) {
  useEffect(() => {
    props.getTopMovies();
  }, []);
  return (
    <div className="top-rated-slider">
      <WorksSlider
        navEl="top-rated"
        btnsGroup={["movies", "series"]}
        btnsFunctions={[props.getTopMovies, props.getTopTv]}
        icon="star"
        title={"Top Rated"}
        works={props.top_rated}
      />
    </div>
  );
});

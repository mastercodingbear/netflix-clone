import React, { useEffect } from "react";
import { connect } from "react-redux";
import WorksSlider from "./WorksSlider";

import {
  getPopularMovies,
  getPopularTv,
  getPopularPeople,
} from "../redux/actions";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  getPopularMovies,
  getPopularTv,
  getPopularPeople,
})(function PopularSlider(props) {
  useEffect(() => {
    props.getPopularMovies();
  }, []);

  return (
    <div className="populars-slider">
      <WorksSlider
        navEl="popular"
        btnsGroup={["movies", "series", "people"]}
        btnsFunctions={[
          props.getPopularMovies,
          props.getPopularTv,
          props.getPopularPeople,
        ]}
        icon="fire"
        title={"What's Popular ?"}
        works={props.populars}
      />
    </div>
  );
});

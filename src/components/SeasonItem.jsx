import React from "react";
import { Link } from "react-router-dom";

export default function SeasonItem({ season, serieID }) {
  return (
    <div className="col-12 col-lg-6">
      <div className="season-container">
        <div className="row">
          <div className="col-5 season-poster">
            <Link to={`/serie/${serieID}/season/${season.season_number}`}>
              <img
                src={
                  season?.poster_path
                    ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${season?.poster_path}`
                    : `https://via.placeholder.com/220X200/FF2530/fff.png?text=NOT_AVAILABLE`
                }
                alt="season-poster"
                className="season-poster-img"
              />
            </Link>
          </div>
          <div className="col-7 p-4">
            <Link
              to={`/serie/${serieID}/season/${season.season_number}`}
              className="text-dark"
            >
              <h5 className="season-name">{season?.name}</h5>
            </Link>
            <div className="season-info">{`${
              season?.air_date?.split("-")[0]
            } | ${season?.episode_count} Epoisodes`}</div>
            <p className="season-overview">{season?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

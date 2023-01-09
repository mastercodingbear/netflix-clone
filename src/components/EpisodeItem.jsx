import React from "react";
import { Link } from "react-router-dom";

import "../styles/episode-item.sass";

export default function EpisodeItem({ episode, id, season }) {
  return (
    <div className="episode-item my-3">
      <div className="row">
        <div className="col-6 episode-img-container">
          <Link
            to={`/watch/serie/${id}/season/${season}/episode/${episode.episode_number}`}
            className="overlay"
          >
            <i className="fa fa-play"></i>
          </Link>
          <img
            src={
              episode.still_path
                ? `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${episode.still_path}`
                : `https://via.placeholder.com/355X200/FF2530/fff.png?text=NOT_AVAILABLE`
            }
            alt="episode-img"
          />
        </div>
        <div className="col-6  episode-content">
          <Link
            to={`/watch/serie/${id}/season/${season}/episode/${episode.episode_number}`}
            className="episode-title"
          >
            <span>{episode.episode_number}</span> {episode.name}
          </Link>
          <p className="episode-date">{episode.air_date}</p>
          <span className="episode-overview">{episode.overview}</span>
        </div>
      </div>
    </div>
  );
}

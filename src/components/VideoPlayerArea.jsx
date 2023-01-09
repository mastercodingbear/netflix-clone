import React from "react";

export default function VideoPlayerArea({ season, ep, id }) {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-8">
            <iframe
              style={{ width: "100%", minHeight: "500px" }}
              src={
                season && ep
                  ? `https://2embed.org/embed/series?tmdb=${id}&sea=${season}&epi=${ep}`
                  : `https://2embed.org/embed/movie?tmdb=${id}`
              }
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

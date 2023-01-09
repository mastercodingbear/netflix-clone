import React from "react";
import avatarIMG from "../assets/images/avatar.webp";

import "../styles/review-item.sass";

export default function ReviewItem({ invert, review, avatarCol, body }) {
  const avatar = () => {
    let avatar_path = review?.author_details?.avatar_path;
    if (avatar_path && !avatar_path.startsWith("/h")) {
      return `https://www.themoviedb.org/t/p/w64_and_h64_face${avatar_path}`;
    } else if (avatar_path) {
      return avatar_path.slice(1);
    }
    // el
  };
  return (
    <>
      <div className={`review-item ${invert ? "review-invert" : ""} my-4 p-4 `}>
        <div className="row">
          <div className={`col-${avatarCol}`}>
            <div className="author-avatar">
              <img src={avatar() || avatarIMG} alt="avatar" />
            </div>
          </div>
          <div className={`col-${body}`}>
            <div className="review-body">
              <p className="review-author m-0">
                A review by <span>{review.author}</span>{" "}
              </p>
              <p className="m-0 review-date">{review.created_at}</p>

              <p className="my-3 rate">
                <i className="me-2 fa fa-star"></i>
                {review.author_details.rating || "N/A"}
              </p>
              <p className="review-content m-0">{review.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

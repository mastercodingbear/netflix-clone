import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/pagination.sass";
export default function Pagination({ page }) {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [hasSearch, setHasSearch] = useState(false);

  useEffect(() => {
    if (location.search) setHasSearch(true);
  }, [location]);

  useEffect(() => {
    if (hasSearch) {
      if (!location.search.split("&")[0].startsWith("?page=")) {
        setSearch(location.search.split("&")[0]);
      }
    }
  }, [hasSearch]);

  return (
    <div className="pagination-container">
      {(() => {
        if (+page - 1 !== 0) {
          return (
            <Link
              to={search ? `${search}&page=${+page - 1}` : `?page=${+page - 1}`}
            >
              <i className="fa-2x fal fa-angle-double-left"></i>
              <span>page {+page - 1}</span>
            </Link>
          );
        }
      })()}
      {(() => {
        if (+page < 500) {
          return (
            <Link
              to={search ? `${search}&page=${+page + 1}` : `?page=${+page + 1}`}
            >
              <span> page {+page + 1}</span>
              <i className="fa-2x fal fa-angle-double-right"></i>
            </Link>
          );
        }
      })()}
    </div>
  );
}

import React, { useEffect } from "react";
import WorksFilter from "./WorksFilter";
import "../styles/movies-page.sass";
import "../styles/works-filter.sass";
import { filterByMediaType } from "../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { filterByMediaType })(
  function SideBarFilter({
    list,
    label,
    cats,
    filterByMediaType,
    filteredList,
  }) {
    return (
      <div className="col-12 col-md-3 left-sidebar">
        {cats ? (
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-button">Search Results</div>
              <div className="accordion-body cat-body">
                <ul className="search-filter-list">
                  <li>
                    <button
                    // onClick={() => {
                    // filterByMediaType(filteredList, "movie");
                    // }}
                    >
                      movies
                    </button>
                    <span>
                      {
                        list.filter((el) => {
                          return el.media_type === "movie";
                        }).length
                      }
                    </span>
                  </li>
                  <li>
                    <button>series</button>
                    <span>
                      {
                        list.filter((el) => {
                          return el.media_type === "tv";
                        }).length
                      }
                    </span>
                  </li>
                  <li>
                    <button>people</button>
                    <span>
                      {
                        list.filter((el) => {
                          return el.media_type === "person";
                        }).length
                      }
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : null}
        <WorksFilter label={label} list={list} />
      </div>
    );
  }
);

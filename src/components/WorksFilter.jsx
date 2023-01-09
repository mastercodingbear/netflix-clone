import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  sortRateDescending,
  sortRateAscending,
  sortDateDescending,
  sortDateAscending,
  sortTitleA_Z,
  sortTitleZ_A,
  filterByLanguage,
  initFilteredList,
  filterByGenre,
} from "../redux/actions";
const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};
export default connect(mapStateToProps, {
  sortRateDescending,
  sortRateAscending,
  sortTitleA_Z,
  sortTitleZ_A,
  sortDateDescending,
  sortDateAscending,
  filterByLanguage,
  initFilteredList,
  filterByGenre,
})(function WorksFilter({
  list,
  filteredList,
  label,
  sortRateDescending,
  sortRateAscending,
  sortTitleA_Z,
  sortTitleZ_A,
  sortDateDescending,
  sortDateAscending,
  filterByLanguage,
  initFilteredList,
  filterByGenre,
}) {
  const [genres, setgenres] = useState([]);
  const [currentSort, setcurrentSort] = useState("None");
  const [currentFilter, setcurrentFilter] = useState("None");

  useEffect(() => {
    setcurrentSort("None");
    setcurrentFilter("None");
    initFilteredList(list);
    setgenres([]);
  }, [list]);

  const genresList = [
    { name: "Action", id: 28 },
    { name: "Adventure", id: 12 },
    { name: "Animation", id: 16 },
    { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 },
    { name: "Documentary", id: 99 },
    { name: "Drama", id: 18 },
    { name: "Family", id: 10751 },
    { name: "Fantasy", id: 14 },
    { name: "History", id: 36 },
    { name: "Horror", id: 27 },
    { name: "Music", id: 10402 },
    { name: "Mystery", id: 9648 },
    { name: "Romance", id: 10749 },
    { name: "Science Fiction", id: 878 },
    { name: "TV Movie", id: 10770 },
    { name: "Thriller", id: 53 },
    { name: "War", id: 10752 },
    { name: "Western", id: 37 },
  ];

  const renderLanguages = () => {
    let Arr = [];
    const languages = [...new Set(list?.map((el) => el.original_language))];
    languages.map((lang) => {
      const count = list?.filter((el) => {
        return el.original_language === lang;
      }).length;
      Arr.push({ language: lang?.toUpperCase(), count });
    });
    return Arr;
  };
  useEffect(() => {
    filterByGenre(list, genres);
    if (!genres.length) initFilteredList(list);
  }, [genres]);

  return (
    <div className="works-filter">
      {label ? <label>{label}</label> : null}
      <div className="sort">
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-button">Sort</div>
            <div className="accordion-body">
              <p>Sort Results By</p>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentSort}
                  <i className="far fa-chevron-down"></i>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("None");
                        initFilteredList(list);
                      }}
                    >
                      None
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("Rating Descending");
                        sortRateDescending(filteredList);
                      }}
                    >
                      Rating Descending
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("Rating Ascending");
                        sortRateAscending(filteredList);
                      }}
                    >
                      Rating Ascending
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("Release Date Descending");
                        sortDateDescending(filteredList);
                      }}
                    >
                      Release Date Descending
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("Release Date Ascending");
                        sortDateAscending(filteredList);
                      }}
                    >
                      Release Date Ascending
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("Title (A-Z)");
                        sortTitleA_Z(filteredList);
                      }}
                    >
                      Title (A-Z)
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("Title (Z-A)");
                        sortTitleZ_A(filteredList);
                      }}
                    >
                      Title (Z-A)
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <div className="accordion-button">Filters</div>
            <div className="accordion-body">
              <div className="language-filter mb-4">
                <p>Language</p>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {currentFilter}
                    <i className="far fa-chevron-down"></i>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          setcurrentFilter("All");
                          initFilteredList(list);
                        }}
                      >
                        All
                      </button>
                    </li>
                    {[...renderLanguages()].map((el) => {
                      return (
                        <li key={el.language}>
                          <button
                            className="dropdown-item"
                            onClick={() => {
                              setcurrentFilter(el.language);
                              filterByLanguage(list, el.language);
                            }}
                          >
                            {el.language || "N/A"}
                            <span>({el.count})</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="genres-filter">
                <p>Genres</p>
                <div className="genres">
                  {genresList.map((el) => {
                    return (
                      <button
                        key={el.id}
                        className={`genre-btn ${
                          genres.includes(el.id) ? "active" : ""
                        }`}
                        onClick={() => {
                          genres.includes(el.id)
                            ? setgenres(
                                genres?.filter((genre) => {
                                  return genre !== el.id;
                                })
                              )
                            : setgenres([...genres, el.id]);
                        }}
                      >
                        {el.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

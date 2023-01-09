import React, { useState, useEffect } from "react";
import _404 from "./_404";
import { useLocation, Link, useSearchParams } from "react-router-dom";
import LoadWrapper from "./LoadWrapper";
import "../styles/search-area.sass";
import Pagination from "./Pagination";
import { searchTMDB } from "../redux/actions";
import { connect } from "react-redux";
import SideBarFilter from "./SideBarFilter";
import ResultsContainer from "./ResultsContainer";
import scrollToTop from "../helpers/scrollToTop";

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { searchTMDB })(function SearchPage({
  search_list,
  searchTMDB,
}) {
  const location = useLocation();
  const [params] = useSearchParams();
  const [query, setQuery] = useState("");
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);
  const [ready, setReady] = useState("loading");

  useEffect(() => {
    document.title = `NETFLIX | Search`;
  }, []);

  useEffect(() => {
    setReady("loading");
    scrollToTop();
    setQuery(params.get("query"));
    setPage(+params.get("page") || 1);
  }, [location]);

  useEffect(() => {
    if (query)
      (async () => {
        await searchTMDB(query, page);
        document.title = `NETFLIX | Search ${query}`;
        setReady("ready");
      })();
    setInterval(() => {
      setReady("ready");
    }, 1000);
  }, [page, query]);

  if (ready === "loading") return <LoadWrapper />;
  return (
    <div className="search-area">
      <div className="search-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            type="text"
            name="query"
            placeholder="Search for a movie, tv show or person"
            onFocus={(e) => {
              e.target.placeholder = "";
            }}
            onBlur={(e) => {
              e.target.placeholder = "Search for a movie, tv show or person";
            }}
          />
          <Link to={`/search?query=${term || ""}`}>
            <i className="fal fa-search"></i>
          </Link>
        </form>
      </div>
      <div className="search-results py-5">
        <div className="container">
          <div className="row">
            <SideBarFilter cats={true} list={search_list}></SideBarFilter>
            <ResultsContainer results={search_list}>
              {search_list.length ? <Pagination page={page} /> : null}
            </ResultsContainer>
          </div>
        </div>
      </div>
    </div>
  );
});

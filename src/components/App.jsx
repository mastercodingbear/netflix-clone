/// MODULES
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/// COMPONENTS
import Navbar from "./Navbar";
import GridTest from "./GridTest";
import MainMenu from "./MainMenu";
import HomePage from "./HomePage";
import MoviesPage from "./MoviesPage";
import TvShowsPage from "./TvShowsPage";
import MovieDetails from "./MovieDetails";
import SerieDetails from "./SerieDetails";
import SerieSeasonPage from "./SerieSeasonPage";
import WatchMovie from "./WatchMovie";
import WatchSerie from "./WatchSerie";
import PeoplePage from "./PeoplePage";
import PersonPage from "./PersonPage";
import SearchPage from "./SearchPage";
import _404 from "./_404";

export default (function App() {
  return (
    <BrowserRouter>
      {/* <GridTest /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/now_playing" element={<MoviesPage />} />
        <Route path="/movies/top_rated" element={<MoviesPage />} />
        <Route path="/movies/upcoming" element={<MoviesPage />} />

        <Route path="/series" element={<TvShowsPage />} />
        <Route path="/series/airing_today" element={<TvShowsPage />} />
        <Route path="/series/top_rated" element={<TvShowsPage />} />
        <Route path="/series/on_tv" element={<TvShowsPage />} />

        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/serie/:id" element={<SerieDetails />} />

        <Route path="/people" element={<PeoplePage />} />
        <Route path="/person/:id" element={<PersonPage />} />

        <Route
          exact
          path="serie/:id/season/:number"
          element={<SerieSeasonPage />}
        />

        <Route path="watch/movie/:id" element={<WatchMovie />} />
        <Route
          path="watch/serie/:id/season/:season/episode/:ep"
          element={<WatchSerie />}
        />

        <Route path="search" element={<SearchPage />} />
        <Route path={"*"} element={<_404 />}></Route>
      </Routes>
      <MainMenu />
    </BrowserRouter>
  );
});

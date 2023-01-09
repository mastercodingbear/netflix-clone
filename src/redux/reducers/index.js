import { combineReducers } from "redux";

import User_Login from "./userLogin";
import TMDB_Trendings from "./TMDB_Trendings";
import Populars from "./Populars";
import Now_Playing from "./Now_Playing";
import Top_Rated from "./Top_Rated";
import Movies from "./Movies";
import Series from "./Series";
import Movie from "./Movie";
import Serie from "./Serie";
import Episodes from "./Episodes";
import FilteredList from "./Filter";
import People from "./People";
import Person from "./Person";
import SearchList from "./Search";

export default combineReducers({
  isUserLoggedIn: User_Login,
  trendings: TMDB_Trendings,
  populars: Populars,
  now_playing: Now_Playing,
  top_rated: Top_Rated,
  movies: Movies,
  series: Series,
  movie: Movie,
  serie: Serie,
  filteredList: FilteredList,
  episodes: Episodes,
  people: People,
  person: Person,
  search_list: SearchList,
});

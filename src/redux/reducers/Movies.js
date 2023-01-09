const Movies = (movies = [], action) => {
  if (action.type === "GET_POPULAR_TMDB_MOVIES") {
    return [...action.payload];
  }
  if (action.type === "GET_TOP_TMDB_MOVIES") {
    return [...action.payload];
  }
  if (action.type === "GET_NOW_PLAYING_TMDB_MOVIES") {
    return [...action.payload];
  }
  if (action.type === "GET_UPCOMING_TMDB_MOVIES") {
    return [...action.payload];
  }
  return movies;
};

export default Movies;

const Movie = (movie = {}, action) => {
  if (action.type === "GET_MOVIE") {
    return { ...movie, ...action.payload };
  }
  return {};
};
export default Movie;

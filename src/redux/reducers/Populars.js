const Populars = (results = [], action) => {
  if (action.type === "GET_POPULAR_TMDB_MOVIES") {
    results = [];
    return [...results, ...action.payload];
  }
  if (action.type === "GET_POPULAR_TMDB_SERIES") {
    results = [];
    return [...results, ...action.payload];
  }
  if (action.type === "GET_POPULAR_TMDB_PEOPLE") {
    results = [];
    return [...results, ...action.payload];
  }
  return results;
};

export default Populars;

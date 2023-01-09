const Top_Rated = (results = [], action) => {
  if (action.type === "GET_TOP_TMDB_MOVIES") {
    results = [];
    return [...results, ...action.payload];
  }
  if (action.type === "GET_TOP_TMDB_TV") {
    results = [];
    return [...results, ...action.payload];
  }
  return results;
};
export default Top_Rated;

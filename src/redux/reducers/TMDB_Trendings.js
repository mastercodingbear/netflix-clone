const TMDB_Trendings = (results = [], action) => {
  if (action.type === "GET_TMDB_TRENDINGS") {
    return action.payload;
  }
  return results;
};
export default TMDB_Trendings;

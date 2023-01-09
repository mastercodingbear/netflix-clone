const Now_Playing = (results = [], action) => {
  if (action.type === "GET_NOW_PLAYING_TMDB_MOVIES") {
    results = [];
    return [...results, ...action.payload];
  }
  if (action.type === "GET_NOW_PLAYING_TMDB_TV") {
    results = [];
    return [...results, ...action.payload];
  }
  return results;
};
export default Now_Playing;

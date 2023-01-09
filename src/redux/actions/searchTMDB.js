import tmdb from "../../apis/tmdb";

const searchTMDB = (query, page = 1) => {
  return async function (dispatch) {
    try {
      const res = await tmdb.get(`/search/multi`, {
        params: {
          query,
          page,
        },
      });
      console.log(res);
      dispatch({
        type: "SEARCH_TMDB",
        payload: res.data.results,
      });
    } catch (error) {
      dispatch({
        type: "SEARCH_TMDB",
        payload: error.response.data,
      });
    }
  };
};
export default searchTMDB;

import tmdb from "../../apis/tmdb";

const getTopMovies = (page = 1) => {
  return async function (dispatch) {
    const res = await tmdb.get("/movie/top_rated", {
      params: {
        language: "en-US",
        page,
      },
    });
    dispatch({
      type: "GET_TOP_TMDB_MOVIES",
      payload: res.data.results,
    });
  };
};
export default getTopMovies;

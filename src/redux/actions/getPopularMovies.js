import tmdb from "../../apis/tmdb";

const getPopularMovies = (page = 1) => {
  return async function (dispatch) {
    const res = await tmdb.get("/movie/popular", {
      params: {
        language: "en-US",
        page,
        append_to_response: "release_dates",
      },
    });
    dispatch({
      type: "GET_POPULAR_TMDB_MOVIES",
      payload: res.data.results,
    });
  };
};

export default getPopularMovies;

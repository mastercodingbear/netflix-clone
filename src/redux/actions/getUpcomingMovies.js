import tmdb from "../../apis/tmdb";

const getUpcomingMovies = (page = 1) => {
  return async function (dispatch) {
    const res = await tmdb.get("/movie/upcoming", {
      params: {
        language: "en-US",
        page,
        append_to_response: "release_dates",
      },
    });
    dispatch({
      type: "GET_UPCOMING_TMDB_MOVIES",
      payload: res.data.results,
    });
  };
};
export default getUpcomingMovies;

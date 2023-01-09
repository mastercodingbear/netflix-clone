import tmdb from "../../apis/tmdb";

const getNowPlayingMovies = (page = 1) => {
  return async function (dispatch) {
    const res = await tmdb.get("/movie/now_playing", {
      params: {
        language: "en-US",
        page,
      },
    });
    dispatch({
      type: "GET_NOW_PLAYING_TMDB_MOVIES",
      payload: res.data.results,
    });
  };
};
export default getNowPlayingMovies;

import tmdb from "../../apis/tmdb";

const getNowPlayingTv = (page = 1) => {
  return async function (dispatch) {
    const res = await tmdb.get("/tv/airing_today", {
      params: {
        language: "en-US",
        page,
      },
    });
    dispatch({
      type: "GET_NOW_PLAYING_TMDB_TV",
      payload: res.data.results,
    });
  };
};
export default getNowPlayingTv;

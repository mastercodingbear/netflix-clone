import tmdb from "../../apis/tmdb";

const getOnTheAirTv = (page = 1) => {
  return async function (dispatch) {
    const res = await tmdb.get("/tv/on_the_air", {
      params: {
        language: "en-US",
        page,
      },
    });
    dispatch({
      type: "GET_ON_AIR_TMDB_TV",
      payload: res.data.results,
    });
  };
};
export default getOnTheAirTv;

import tmdb from "../../apis/tmdb";

const getTopTv = (page = 1) => {
  return async function (dispatch) {
    const res = await tmdb.get("/tv/top_rated", {
      params: {
        language: "en-US",
        page,
      },
    });
    dispatch({
      type: "GET_TOP_TMDB_TV",
      payload: res.data.results,
    });
  };
};
export default getTopTv;

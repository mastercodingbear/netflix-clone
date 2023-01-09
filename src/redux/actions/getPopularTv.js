import tmdb from "../../apis/tmdb";

const getPopularTv = (page = 1) => {
  return async function (dispatch) {
    const res = await tmdb.get("/tv/popular", {
      params: {
        language: "en-US",
        page,
      },
    });
    dispatch({
      type: "GET_POPULAR_TMDB_SERIES",
      payload: res.data.results,
    });
  };
};

export default getPopularTv;

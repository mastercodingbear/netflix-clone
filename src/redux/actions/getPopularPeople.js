import tmdb from "../../apis/tmdb";

const getPopularPeople = (page = 1) => {
  return async function (dispatch) {
    const res = await tmdb.get("/person/popular", {
      params: {
        language: "en-US",
        page,
      },
    });
    dispatch({
      type: "GET_POPULAR_TMDB_PEOPLE",
      payload: res.data.results,
    });
  };
};
export default getPopularPeople;

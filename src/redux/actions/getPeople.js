import tmdb from "../../apis/tmdb";

const getPeople = (page = 1) => {
  return async function (dispatch) {
    try {
      const res = await tmdb.get("/person/popular", {
        params: {
          language: "en-US",
          page,
        },
      });
      dispatch({
        type: "GET_PEOPLE",
        payload: res.data.results,
      });
    } catch (error) {
      dispatch({
        type: "GET_PEOPLE",
        payload: error.response.data.errors,
      });
    }
  };
};

export default getPeople;

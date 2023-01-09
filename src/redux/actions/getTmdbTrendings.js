import tmdb from "../../apis/tmdb";

const getTMDBTrendings = () => {
  return async function (dispatch) {
    const res = await tmdb.get("/trending/all/day");
    dispatch({
      type: "GET_TMDB_TRENDINGS",
      payload: res.data.results,
    });
  };
};

export default getTMDBTrendings;

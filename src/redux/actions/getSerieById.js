import tmdb from "../../apis/tmdb";

const getSerieById = (id) => {
  return async function (dispatch) {
    try {
      const res = await tmdb.get(`/tv/${id}`, {
        params: {
          append_to_response:
            "videos,images,credits,reviews,keywords,seasons,episodes,networks,languages,release_dates,external_ids",
        },
      });
      dispatch({
        type: "GET_SERIE",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_SERIE",
        payload: error.response.data,
      });
    }
  };
};
export default getSerieById;

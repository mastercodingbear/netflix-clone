import tmdb from "../../apis/tmdb";

const getPersonById = (id) => {
  return async function (dispatch) {
    try {
      const res = await tmdb.get(`/person/${id}`, {
        params: {
          append_to_response: "combined_credits,external_ids",
        },
      });

      dispatch({
        type: "GET_PERSON",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_PERSON",
        payload: error.response.data,
      });
    }
  };
};
export default getPersonById;

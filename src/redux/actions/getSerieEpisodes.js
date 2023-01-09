import tmdb from "../../apis/tmdb";

const getSerieEpisodes = (id, season, episode) => {
  return async function (dispatch) {
    try {
      const res = await tmdb.get(
        `/tv/${id}/season/${season}/episode/${episode}`
      );
      dispatch({
        type: "GET_TV_EPISODES",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_TV_EPISODES",
        payload: error.response.data,
      });
    }
  };
};
export default getSerieEpisodes;

const Serie = (serie = {}, action) => {
  if (action.type === "GET_SERIE") {
    return { ...serie, ...action.payload };
  }
  if (action.type === "GET_TV_EPISODES") {
    return { ...serie };
  }
  return {};
};
export default Serie;

const Episodes = (episodes = [], action) => {
  if (action.type === "GET_TV_EPISODES") {
    return [...episodes, action.payload];
  }
  return [];
};

export default Episodes;

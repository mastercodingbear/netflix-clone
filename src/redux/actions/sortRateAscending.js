const sortRateAscending = (list) => {
  return {
    type: "SORT_RATE_AS",
    payload: list.sort((curr, next) => {
      return curr.vote_average - next.vote_average;
    }),
  };
};
export default sortRateAscending;

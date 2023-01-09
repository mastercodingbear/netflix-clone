const sortRateDescending = (list) => {
  return {
    type: "SORT_RATE_DES",
    payload: list.sort((curr, next) => {
      return next.vote_average - curr.vote_average;
    }),
  };
};
export default sortRateDescending;

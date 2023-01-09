const filterByGenre = (list, genres) => {
  return {
    type: "FILTER_BY_GENRE",
    payload: list?.filter((el) => {
      return el?.genre_ids?.find((g) => {
        return genres?.includes(g);
      });
    }),
  };
};
export default filterByGenre;

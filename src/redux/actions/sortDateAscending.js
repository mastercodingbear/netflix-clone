const sortDateAscending = (list) => {
  return {
    type: "SORT_DATE_DES",
    payload: list.sort((curr, next) => {
      return (
        Date.parse(curr.release_date) - Date.parse(next.release_date) ||
        Date.parse(curr.first_air_date) - Date.parse(next.first_air_date)
      );
    }),
  };
};
export default sortDateAscending;

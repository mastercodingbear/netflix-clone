const sortTitleZ_A = (list) => {
  const titles = list
    .map((el) => el.title || el.name)
    .sort()
    .reverse();
  return {
    type: "SORT_TITLE_Z_A",
    payload: titles.map((title) => {
      return list.find((el) => {
        return el.title === title || el.name === title;
      });
    }),
  };
};
export default sortTitleZ_A;

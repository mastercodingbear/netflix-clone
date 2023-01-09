const sortTitleA_Z = (list) => {
  const titles = list.map((el) => el.title || el.name).sort();
  return {
    type: "SORT_TITLE_A_Z",
    payload: titles.map((title) => {
      return list.find((el) => {
        return el.title === title || el.name === title;
      });
    }),
  };
};
export default sortTitleA_Z;

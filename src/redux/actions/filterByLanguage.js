const filterByLanguage = (list, language) => {
  if (!language) {
    return {
      type: "FILTER_BY_LANGUAGE",
      payload: [],
    };
  }
  const newList = list.filter((el) => {
    return el.original_language === language.toLowerCase();
  });
  return {
    type: "FILTER_BY_LANGUAGE",
    payload: newList,
  };
};
export default filterByLanguage;

const filterByMediaType = (list, type) => {
  if (!type) {
    return {
      type: "FILTER_BY_MEDIA_TYPE",
      payload: [],
    };
  }
  const newList = list.filter((el) => {
    return el.media_type === type;
  });
  return {
    type: "FILTER_BY_MEDIA_TYPE",
    payload: newList,
  };
};
export default filterByMediaType;

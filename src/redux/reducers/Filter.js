const FilteredList = (List = [], action) => {
  if (action.type === "INIT_LIST") {
    return [...action.payload];
  }
  if (action.type === "SORT_RATE_DES") {
    return [...action.payload];
  }
  if (action.type === "SORT_RATE_AS") {
    return [...action.payload];
  }
  if (action.type === "SORT_DATE_DES") {
    return [...action.payload];
  }
  if (action.type === "SORT_DATE_AS") {
    return [...action.payload];
  }
  if (action.type === "SORT_TITLE_A_Z") {
    return [...action.payload];
  }
  if (action.type === "SORT_TITLE_Z_A") {
    return [...action.payload];
  }
  if (action.type === "FILTER_BY_LANGUAGE") {
    return [...action.payload];
  }
  if (action.type === "FILTER_BY_GENRE") {
    return [...action.payload];
  }
  if (action.type === "FILTER_BY_MEDIA_TYPE") {
    return [...action.payload];
  }
  return [];
};

export default FilteredList;

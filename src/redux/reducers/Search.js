const SearchList = (List = [], action) => {
  if (action.type === "SEARCH_TMDB") {
    return [...action.payload];
  }

  if (action.type === "INIT_LIST") {
    return List;
  }
  if (action.type === "SORT_RATE_DES") {
    return List;
  }
  if (action.type === "SORT_RATE_AS") {
    return List;
  }
  if (action.type === "SORT_DATE_DES") {
    return List;
  }
  if (action.type === "SORT_DATE_AS") {
    return List;
  }
  if (action.type === "SORT_TITLE_A_Z") {
    return List;
  }
  if (action.type === "SORT_TITLE_Z_A") {
    return List;
  }
  if (action.type === "FILTER_BY_LANGUAGE") {
    return List;
  }
  if (action.type === "FILTER_BY_GENRE") {
    return List;
  }
  return [];
};

export default SearchList;

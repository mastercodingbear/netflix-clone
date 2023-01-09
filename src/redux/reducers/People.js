const People = (people = [], action) => {
  if (action.type === "GET_PEOPLE") {
    return [...action.payload];
  }
  return people;
};

export default People;

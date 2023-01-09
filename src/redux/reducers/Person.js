const Person = (person = {}, action) => {
  if (action.type === "GET_PERSON") {
    return { ...person, ...action.payload };
  }
  return {};
};
export default Person;

const User_Login = (state = true, action) => {
  switch (action.type) {
    case "CHANGE_LOG_STATE":
      return !state;
    default:
      return state;
  }
};
export default User_Login;

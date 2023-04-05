const userState = {
  name: "",
  status: "",
};
const userReducer = (state = userState, action) => {
  switch (action.type) {
    case "user":
      const { name, status } = action;
      return { ...state, name, status };
    default:
      return state;
  }
};

export default userReducer;

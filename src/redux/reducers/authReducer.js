const initialState = {
  name:"sagar"
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return action.data
    case "LOG_OUT":
      return console.log(action,'logout console');
    default:
      return state;
  }
};

export default AuthReducer;

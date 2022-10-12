const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN": {
      return {
        currentUser: action.payload,
      };
    }
    case "SIGNOUT": {
      localStorage.clear();
      break; 
    }
    default:
      return state;
  }
};

export default AuthReducer;

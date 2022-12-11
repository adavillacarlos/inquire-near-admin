const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN": {
      return {
        currentUser: action.payload,
      };
    }
    case "SIGNOUT": {
      localStorage.clear();
      window.location.href='https://inquire-near-2022.web.app'; 
      break; 
    }
    default:
      return state;
  }
};

export default AuthReducer;

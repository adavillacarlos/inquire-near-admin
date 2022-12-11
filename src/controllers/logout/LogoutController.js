import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { googleLogout } from '@react-oauth/google';

const LogoutController = () => {
  const navigate = useNavigate(); 
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "SIGNOUT" }) || googleLogout(); 
    //navigate("/signin")
  };
  return handleLogout;
};

export default LogoutController;

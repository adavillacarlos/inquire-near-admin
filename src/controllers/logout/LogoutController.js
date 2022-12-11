import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { googleLogout } from '@react-oauth/google';

const LogoutController = () => {
  const navigate = useNavigate(); 
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    console.log("Clicked"); 
    dispatch({ type: "SIGNOUT" }) || googleLogout(); 
    navigate("/");
  };
  return handleLogout;
};

export default LogoutController;

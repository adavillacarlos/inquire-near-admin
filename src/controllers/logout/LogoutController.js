import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
const LogoutController = () => {
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "SIGNOUT" });
  };
  return handleLogout;
};

export default LogoutController;

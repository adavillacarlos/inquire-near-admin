import "./layout.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Navbar = () => {
  const {currentUser} = useContext(AuthContext); 
  return (
   <div class="topnav">
   <div class="topnav-right">
     <p>Welcome, {currentUser.email}</p>
     <AccountCircleRoundedIcon class="avatar"/>
   </div>
 </div>

  );
};

export default Navbar;

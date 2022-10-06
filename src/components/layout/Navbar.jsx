import "../style.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Navbar = () => {
  const {currentUser} = useContext(AuthContext); 

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <p className="userName">Welcome, {currentUser.email}</p>
          </div>
          <div className="item">
            <AccountCircleRoundedIcon className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

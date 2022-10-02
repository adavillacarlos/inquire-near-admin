import "../style.scss";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const userName = "Cymmer";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <p className="userName">Welcome, {userName}</p>
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

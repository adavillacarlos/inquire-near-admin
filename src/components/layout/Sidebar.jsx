import "./layout.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { googleLogout } from "@react-oauth/google";
const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

   return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">InquireNear</span>
        </Link>
      </div>

      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardRoundedIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleRoundedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/transactions" style={{ textDecoration: "none" }}>
            <li>
              <AssignmentIcon className="icon" />
              <span>Transactions</span>
            </li>
          </Link>

          <Link to="/reports" style={{ textDecoration: "none" }}>
            <li>
              <ReportIcon className="icon" />
              <span>Reports</span>
            </li>
          </Link>

          <Link to="/admins" style={{ textDecoration: "none" }}>
            <li>
              <AdminPanelSettingsIcon className="icon" />
              <span>Admins</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="bottom" style={{ position: "absolute", bottom: 150 }}>
        <ul>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span
              onClick={() => {
                dispatch({ type: "SIGNOUT" }) || googleLogout();
                navigate("/signin");
                window.location.reload(false); 
              }}
            >
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

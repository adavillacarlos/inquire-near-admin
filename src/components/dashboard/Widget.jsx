import "../style.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DashboardController from "../../controllers/dashboard/DashboardController";
import DashboardModel from "../../models/dashboard/DashboardModel";
import { useEffect } from "react";
const Widget = ({ type }) => {
  const { summary, setSummary } = DashboardController();
  let data;
  //temporary
  const countUser = summary.usersData;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        count: countUser,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(	253, 188, 100)",
              color: "rgba(228,114,0)",
            }}
          />
        ),
      };
      break;
    case "report":
      data = {
        title: "NEW REPORTS",
        count: 132,
        link: "View all reports",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(249, 137, 107)" }}
          />
        ),
      };
      break;
    case "admin":
      data = {
        title: "ADMINS",
        count: 23,
        link: "View all admins",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(132, 232, 244)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.count}</span>
        <span className="link">{data.link}</span>
      </div>
     
    </div>
  );
};

export default Widget;

import "../style.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
const Widget = ({ type, summary }) => {
  let data;
  //temporary
  const countUser = `${summary ? summary.usersData : 0} `;
  const countTransactions = `${summary ? summary.transactionsData : 0} `;
  const countReports = `${summary ? summary.reportsData : 0} `;

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
        count: countReports,
        link: "View all reports",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(249, 137, 107)" }}
          />
        ),
      };
      break;
    case "transaction":
      data = {
        title: "TRANSACTIONS",
        count: countTransactions,
        link: "View all transactions",
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
        <Link to={"/" + type + "s"}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
    </div>
  );
};

export default Widget;

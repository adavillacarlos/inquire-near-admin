import "./userSummary.scss";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Title from "../../components/layout/Title";
import UserSummary from "../../components/users/UserSummary";

const UserList = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <div className="container">
          <Navbar />
          <Title title="Users" />
          <div className="listContainer">
            <UserSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;

import "./style.scss";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Title from "../components/layout/Title";
import User from "../components/users/User";

const Users = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <div className="container">
          <Navbar />
          <Title title="Users" />
          <div className="listContainer">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

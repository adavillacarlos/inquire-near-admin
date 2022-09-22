import "./style.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Title from "../components/title";
import User from "../components/user";

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

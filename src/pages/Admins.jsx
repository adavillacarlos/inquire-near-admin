import "./style.scss";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Title from "../components/layout/Title";
import Admin from "../components/admins/Admin";

const Admins = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <div className="container">
          <Navbar />
          <Title title="Admins" />
          <div className="listContainer">
            <Admin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admins;

import "./style.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Title from "../components/title";
import Admin from "../components/admin";

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

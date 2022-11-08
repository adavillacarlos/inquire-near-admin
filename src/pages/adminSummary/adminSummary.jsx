import "./adminSummary.scss";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Title from "../../components/layout/Title";
import Datatable from "../../components/admin/AdminSummary";

const Admins = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <div className="container">
          <Navbar />
          <Title title="Admins" />
          <div className="listContainer">
            <Datatable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admins;

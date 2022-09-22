import "./style.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Title from "../components/title";
import Report from "../components/report";
const Reports = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <div className="container">
          <Navbar />
          <Title title="Reports" />
          <div className="listContainer">
            <Report />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

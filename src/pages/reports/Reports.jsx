import "./reports.scss";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Title from "../../components/layout/Title";
import ReportSummary from "../../components/reports/ReportSummary";
const Reports = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <div className="container">
          <Navbar />
          <Title title="Reports" />
          <div className="listContainer">
            <ReportSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default (Reports);

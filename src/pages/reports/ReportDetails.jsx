import "./reports.scss";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Title from "../../components/layout/Title";
import Report from "../../components/reports/Report";

const ReportDetails = () => {
    return (
        <div className="layout">
          <Sidebar />
          <div className="main">
            <div className="container">
              <Navbar />
              <Title title="Report" />
              <div className="viewContainer">
                 <Report /> 
              </div>
            </div>
          </div>
        </div>
      );
};

export default ReportDetails;

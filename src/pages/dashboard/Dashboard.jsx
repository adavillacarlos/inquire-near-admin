import "./dashboard.scss";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Title from "../../components/layout/Title";
import Widget from "../../components/dashboard/Widget";
import Chart from "../../components/dashboard/Chart";
import DashboardController from "../../controllers/dashboard/DashboardController";
const Dashboard = () => {
  const { summary } = DashboardController();

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <div className="container">
          <Navbar />
          <Title title="Dashboard" />
         
          {summary === undefined || summary === null || summary.length === 0 ? (
            <div></div>
          ) : (
            <div className="wrapper" data-testid="child">
              <div className="widgets">
                <Widget type="user" summary={summary} />
                <Widget type="report" summary={summary} />
                <Widget type="transaction" summary={summary} />
              </div>
              <div className="char">
                <Chart title="APP USAGE" aspect={4 / 1} summary={summary} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

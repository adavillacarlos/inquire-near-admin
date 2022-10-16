import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Title from "../components/layout/Title";
import Widget from "../components/dashboard/Widget";
import Chart from "../components/dashboard/Chart";
import DashboardController from "../controllers/dashboard/DashboardController";
const Dashboard = () => {
  const { summary, setSummary, } = DashboardController();

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <div className="container">
          <Navbar />
          <Title title="Dashboard" />
          <div>
            <h2>Summary</h2>
          </div>
          <div className="wrapper">
            <div className="widgets">
              <Widget type="user" summary={summary} />
              <Widget type="report" />
              <Widget type="transaction" summary={summary}/>
            </div>
            <div className="char">
              <Chart title="APP USAGE" aspect={3 / 1} summary={summary}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

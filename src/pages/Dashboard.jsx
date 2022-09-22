import "./style.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Title from "../components/title";
import Widget from "../components/Widget";
import Chart from "../components/Chart";

const Dashboard = () => {
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
              <Widget type="user" />
              <Widget type="report" />
              <Widget type="admin" />
            </div>
            <div className="char">
              <Chart title="APP USAGE" aspect={3 / 1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

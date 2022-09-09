import "./style.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Title from "../components/title/title";
import Widget from "../components/widget/Widget";
import Chart from "../components/chart/Chart";

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

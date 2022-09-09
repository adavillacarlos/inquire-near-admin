import "./style.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Title from "../components/title/title";
import Report from "../components/table/report"
const Reports = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
      <div className="container">
        <Navbar />
        <Title title="Reports"/>
        <div className="listContainer">
        <Report/>
        </div> 
        </div>
      </div>
    </div>
  );
    
  }
  
  export default Reports;
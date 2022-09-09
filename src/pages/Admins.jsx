import "./style.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Title from "../components/title/title";
import Admin from "../components/table/admin"

const Admins = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
      <div className="container">
        <Navbar />
        <Title title="Admins"/>
        <div className="listContainer">
          <Admin />
        </div>
        </div> 
      </div>
    </div>
  );
    
  };
  
export default Admins
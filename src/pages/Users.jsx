import "./style.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Title from "../components/title/title";
import Table from "../components/table/user";

const Users = () => {
    return (
      <div className="layout">
        <Sidebar />
        <div className="main">
        <div className="container">
          <Navbar />
          <Title title="Users"/>
          <div className="listContainer">
          <div className="listTitle">Total Users</div>
          <Table />
        </div>
          </div> 
        </div>
      </div>
    );
  };
  
  export default Users;
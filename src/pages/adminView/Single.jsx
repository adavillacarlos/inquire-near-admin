import "./adminView.scss";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Title from "../../components/layout/Title";
import AdminView from "../../components/admin/AdminView";

const Single = () => {
    return (
        <div className="layout">
          <Sidebar />
          <div className="main">
            <div className="container">
              <Navbar />
              <Title title="Admin" />
              <div className="viewContainer">
                 <AdminView /> 
              </div>
            </div>
          </div>
        </div>
      );
};

export default Single;

import "./user.scss";
import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import UserTitle from "../../components/layout/UserTitle";
import User from "../../components/users/UserView";
                                    
const UserDetails = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <div className="container">
          <Navbar />
          <UserTitle title="User" />
          <div className="viewContainer">
             <User /> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;

import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Title from "../../components/layout/Title";
import Transaction from "../../components/transactions/Transaction";

const TransactionDetails = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <div className="container">
          <Navbar />
          <Title title="Transaction" />
          <div className="listContainer">
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;

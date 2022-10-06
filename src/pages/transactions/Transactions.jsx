import "../style.scss";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Title from "../../components/layout/Title";
import TransactionSummary from "../../components/transactions/TransactionSummary";
import { Connect } from "react-redux";
import TransactionSummaryController from "../../controllers/transactions/TransactionSummaryController";


const Transactions = () => { 
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <div className="container">
          <Navbar />
          <Title title="Transactions" />
          <div className="listContainer">
            <TransactionSummary />
          </div>
        </div>
      </div>
    </div>
  );
};


export default (Transactions);

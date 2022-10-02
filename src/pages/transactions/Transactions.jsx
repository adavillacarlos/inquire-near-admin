import "../style.scss";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Title from "../../components/layout/Title";
import TransactionSummary from "../../components/transactions/TransactionSummary";

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

export default Transactions;

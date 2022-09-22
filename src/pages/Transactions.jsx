import "./style.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Title from "../components/title";
import Transaction from "../components/transaction";
const Transactions = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <div className="container">
          <Navbar />
          <Title title="Transactions" />
          <div className="listContainer">
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import TransactionSummaryModel from "../../models/transaction/TransactionSummaryModel";
// import { fetchData, transactionRows } from "../../models/transaction/TransactionModel";
const TransactionSummaryController = () => {
  const [data, setData] = useState([]);
  const { deleteData, fetchData } = TransactionSummaryModel(data, setData);

  const handleDelete = (id) => {
    console.log(id); 
    // deleteData(id);
    deleteData(id);
  };

  useEffect(() => {
    const unsubscribe = fetchData;
    const undelete = deleteData; 
    return () => {
      setData([]);
      unsubscribe();
      undelete(); 
    };
  }, []);

  const actionColumn = [
    {
      field: "decision",
      headerName: "Decision",
      width: 250,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="cellDecision">
            <Link
              to={`/transactions/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return {
    data,
    actionColumn,
  };
};

export default TransactionSummaryController;

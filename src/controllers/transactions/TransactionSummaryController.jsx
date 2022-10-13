import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../app/firebase";

import { useEffect } from "react";
import TransactionSummaryModel from "../../models/transaction/TransactionSummaryModel";
// import { fetchData, transactionRows } from "../../models/transaction/TransactionModel";
const TransactionSummaryController = () => {
  const [data, setData] = useState([]);
  const { deleteData,fetchData  } = TransactionSummaryModel();

  const handleDelete = (id) => {
    // deleteData(id);
    deleteData(id);
  };

  useEffect(() => {
    const unsubscribe = fetchData; 
    return () => {
      unsubscribe();
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

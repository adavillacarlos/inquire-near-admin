import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../app/firebase";

import { useEffect } from "react";
import TransactionSummaryModel from "../../models/transaction/TransactionSummaryModel";
// import { fetchData, transactionRows } from "../../models/transaction/TransactionModel";
const TransactionSummaryController = () => {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    // deleteData(id);
    try {
      await deleteDoc(doc(db, "transaction", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "transaction"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

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

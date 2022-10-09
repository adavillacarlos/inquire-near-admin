import { useState } from "react";
import { Link } from "react-router-dom";
import { transactionRows,transactionColumns } from "../../models/transaction/TransactionModel";

const TransactionSummaryController = () => {
    const [data, setData] = useState(transactionRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };

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
        handleDelete,
    }
}

export default TransactionSummaryController; 
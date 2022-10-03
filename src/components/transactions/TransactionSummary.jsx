import "../style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { transactionColumns, transactionRows } from "../../transaction-data";
import { Link } from "react-router-dom";
import { useState } from "react";

const TransactionSummary = () => {
  const [data, setData] = useState(transactionRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "decision",
      headerName: "Decision",
      width: 250,
      headerAlign:'center',
      align:'center',
      renderCell: (params) => {
        return (
          <div className="cellDecision">
             <Link to={`/transactions/${params.row.id}`} style={{ textDecoration: "none" }}>
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
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={transactionColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
    
      />
    </div>
  );
};

export default TransactionSummary;


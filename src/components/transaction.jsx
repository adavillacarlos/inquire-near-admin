import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { transactionColumns, transactionRows } from "../transaction-data";
import { Link } from "react-router-dom";
import { useState } from "react";

const Transaction = () => {
  const [data, setData] = useState(transactionRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "decision",
      headerName: "Decision",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellDecision">
             <Link to="/users/test" style={{ textDecoration: "none" }}>
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

export default Transaction;


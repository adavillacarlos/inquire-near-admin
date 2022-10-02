import "../style.scss"
import { DataGrid } from "@mui/x-data-grid";
import { reportColumns, reportRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Report = () => {
  const [data, setData] = useState(reportRows);

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
        columns={reportColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        autoHeight={true}
      />
    </div>
  );
};

export default Report;


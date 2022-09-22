import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../user-data";
import { Link } from "react-router-dom";
import { useState } from "react";

const User = () => {
  const [data, setData] = useState(userRows);

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
        columns={userColumns.concat(actionColumn)}
        autoHeight={true}
        pageSize={9}
        rowsPerPageOptions={[9]}
    
      />
    </div>
  );
};

export default User;


import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../admin-data";
import { Link } from "react-router-dom";
import { useState } from "react";

const Admin = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      headerAlign:'center',
      align: 'center',
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
      <div className="datatableTitle">
      Total Admins
        <Link to="/users/new" className="link">
          Add New Admin
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        autoHeight={true}
      />
    </div>
  );
};

export default Admin;

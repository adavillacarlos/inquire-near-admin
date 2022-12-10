import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminSummaryModel from "../../models/admin/AdminSummaryModel";

  const AdminSummaryController = () => {
  const [data, setData] = useState([]);
  const { deleteData, fetchData } = AdminSummaryModel(data, setData);

  const handleDelete = (id) => {
    console.log(id); 
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
      headerName: "Action",
      width: 250,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="cellDecision">
            <Link
              to={`/admins/${params.row.id}`}
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

export default AdminSummaryController;
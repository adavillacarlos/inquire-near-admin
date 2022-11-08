import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AdminSummaryModel from "../../models/admin/AdminSummaryModel";

  const AdminSummaryController = () => {
  const [data, setData] = useState([]);
  const { deleteData, fetchData } = AdminSummaryModel(data, setData);

  const handleDelete = (id) => {
    deleteData(id);
  };

  useEffect(() => {
    const unsubscribe = fetchData;
    return () => {
      setData([]);
      unsubscribe();
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
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import UserSummaryModel from "../../models/user/UserSummaryModel";
 
const UserSummaryController = () => {
  const [data, setData] = useState([]);
  const {deleteData,fetchData } = UserSummaryModel(data, setData);

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
      width: 220,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="cellDecision">
            <Link
              to={`/users/${params.row.id}`}
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

export default UserSummaryController;

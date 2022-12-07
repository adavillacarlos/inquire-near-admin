import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ReportSummaryModel from "../../models/reports/ReportSummaryModel";

const ReportSummaryController = () => {
  const [data, setData] = useState([]);
  const { deleteData, fetchData } = ReportSummaryModel(data, setData);

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
              to={`/reports/${params.row.id}`}
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

export default ReportSummaryController;

import "../style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { adminColumns } from "../../models/admin/AdminSummaryModel";
import AdminSummaryController from "../../controllers/admin/AdminSummaryController";
import { Link } from "react-router-dom";

const Datatable = () => {
  const { data, actionColumn } = AdminSummaryController();

  return (
    <div className="datatable">
        <div className="datatableTitle">
        Add New Admin
        <Link to="/admins/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={adminColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;

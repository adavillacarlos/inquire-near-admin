import "../style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../models/user/UserSummaryModel";
import UserSummaryController from "../../controllers/user/UserSummaryController";

const UserSummary = () => {
  const { data, actionColumn } = UserSummaryController();

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default UserSummary;

import "../style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { reportColumns } from "../../models/reports/ReportSummaryModel";
import ReportSummaryController from "../../controllers/reports/ReportSummaryController";

const ReportSummary = () => {
  const { data, actionColumn } = ReportSummaryController();

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={reportColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default ReportSummary;

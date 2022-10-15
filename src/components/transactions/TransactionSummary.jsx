import "../style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { transactionColumns } from "../../models/transaction/TransactionSummaryModel";
import TransactionSummaryController from "../../controllers/transactions/TransactionSummaryController";

const TransactionSummary = () => {
  const { data, actionColumn } = TransactionSummaryController();

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={transactionColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default TransactionSummary;

import Table from 'react-bootstrap/Table';
import { DataGrid } from '@mui/x-data-grid';

const Inquiries = () => {

   

  return (
    <DataGrid
    className="datagrid"
   
    pageSize={9}
    rowsPerPageOptions={[9]}

  />
  );
};

export default Inquiries;

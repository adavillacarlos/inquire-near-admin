  import "./table.scss";
  import * as React from 'react';
  import PropTypes from 'prop-types';
  import { useTheme } from '@mui/material/styles';
  import Box from '@mui/material/Box';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableContainer from '@mui/material/TableContainer';
  import TableFooter from '@mui/material/TableFooter';
  import TablePagination from '@mui/material/TablePagination';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';
  import IconButton from '@mui/material/IconButton';
  import FirstPageIcon from '@mui/icons-material/FirstPage';
  import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
  import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
  import LastPageIcon from '@mui/icons-material/LastPage';
  import TableHead from '@mui/material/TableHead';
  import StarRoundedIcon from '@mui/icons-material/StarRounded';
  import { styled } from '@mui/material/styles';
  import TableCell, { tableCellClasses } from '@mui/material/TableCell';

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      fontSize: 18,
      fontWeight:600,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  function TablePaginationActions(props) {
    
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  
  function createData(img, name, rating, date, jobs, inquiries) {
    return { img, name, rating, date, jobs, inquiries };
  }
  
  const rows = [
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Lee Min Ho', 4.9, '9 Sep 2022', 20, 30),
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Kim So Hyun', 4.9, '9 Sep 2022', 20, 30),
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Im Yoona', 4.9, '9 Sep 2022', 20, 30),
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Jin Seokjin', 4.9, '9 Sep 2022', 20, 30),
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Kim Taehyun', 4.9, '9 Sep 2022', 20, 30),
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Fleurdelisse Rabanes', 4.9, '9 Sep 2022', 20, 30),
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Ada Villacarlos', 4.9, '9 Sep 2022', 20, 30),
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Cymmer Maranga', 4.9, '9 Sep 2022', 20, 30),
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Adi Reyes', 4.9, '9 Sep 2022', 20, 30),
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Mel Gabutan', 4.9, '9 Sep 2022', 20, 30),
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Subzero Cool', 4.9, '9 Sep 2022', 20, 30),
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Inquire Near',4.9, '9 Sep 2022', 20, 30),
    createData('https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png','Kim Jennie', 4.9, '9 Sep 2022', 20, 30),
  ].sort((a, b) => (a.name < b.name ? -1 : 1));
  
  export default function CustomPaginationActionsTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
   
    
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell >User Name</StyledTableCell>
            <StyledTableCell align="center">Rating</StyledTableCell>
            <StyledTableCell align="center">Date Joined</StyledTableCell>
            <StyledTableCell align="center">No. of Jobs Done</StyledTableCell>
            <StyledTableCell align="center">No. of Inquiries Made</StyledTableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
                <StyledTableCell style={{ width: 200 }} >
                  <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.name}
                  </div>
                </StyledTableCell>
                <StyledTableCell style={{ width: 150 }} align="center">
                  <div className="rating">
                  <StarRoundedIcon className="icon"/>
                  {row.rating}
                  </div>
                </StyledTableCell>
                <StyledTableCell style={{ width: 150 }} align="center">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell style={{ width: 200 }} align="center">
                  {row.jobs}
                </StyledTableCell>
                <StyledTableCell style={{ width: 200 }} align="center" >
                  {row.inquiries}
                </StyledTableCell>
              </TableRow>
            ))}
  
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    );


  }


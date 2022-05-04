import React from 'react'
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './../assets/css/style-nav.css'
import Dateshort from "./Dateshort"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(orderno, totalqty, customername, date, note, manage) {
    return { orderno, totalqty, customername, date, note, manage };
  }
  
  const rows = [
    createData('136548', 3, 'James Wills', '24 June 2022', 'NIL', 'NIL'),
    createData('136548', 3, 'James Wills', '24 June 2022', 'NIL', 'NIL'),
    createData('136548', 3, 'James Wills', '24 June 2022', 'NIL', 'NIL'),
    createData('136548', 3, 'James Wills', '24 June 2022', 'NIL', 'NIL'),
    createData('136548', 3, 'James Wills', '24 June 2022', 'NIL', 'NIL'),
    createData('136548', 3, 'James Wills', '24 June 2022', 'NIL', 'NIL'),
  ];

export default function Tabledashboard() {
    return (

    <>
     <div className='table-top-header-nav'>
      <div className='table-heading-title'>
        <h3> New Orders </h3>
      </div>

      <div className='table-filter'>
         <div className='filter-short'>
            <p> Short BY: </p>
            <Dateshort />
         </div>
         <div className='view-all-btn'>
            <a href="#" className='custom-view-all-btn'>View All</a>
         </div>
      </div>
     </div>
      
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="Dashboard table">
            <TableHead>
              <TableRow className='order-table-nav'>
                <StyledTableCell> Order No.</StyledTableCell>
                <StyledTableCell align="center">Total Qty</StyledTableCell>
                <StyledTableCell align="center"> Customer Name </StyledTableCell>
                <StyledTableCell align="center"> Date </StyledTableCell>
                <StyledTableCell align="center"> Note </StyledTableCell>
                <StyledTableCell align="center"> Manage </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.orderno} className='Table-body-nav'>
                  <StyledTableCell component="th" scope="row">
                    {row.orderno}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.totalqty}</StyledTableCell>
                  <StyledTableCell align="center">{row.customername}</StyledTableCell>
                  <StyledTableCell align="center">{row.date}</StyledTableCell>
                  <StyledTableCell align="center">{row.note}</StyledTableCell>
                  <StyledTableCell align="center">{row.manage}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </> 
      );
}

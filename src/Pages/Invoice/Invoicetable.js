import React from 'react'
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./../../assets/css/style-nav.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Ordersearch from  "./ordersearch"

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

  function createData(invoicesummeryno, balance, paiddate, paidamount, balancedue, pdf) {
    return { invoicesummeryno, balance, paiddate, paidamount, balancedue, pdf };
  }
  
  const rows = [
    createData('AAA-Invoice 1',  '10400.00', '02/Aug/2018', '10400.00', '0'),
    createData('AAA-Invoice 1',  '10400.00', '02/Aug/2018', '10400.00', '0'),
    createData('AAA-Invoice 1',  '10400.00', '02/Aug/2018', '10400.00', '0'),
    createData('AAA-Invoice 1',  '10400.00', '02/Aug/2018', '10400.00', '0'),
    createData('AAA-Invoice 1',  '10400.00', '02/Aug/2018', '10400.00', '0'),
    createData('AAA-Invoice 1',  '10400.00', '02/Aug/2018', '10400.00', '0'),
  ];

export default function Invoicetable() {
  return (
    <>
     <div className='shipment-heading-title'>
      <h2> Manage Invoice History </h2>
     </div>
    <Ordersearch />
     <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="Dashboard table">
            <TableHead>
              <TableRow className='order-table-nav'>
                <StyledTableCell> Invoice summary No </StyledTableCell>
                <StyledTableCell align="center">Balance</StyledTableCell>
                <StyledTableCell align="center"> Paid Date </StyledTableCell>
                <StyledTableCell align="center"> Paid Amount </StyledTableCell>
                <StyledTableCell align="center"> Balance Due </StyledTableCell>
                <StyledTableCell align="center"> PDF </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.orderno} className='Table-body-nav'>
                  <StyledTableCell component="th" scope="row">
                    {row.invoicesummeryno}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.balance}</StyledTableCell>
                  <StyledTableCell align="center">{row.paiddate}</StyledTableCell>
                  <StyledTableCell align="center">{row.paidamount}</StyledTableCell>
                  <StyledTableCell align="center">{row.balancedue}</StyledTableCell>
                  <StyledTableCell align="center"><a target="_blank" className='viewpdff' href="http://siamsuitssupply.com/new/retailer/invoice/retailerPDFhistory/MQ=="> View</a></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  )
}

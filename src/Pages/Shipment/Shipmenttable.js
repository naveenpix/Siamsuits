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

  function createData(srno, date, boxtrackingno, retailer, product, action) {
    return { srno, date, boxtrackingno, retailer, product, action };
  }
  
  const rows = [
    createData('1',  '24 June 2022', '12345678901', 'Sanjana', '1 Pants,1 Vest,1 Shirt', ),
    createData('2',  '24 June 2022', '12345678901', 'Sanjana', '1 Pants,1 Vest,1 Shirt'),
    createData('3',  '24 June 2022', '12345678901', 'Sanjana', '1 Pants,1 Vest,1 Shirt'),
    createData('4',  '24 June 2022', '12345678901', 'Sanjana', '1 Pants,1 Vest,1 Shirt'),
    createData('5',  '24 June 2022', 'ABDCEFGHIJKL', 'Sanjana', '1 Pants,1 Vest,1 Shirt'),
    createData('6',  '24 June 2022', '12345678901', 'Sanjana', '1 Pants,1 Vest,1 Shirt'),
  ];

export default function Shipmenttable() {
  return (
    <>
     <div className='shipment-heading-title'>
      <h2> Shipping Box Report </h2>
     </div>
     <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="Dashboard table">
            <TableHead>
              <TableRow className='order-table-nav'>
                <StyledTableCell> Sr No.</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center"> Box Tracking No. </StyledTableCell>
                <StyledTableCell align="center"> Retailer </StyledTableCell>
                <StyledTableCell align="center"> Product </StyledTableCell>
                <StyledTableCell align="center"> Action </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.orderno} className='Table-body-nav'>
                  <StyledTableCell component="th" scope="row">
                    {row.srno}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.date}</StyledTableCell>
                  <StyledTableCell align="center">{row.boxtrackingno}</StyledTableCell>
                  <StyledTableCell align="center">{row.retailer}</StyledTableCell>
                  <StyledTableCell align="center">{row.product}</StyledTableCell>
                  <StyledTableCell align="center"> <a href="http://siamsuitssupply.com/new/retailer/orders/pdfshipmentbox/2waxFI_dgE9bie8bMmXiVxnN_c6soiVOujPEkATG72Dq6v8ZP9BpJL4bOhvgzxoiNrqNUer7F_HcDqrMT7xR9w~~" target="_blank"> <PictureAsPdfIcon /> </a> </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  )
}

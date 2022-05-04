
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

import {
    Row,
    Container,
    Col,
  } from "react-bootstrap";
import Sidepanelnav from "../../views/Sidepanelnav";
import Dashboardfront from "../../views/Dashboardfront";
import Ordermenu from "./Ordermenu"


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

    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData( id, customername, orderno, orderdate, qty, status, repeatorder) {
    return { id, customername, orderno, orderdate, qty, status, repeatorder };
  }
  
  const rows = [
    createData('1',  'Sanjana', '12345678901', '24 June 2022', '15', 'Complete' ),
    createData('2',  'Sanjana', '12345678901', '24 June 2022', '15', 'Pending' ),
    createData('3',  'Sanjana', '12345678901', '24 June 2022', '15', 'Pending' ),
    createData('4',  'Sanjana', '12345678901', '24 June 2022', '15', 'Pending' ),
    createData('5',  'Sanjana', '12345678901', '24 June 2022', '15', 'Pending' ),
    createData('6',  'Sanjana', '12345678901', '24 June 2022', '15', 'Pending' ),
  ];


export default function Groudorder() {
  return (
    <>
    <Container fluid>
        <Row>
          <Col lg="2">
             <Sidepanelnav />
           </Col>
          <Col lg="10">
            <Dashboardfront />
            <div className="panel-change-boxes">
             <Ordermenu />
            </div>
            <div className="panel-change-boxes">
              <div className='order-table-box-navm'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="Dashboard table">
                    <TableHead>
                        <TableRow className='order-table-nav'>
                        <StyledTableCell> Id </StyledTableCell>
                        <StyledTableCell align="center">Customer Name</StyledTableCell>
                        <StyledTableCell align="center"> Order No. </StyledTableCell>
                        <StyledTableCell align="center"> Order Date </StyledTableCell>
                        <StyledTableCell align="center"> QTY </StyledTableCell>
                        <StyledTableCell align="center"> Status </StyledTableCell>
                        <StyledTableCell align="center"> Repet Order </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <StyledTableRow key={row.orderno} className='Table-body-nav'>
                            <StyledTableCell component="th" scope="row">
                            {row.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.customername}</StyledTableCell>
                            <StyledTableCell align="center">{row.orderno}</StyledTableCell>
                            <StyledTableCell align="center">{row.orderdate}</StyledTableCell>
                            <StyledTableCell align="center">{row.qty}</StyledTableCell>
                            <StyledTableCell align="center">{row.status}</StyledTableCell>
                            <StyledTableCell align="center"><button className='repeatorderbtn'> Group Order </button> </StyledTableCell>
                        </StyledTableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                </div>
            </div>
          </Col> 
        </Row>
      </Container>
   
   </>
  )
}

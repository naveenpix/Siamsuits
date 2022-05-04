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
    Container,
    Row,
    Col,
  } from "react-bootstrap";
  import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"; 
import Sidepanelnav from "./../../views/Sidepanelnav" ;
import Dashboardfront from "./../../views/Dashboardfront";

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

  function createData(id, customername, emailid, profile, previousorder, order ) {
    return { id, customername, emailid, profile, previousorder, order };
  }
  
  const rows = [
    createData('1',  'Test 01', 'info@example.com', <Link to="/"> View </Link>, '1 Pants,1 Vest,1 Shirt', ),
    createData('2',  'Test 02', 'info@example.com', <Link to="/"> View </Link>, '1 Pants,1 Vest,1 Shirt'),
    createData('3',  'Test 03', '', <Link to="/"> View </Link>, '1 Pants,1 Vest,1 Shirt'),
    createData('4',  'Test 04', 'info@example.com', <Link to="/"> View </Link>, '1 Pants,1 Vest,1 Shirt'),
    createData('5',  'Test 05', '', <Link to="/"> View </Link>, '1 Pants,1 Vest,1 Shirt'),
    createData('6',  'Test 06', 'info@example.com', <Link to="/"> View </Link>, '1 Pants,1 Vest,1 Shirt'),
    createData('6',  'Test 07', 'info@example.com', <Link to="/"> View </Link>, '1 Pants,1 Vest,1 Shirt'),
  ];

export default function Viewcustomer() {
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
               <div className='customer-panel-box'>
                  <Link className='custom-btn-nav' exact to="/admin/viewcustomer"> Edit Customer </Link>
                  <Link className='custom-btn-nav' exact to="/admin/viewprofile"> View Profile </Link>
                  <Link className='custom-btn-nav' exact to="/admin/add"> New Customer </Link>
                  <Link className='custom-btn-nav' exact to="/admin/searchcustomer"> Edit / View old Order </Link>
              </div>

              <div className='shipment-heading-title'>
                <h2> All Customers </h2>
              </div>
  
        <TableContainer component={Paper}>
           <Table sx={{ minWidth: 700 }} aria-label="Dashboard table">
            <TableHead>
              <TableRow className='order-table-nav'>
                <StyledTableCell> Id </StyledTableCell>
                <StyledTableCell align="center"> Customer Name </StyledTableCell>
                <StyledTableCell align="center"> Email ID </StyledTableCell>
                <StyledTableCell align="center">  Profile  </StyledTableCell>
                <StyledTableCell align="center"> Previouds Order </StyledTableCell>
                <StyledTableCell align="center"> Order </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.orderno} className='Table-body-nav'>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.customername}</StyledTableCell>
                  <StyledTableCell align="center">{row.emailid}</StyledTableCell>
                  <StyledTableCell align="center">{row.profile}</StyledTableCell>
                  <StyledTableCell align="center">{row.previousorder}</StyledTableCell>
                  <StyledTableCell align="center">{row.order}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
           </div>
        </Col> 
      </Row>
    </Container>
  </>
   
  )
}

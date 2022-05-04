import React, { useState } from "react";
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./../../assets/css/style-nav.css";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Orderform from "./Orderform";
import {
    Row,
    Col,
    Card
  } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import suit from "./../../assets/image/suit.jpg"


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

  function createData( id, customername, orderno, orderdate, qty, status, trackorder, manage) {
    return { id, customername, orderno, orderdate, qty, status, trackorder, manage };
  }
  
  const rows = [
    createData('1',  'Sanjana', '12345678901', '24 June 2022', '15', 'Complete' ),
    createData('2',  'Sanjana', '12345678901', '24 June 2022', '15', 'Pending' ),
    createData('3',  'Sanjana', '12345678901', '24 June 2022', '15', 'Pending' ),
    createData('4',  'Sanjana', '12345678901', '24 June 2022', '15', 'Pending' ),
    createData('5',  'Sanjana', '12345678901', '24 June 2022', '15', 'Pending' ),
    createData('6',  'Sanjana', '12345678901', '24 June 2022', '15', 'Pending' ),
  ];

  
export default function Ordertable() {
    const [lgShow, setLgShow] = useState(false);
    const [lgShown, setLgShown] = useState(false);

  return (
    <>
     <div className='shipment-heading-title'>
      <h2> All Order </h2>
     </div>
     
     <Orderform />

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
            <StyledTableCell align="center"> Track order </StyledTableCell>
            <StyledTableCell align="center"> Manage </StyledTableCell>
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
                <StyledTableCell align="center"><button onClick={() => setLgShown(true)} className='trackorder'> Track Order </button> </StyledTableCell>
                <StyledTableCell align="center"><button className='view-btn' onClick={() => setLgShow(true)}> <VisibilityOutlinedIcon /> </button> <button className='edit-btn'> <ModeEditIcon /> </button> <button className='delete-btn'> <DeleteOutlineIcon /> </button> </StyledTableCell>
            </StyledTableRow>
            ))}
          </TableBody>
         </Table>
       </TableContainer>
      </div>

{/* <!-- Modal --> */}
   <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
            View Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="5" className="pr-0">
              <Card>
                 <div className="order-model-list-left">
                 <ul class="list-group list-group-flush">
                        <li class="list-group-item p-3">
                            <h5 class="font-weight-bold pb-2">Order Info</h5>
                            <div class="table-responsive">
                                <table class="table table-borderless mb-0">
                                    <tbody>
                                        <tr class="white-space-no-wrap">
                                            <td class="text-muted pl-0">
                                                ID
                                            </td>
                                            <td>
                                                OR-325548
                                            </td>
                                        </tr>
                                        <tr class="white-space-no-wrap">
                                            <td class="text-muted pl-0">
                                                Date &amp; Time
                                            </td>
                                            <td>
                                                01 Jan 2021 06:32
                                            </td>
                                        </tr>
                                        <tr class="white-space-no-wrap">
                                            <td class="text-muted pl-0">
                                                Payment Method
                                            </td>
                                            <td>
                                                Credit Card
                                            </td>
                                        </tr>
                                        <tr class="white-space-no-wrap">
                                            <td class="text-muted pl-0">
                                                Invoice
                                            </td>
                                            <td class="text-primary">
                                                IN-302240
                                            </td>
                                        </tr>
                                        <tr class="white-space-no-wrap">
                                            <td class="text-muted pl-0">
                                                Status
                                            </td>
                                            <td>
                                                <p class="mb-0 text-success font-weight-bold d-flex justify-content-start align-items-center">
                                                    <small><svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                    <circle cx="12" cy="12" r="8" fill="#3cb72c"></circle></svg>
                                                    </small>Completed
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li class="list-group-item p-3">
                            <h5 class="font-weight-bold pb-2">Customer Details</h5>
                            <div class="table-responsive">
                                <table class="table table-borderless mb-0">
                                    <tbody>
                                        <tr class="white-space-no-wrap">
                                            <td class="text-muted pl-0">
                                                Name
                                            </td>
                                            <td>
                                                John Lynn
                                            </td>
                                        </tr>
                                        <tr class="white-space-no-wrap">
                                            <td class="text-muted pl-0">
                                                Email
                                            </td>
                                            <td>
                                                lynnj34@blueberry.com
                                            </td>
                                        </tr>
                                        <tr class="white-space-no-wrap">
                                            <td class="text-muted pl-0">
                                                Phone
                                            </td>
                                            <td>
                                                +21 11445-2213
                                            </td>
                                        </tr>
                                        <tr class="white-space-no-wrap">
                                            <td class="text-muted pl-0">
                                                Country
                                            </td>
                                            <td>
                                                USA
                                            </td>
                                        </tr>
                                        <tr class="white-space-no-wrap">
                                            <td class="text-muted pl-0">
                                                State/Region
                                            </td>
                                            <td>
                                                Ohio
                                            </td>
                                        </tr>
                                        <tr class="white-space-no-wrap">
                                            <td class="text-muted pl-0">
                                                Address
                                            </td>
                                            <td>
                                                201, Baker Street
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                 </div> 
              </Card>
            </Col> 
            <Col xs="7" className="pl-0">
              <div className="order-profile-usernam">
              <table className="table mb-0">
                <thead>
                    <tr class="text-muted">
                    <th scope="col">Order No.</th>
                    <th scope="col">Order Date</th>
                    <th scope="col" className="text-right">Quantity</th>
                    <th scope="col" className="text-right">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="active-project-1 d-flex align-items-center mt-0 ">
                                <div className="data-content">
                                    <div>
                                      <span className="font-weight-bold"> 12345678 </span>                           
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="text-right">
                          24 June 2022
                        </td>
                        <td className="text-right">
                            1
                        </td>
                        <td className="text-right">
                            $74.98
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="active-project-1 d-flex align-items-center mt-0 ">
                                <div className="data-content">
                                    <div>
                                      <span className="font-weight-bold"> 12345678 </span>                           
                                    </div>
                                
                                </div>
                            </div>
                        </td>
                        <td className="text-right">
                          24 June 2022
                        </td>
                        <td className="text-right">
                            1
                        </td>
                        <td className="text-right">
                            $74.98
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="active-project-1 d-flex align-items-center mt-0 ">
                                <div className="data-content">
                                    <div>
                                      <span className="font-weight-bold"> 12345678 </span>                           
                                    </div>
                                   
                                </div>
                            </div>
                        </td>
                        <td className="text-right">
                          24 June 2022
                        </td>
                        <td className="text-right">
                            1
                        </td>
                        <td className="text-right">
                            $74.98
                        </td>
                    </tr>
                  </tbody>
               </table>
               <div className="d-flex justify-content-end totle-amount-nm">
                  Total: <p className="ml-2 mb-0 font-weight-bold">$1,237.44</p>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

    {/* Track Order Modal */}
   
    <Modal
        size="lg"
        className='tracking-modal'
        show={lgShown}
        onHide={() => setLgShown(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
            Tracking Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
             <Col xs="12" className='ordertrack'>
             <section class="root">
                <figure>
                <img src={suit} alt="" />
                    <figcaption>
                    <h4> Customize Suit </h4>
                    <h6>Category</h6>
                    <h2>₹ 23,456</h2>
                    </figcaption>
                </figure>
                <div class="order-track">
                    <div class="order-track-step">
                    <div class="order-track-status">
                        <span class="order-track-status-dot"></span>
                        <span class="order-track-status-line"></span>
                    </div>
                    <div class="order-track-text">
                        <p class="order-track-text-stat">Order Received</p>
                        <span class="order-track-text-sub">21st November, 2019</span>
                    </div>
                    </div>
                    <div class="order-track-step">
                    <div class="order-track-status">
                        <span class="order-track-status-dot"></span>
                        <span class="order-track-status-line"></span>
                    </div>
                    <div class="order-track-text">
                        <p class="order-track-text-stat">Order Processed</p>
                        <span class="order-track-text-sub">21st November, 2019</span>
                    </div>
                    </div>
                    <div class="order-track-step">
                    <div class="order-track-status">
                        <span class="order-track-status-dot"></span>
                        <span class="order-track-status-line"></span>
                    </div>
                    <div class="order-track-text">
                        <p class="order-track-text-stat">Manufracturing In Progress</p>
                        <span class="order-track-text-sub">21st November, 2019</span>
                    </div>
                    </div>
                    <div class="order-track-step">
                    <div class="order-track-status">
                        <span class="order-track-status-dot"></span>
                        <span class="order-track-status-line"></span>
                    </div>
                    <div class="order-track-text">
                        <p class="order-track-text-stat">Order Dispatched</p>
                        <span class="order-track-text-sub">21st November, 2019</span>
                    </div>
                    </div>
                    <div class="order-track-step">
                    <div class="order-track-status">
                        <span class="order-track-status-dot"></span>
                        <span class="order-track-status-line"></span>
                    </div>
                    <div class="order-track-text">
                        <p class="order-track-text-stat">Order Deliverd</p>
                        <span class="order-track-text-sub">21st November, 2019</span>
                    </div>
                    </div>
                </div>
                </section>
             </Col>
          </Row>
        </Modal.Body>
      </Modal>

    </>
  )
}


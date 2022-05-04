import React from 'react'
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


export default function Editcustomer() {
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
                <h2> Edit Customers  </h2>
              </div>
  
           </div>
        </Col> 
      </Row>
    </Container>
  </>
  )
}

import React from 'react'
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
import Sidepanelnav from "./../../views/Sidepanelnav" ;
import Dashboardfront from "./../../views/Dashboardfront";
import Invoicetable from "./Invoicetable"

export default function Invoices() {
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
               <Invoicetable />
             </div>
          </Col> 
        </Row>
      </Container>
    </>
  )
}

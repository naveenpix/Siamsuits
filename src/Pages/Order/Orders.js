import React from 'react'
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Sidepanelnav from "./../../views/Sidepanelnav";
import Dashboardfront from "./../../views/Dashboardfront";
import Ordermenu from "./Ordermenu"
import Ordertable from  "./Ordertable"

export default function Orders() {
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
            <div className='order-mainpage-table'>
               <Ordertable />
            </div>

          </Col> 
        </Row>
      </Container>
   
   </>
  )
}

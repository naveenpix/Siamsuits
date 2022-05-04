import React from 'react'
import './../../assets/css/style-nav.css'
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Sidepanelnav from "./../../views/Sidepanelnav";
import Dashboardfront from "./../../views/Dashboardfront";
import Shipmenttable from './Shipmenttable';

export default function Shipments() {
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
              <Shipmenttable />
            </div>

          </Col> 
        </Row>
      </Container>
    </>
  )
}

import React from 'react'
import {
    Container,
    Row,
    Col,
} from "react-bootstrap";
import Sidepanelnav from "./../../views/Sidepanelnav";
import Dashboardfront from "./../../views/Dashboardfront";
import Addnewcustomer from './addnewcustomer';

export default function Add() {
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
               <Addnewcustomer />
            </div>

          </Col> 
        </Row>
      </Container>
    </>
  )
}

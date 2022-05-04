import React from "react";
import './../assets/css/style-nav.css'
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Sidepanelnav from "./Sidepanelnav";
import Dashboardfront from "./Dashboardfront";
import BasicTabs from "./Tabpanel"
import Tabledashboard from "./Table";


function Dashboard() {
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
              <BasicTabs />
              <Tabledashboard />
            </div>

          </Col> 
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;

import React, { useState } from "react";
import './../assets/css/style-nav.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {
  Row,
  Col,
  Nav,
  Card
} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import suit from "./../assets/image/suit.jpg"
import Profile from './../assets/image/Profile.png'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Sidepanelnav() {
  const [lgShown, setLgShown] = useState(false);
    return (     
      <>
      
        <Card className="box-shadow">
            <Card.Body >
            <div className="admin-sidebar-nav">
                <div className="profile-image-Nav">
                <img src={Profile} alt="" />
                </div>
                <div className="profile-content">
                <p>Hello,</p>
                <h3>James Wick</h3> 
                </div>
                </div>
                <hr></hr>
                <div className="Side-navbar-Navm">
                  <Nav >
                    <Link exact to="/admin/dashboard"> <DashboardIcon /> Dashboard </Link>
                    <Link to="/admin/add"> <PersonAddAltIcon /> Add New Customer </Link>
                    <Link href="#"> <AcUnitIcon /> Place Order </Link>
                    <Link href="#"> <AppRegistrationIcon /> Manage Order </Link>
                    <Link href="#" onClick={() => setLgShown(true)} className='trackorder'> <StackedLineChartIcon /> Track Order </Link>
                  </Nav>
                </div>
            </Card.Body>    
          </Card>


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
    );
  }
  
  export default Sidepanelnav;
  

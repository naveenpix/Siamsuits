import React from "react";
import './../assets/css/style-nav.css'
import {
    Nav,
  } from "react-bootstrap";
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function Dashboardfront() {
  return (
    <>
    <div className='dash-panel-top-nav'>
        <Nav>
            <Link exact to="/admin/order"> Order </Link>
            <Link exact to="/admin/customer"> Customer </Link>
            <Link exact to="/admin/invoices"> Invoice </Link>
            <Link exact to="/admin/shipment"> Shipment </Link>
        </Nav>
    </div>
    </> 
  )
}

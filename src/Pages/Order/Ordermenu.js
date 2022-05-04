import React from 'react'
import './../../assets/css/style-nav.css'
import product from './../../assets/image/product.png'
// react-bootstrap components
import {
  Card,
  Row,
  Col,
} from "react-bootstrap";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function Ordermenu() {
  return (
    <>
     <div className='three-boxes'>
         <Row>
            <Col lg="3">
              <Card className='light-pink'>
                <Card.Body>
                <Link to="/admin/add" exact>  <div className="d-flex-cardboxnm">
                        <div className='ordericon'>
                             <img src={product} alt="" />  
                        </div>
                        <div className='order-content-bxo'>
                            <h3> 24 </h3> 
                            <p> New Order </p>  
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon /> </Link>
                 </Card.Body>
               </Card>
            </Col>

            <Col lg="3">
            <Card className='light-green'>
                <Card.Body>
                   <Link to="/admin/repeatorder" exact> <div className="d-flex-cardboxnm">
                        <div className='ordericon'>
                             <img src={product} alt="" />  
                        </div>
                        <div className='order-content-bxo'>
                            <h3> 12 </h3> 
                            <p> Repeat Order </p>  
                        </div>
                    </div> 
                    <MoreHorizOutlinedIcon />  </Link>
                 </Card.Body>
               </Card>
            </Col>

            <Col lg="3">
            <Card className='light-blue'>
                <Card.Body>
                  <Link to="/admin/grouporder" exact>  <div className="d-flex-cardboxnm">
                        <div className='ordericon'>
                             <img src={product} alt="" />  
                        </div>
                        <div className='order-content-bxo'>
                            <h3> 06 </h3> 
                            <p> Group Order </p>  
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon /> </Link>
                 </Card.Body>
               </Card>
            </Col>
         </Row>
        
     </div>
    </>
  )
}

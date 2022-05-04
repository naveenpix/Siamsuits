import React from 'react'
import './../assets/css/style-nav.css'
import product from './../assets/image/product.png'
// react-bootstrap components
import {
  Card,
  Row,
  Col,
} from "react-bootstrap";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function Tabpanel() {
  return (
    <>
     <div className='three-boxes'>
         <Row>
            <Col lg="3">
              <Card className='light-pink'>
                <Card.Body>
                    <div className="d-flex-cardboxnm">
                        <div className='ordericon'>
                             <img src={product} alt="" />  
                        </div>
                        <div className='order-content-bxo'>
                            <h3> 2400 </h3> 
                            <p> Total Order </p>  
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon />
                 </Card.Body>
               </Card>
            </Col>

            <Col lg="3">
            <Card className='light-green'>
                <Card.Body>
                    <div className="d-flex-cardboxnm">
                        <div className='ordericon'>
                             <img src={product} alt="" />  
                        </div>
                        <div className='order-content-bxo'>
                            <h3> 1200 </h3> 
                            <p> Total Repeat Order </p>  
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon />
                 </Card.Body>
               </Card>
            </Col>

            <Col lg="3">
            <Card className='light-blue'>
                <Card.Body>
                    <div className="d-flex-cardboxnm">
                        <div className='ordericon'>
                             <img src={product} alt="" />  
                        </div>
                        <div className='order-content-bxo'>
                            <h3> 180 </h3> 
                            <p> Total Group Order </p>  
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon />
                 </Card.Body>
               </Card>
            </Col>
         </Row>
        
     </div>
    </>
  )
}

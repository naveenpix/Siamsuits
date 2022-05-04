import React from 'react'
import {Grid, TextField, Button } from '@mui/material';
import {
    Row,
    Col,
  } from "react-bootstrap";


export default function Orderform() {
  return (
    <>
    <div className='order-search-from'>
        <Row className='form-filed-ordersearch'>
          <Col> 
            <TextField
               name="Customer name"
               fullWidth
               type="text"
               id="customername"
               placeholder="Customer Name"
               className='form-control'
               autoFocus
             />
            </Col>
            <Col> 
            <TextField
               name="Order No."
               fullWidth
               type="text"
               id="orderno"
               placeholder="Order No."
               className='form-control'
               autoFocus
             />
            </Col>
            <Col> 
            <TextField
               name="Order Date"
               fullWidth
               type="text"
               id="orderdate"
               placeholder="Order Date"
               className='form-control'
               autoFocus
             />
            </Col>
            <Col>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            className='custom-btn-nav'
            color="primary">
                Search
            </Button>
            </Col>
         </Row>
    </div>
    </>
  )
}

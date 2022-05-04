import React from 'react'
import {TextField, Button } from '@mui/material';
import {
    Row,
    Col,
  } from "react-bootstrap";


export default function Ordersearch() {
  return (
    <>
    <div className='order-search-from'>
        <Row className='form-filed-ordersearch'>
          <Col> 
          <label> Start Date </label>
            <TextField
               name="Start Date"
               fullWidth
               type="date"
               id="startdate"
               placeholder="Start Date"
               className='form-control'
               autoFocus
             />
            </Col>
            <Col> 
            <label> End Date </label>
            <TextField
               name="End Date"
               fullWidth
               id="enddate"
               type="date"
               placeholder="End Date"
               className='form-control'
               autoFocus
             />
            </Col>
            <Col>
            <label style={{opacity: "0"}}> Search </label>
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

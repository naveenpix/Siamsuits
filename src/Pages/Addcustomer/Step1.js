import React from 'react'
import { TextField } from '@mui/material';
import {
    Row,
    Col,
  } from "react-bootstrap";
  import MenuItem from '@mui/material/MenuItem';
  import Select from '@mui/material/Select';
   
export default function Step1() {

  const [gender, setGender] = React.useState(''); 
  const handleChange = (event) => {
      setGender(event.target.value);

  };
 const [country, setCountry] = React.useState(''); 
  const handleChangecountry = (event) => {
      setCountry(event.target.value);
      console.log(event.target.value);
  };
  return (
    <fieldset>
     <div class="form-card-Nav">
        <h2 class="fs-title"> Customer Registration </h2> 
        <Row>
          <Col xs="6">
            <div className='form-group'>
              <label> First Name </label>
            <TextField
              name="First Name *"
              fullWidth
              type="text"
              id="firstname"
              className='form-control-custom'
              autoFocus
            />
            </div>
          </Col>
          <Col xs="6">
          <div className='form-group'>
          <label> Last Name </label>
          <TextField
              name="Last Name *"
              fullWidth
              type="text"
              id="lastname"
              className='form-control-custom'
              autoFocus
            />
            </div>
          </Col>
          <Col xs="6">
          <div className='form-group'>
          <label> Gender </label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            className='form-control-custom'
            onChange={handleChange}
            >
            <MenuItem value={10} selected>Select</MenuItem> 
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
            <MenuItem value={30}>Transgender</MenuItem>
            
            </Select>
            </div>
          </Col>
          <Col xs="6">
          <div className='form-group'>
          <label> Email </label>
            <TextField
              name="Email"
              fullWidth
              type="email"
              id="customername"
              className='form-control-custom'
              autoFocus
            />
            </div>
          </Col>
          <Col xs="6">
          <div className='form-group'>
          <label> City </label>
            <TextField
              name="city"
              fullWidth
              type="text"
              id="customername"
              className='form-control-custom'
              autoFocus
            />
            </div>
          </Col>
          <Col xs="6">
          <div className='form-group'>
          <label> Country </label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Country"
            className='form-control-custom'
            onChange={handleChangecountry}
            >
            <MenuItem value={10} selected>Select Country</MenuItem> 
            <MenuItem value={10}>Afganistan</MenuItem>
            <MenuItem value={20}>America</MenuItem>
            <MenuItem value={30}>Africa</MenuItem>
            
            </Select>
            </div>
          </Col>
          <Col xs="6">
          <div className='form-group'>
          <label> Cell Phone </label>
            <TextField
              name="Cell Phone"
              fullWidth
              type="text"
              id="cellphone"
              className='form-control-custom'
              autoFocus
            />
            </div>
          </Col>
        </Row>
    </div> 
    <input type="button" name="next" class="next action-button" value="Save" />
</fieldset>
  )
}

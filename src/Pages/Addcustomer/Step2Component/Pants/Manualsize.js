
import React from 'react'
import {
    Container,
    Row,
    Col,
} from "react-bootstrap";
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Manualsize() {

    const [manualsize, setManusalsize] = React.useState(''); 
    
    const handleChange = (event) => {
        setManusalsize(event.target.value);
        console.log (event.target.value)
    };

  return (
    <>
      <Container fluid>
          <Row>
              <Col xs="4" className='m-auto'>
                 <div className='size-select-box'>
                   <label> Select Manual Size </label> 
                 <Select
                    labelId="-label"
                    id=""
                    value={manualsize}
                    label="Manualsize"
                    className='form-control-custom'
                    onChange={handleChange}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                          return <em>Placeholder</em>;
                        }
            
                        return selected.join(', ');
                      }}
                    >
                    <MenuItem value={11}> -- Select Size --</MenuItem> 
                    <MenuItem value={12}>23</MenuItem>
                    <MenuItem value={23}>26</MenuItem>                    
                    </Select>
                 </div>
              </Col>
          </Row>
          <Row>
            <Col xs="6">
               <div className='form-sizess-boxes'>
                 <Row>
                    <Col xs="3">
                      <h4> Mesurment Name </h4> 
                    </Col>
                    <Col xs="3">
                      <h4> Value </h4>
                    </Col>
                    <Col xs="3">
                      <h4> Adjustment </h4>
                    </Col>
                    <Col xs="3">
                      <h4> Total Value </h4>
                    </Col>
                 </Row>
                  <Row>
                    <Col xs="3">
                       <div className='mesurment-name'>
                        <p> Length </p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <TextField
                        name=""
                        fullWidth
                        type="text"
                        id=""
                        className='form-control-custom'
                        autoFocus
                      />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                       <div className='mesurment-name'>
                        <p> Chest </p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <TextField
                        name=""
                        fullWidth
                        type="text"
                        id=""
                        className='form-control-custom'
                        autoFocus
                      />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                       <div className='mesurment-name'>
                        <p> Waist </p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <TextField
                        name=""
                        fullWidth
                        type="text"
                        id=""
                        className='form-control-custom'
                        autoFocus
                      />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                       <div className='mesurment-name'>
                        <p> Hips </p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <TextField
                        name=""
                        fullWidth
                        type="text"
                        id=""
                        className='form-control-custom'
                        autoFocus
                      />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                       <div className='mesurment-name'>
                        <p> Shoulder </p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <TextField
                        name=""
                        fullWidth
                        type="text"
                        id=""
                        className='form-control-custom'
                        autoFocus
                      />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                       <div className='mesurment-name'>
                        <p> Bicep </p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <TextField
                        name=""
                        fullWidth
                        type="text"
                        id=""
                        className='form-control-custom'
                        autoFocus
                      />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                  </Row>
               </div>
               
            </Col>
            <Col xs="6">
            <div className='form-sizess-boxes'>
            <Row>
                <Col xs="3">
                  <h4> Mesurment Name </h4> 
                </Col>
                <Col xs="3">
                  <h4> Value </h4>
                </Col>
                <Col xs="3">
                  <h4> Adjustment </h4>
                </Col>
                <Col xs="3">
                  <h4> Total Value </h4>
                </Col>
              </Row>
              <Row>
                    <Col xs="3">
                       <div className='mesurment-name'>
                        <p> Left Sleeve </p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <TextField
                        name=""
                        fullWidth
                        type="text"
                        id=""
                        className='form-control-custom'
                        autoFocus
                      />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                       <div className='mesurment-name'>
                        <p> Right Sleeve </p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <TextField
                        name=""
                        fullWidth
                        type="text"
                        id=""
                        className='form-control-custom'
                        autoFocus
                      />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                       <div className='mesurment-name'>
                        <p> Front </p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <TextField
                        name=""
                        fullWidth
                        type="text"
                        id=""
                        className='form-control-custom'
                        autoFocus
                      />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                       <div className='mesurment-name'>
                        <p> Jacket Back </p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <TextField
                        name=""
                        fullWidth
                        type="text"
                        id=""
                        className='form-control-custom'
                        autoFocus
                      />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                       <div className='mesurment-name'>
                        <p> Jacket Guff </p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <TextField
                        name=""
                        fullWidth
                        type="text"
                        id=""
                        className='form-control-custom'
                        autoFocus
                      />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                       <div className='mesurment-name'>
                        <p> First Button </p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <TextField
                        name=""
                        fullWidth
                        type="text"
                        id=""
                        className='form-control-custom'
                        autoFocus
                      />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                    <Col xs="3">
                      <TextField
                          name=""
                          fullWidth
                          type="text"
                          id=""
                          className='form-control-custom'
                          autoFocus
                        />
                    </Col>
                  </Row>
               </div>
            </Col>
          </Row>

      </Container>
    </>
  );
}

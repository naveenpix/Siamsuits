import React from 'react';
import Whitelogo from './../assets/image/Whitelogo.png';
import Loginbg from './../assets/image/Loginbg.png';
import {Grid, TextField, Button, Card, InputAdornment } from '@mui/material';
import {PersonOutline } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';
import {Link, useHistory} from "react-router-dom";
import { Container, Col, Item } from "react-bootstrap";

export default function Login(){
  const history = useHistory();
  return (
    <>
        <section className='login-section'  style={{ backgroundImage: "url(" + Loginbg + ")" }}>
           <div className='logobox'>
             <img src={Whitelogo} alt="Logo" />
           </div>
         
         <Container container spacing={2} >
         <Card Item xs={4} zeroMinWidth  className='form-width-nav'>
          <Col xs={12}>
            <h1> Retailer Login </h1>
          </Col> 
         <form  noValidate>
         <Container spacing={2} className='pd-20'>
           <Col item xs={12}>
             <Grid item className='custom-form-group'>
                <TextField
                  autoComplete="name"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  placeholder="User Name"
                  className='form-control'
                  autoFocus
                  InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                    <PersonOutline />
                    </InputAdornment>
                    ),
                    }}
                />
           </Grid>
           </Col>
           <Col item xs={12}>
           <Grid item className='custom-form-group'>
             <TextField
               variant="outlined"
               required
               fullWidth
               name="password"
               type="password"
               className='form-control'
               placeholder="Password"
               id="password"
               autoComplete="current-password"
               InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
                ),
                }}
             />
             </Grid>
           </Col>
    
         </Container>
         
        
         <Button
           type="submit"
           fullWidth
           variant="contained"
           className='custom-btn-nav'
           onClick={() => history.push("/admin/dashboard")}
           color="primary">
            <LoginIcon className="loginicon"/>  
                Login
         </Button>
        
         <Container className='rightalignnavm'>
           <Grid item className='d-flex forget-pd'>
             <Link to="#" variant="body2">
                 Forget Password?
             </Link>
             <p> Have Questions? </p>
           </Grid>
           </Container> 
       </form>
         
         </Card>
         </Container>
        </section>
    </>
  )
}

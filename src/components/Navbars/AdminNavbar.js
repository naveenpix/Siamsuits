import React from "react";
import './Navbar.css'
import { useHistory, Link } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Logo from './../../assets/image/Logo.png'
import Profile from './../../assets/image/Profile.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

function Header() {
const history = useHistory();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
         
          <Link  to="/admin/dashboard" className="mr-2 logomain" >
            <img src={Logo} alt="Logo"/>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="nav center-search">
            
            <Nav.Item>
              <Nav.Link>
              <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 650, height: 55 }}
                >
                   <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>

                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Order #, Customer name, Invoice #, Shipment #"
                    inputProps={{ 'aria-label': 'Search Order #, Customer name, Invoice #, Shipment #',  }}
                   
                  />
                
                  <Dropdown as={Nav.Item} className='order-searchdrop-nav'>
                      <Dropdown.Toggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        as={Nav.Link}
                        data-toggle="dropdown"
                        id="navbarDropdownMenuLink"
                        variant="default"
                        className="m-0 "
                      >
                        <span className="no-icon">Select</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                        <Dropdown.Item
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Order 1
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                         Order 2
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Order 3
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Order 4
                        </Dropdown.Item>
                        <div className="divider"></div>
                        <Dropdown.Item
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                         >
                          Order 5
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                </Paper>
              </Nav.Link>
            </Nav.Item>
          </div>
          <Nav className="">
          <Dropdown className='notification-box' as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                data-toggle="dropdown"
                id="dropdown-67443507"
                variant="default"
                className="m-0"
              >
                <NotificationsNoneIcon />
                <span className="notification">5</span>
                <span className="d-lg-none ml-1">Notification</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Notification 1
                </Dropdown.Item>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Notification 2
                </Dropdown.Item>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Notification 3
                </Dropdown.Item>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Notification 4
                </Dropdown.Item>
             
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='profile-box' as={Nav.Item}>
              <Dropdown.Toggle
                aria-expanded={false}
                aria-haspopup={true}
                as={Nav.Link}
                data-toggle="dropdown"
                id="navbarDropdownMenuLink"
                variant="default"
                className="m-0"
              >
                <span className="no-icon"> <img src={Profile} alt="" /> </span>
              </Dropdown.Toggle>
              <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
              <Dropdown.Item
                 
                > 
                  <PermIdentityIcon />Login
                </Dropdown.Item>
                <Dropdown.Item
                  href="/admin/viewprofile"
                  onClick={(e) => e.preventDefault()}
                >
                  <PermIdentityIcon /> Profile
                </Dropdown.Item>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <LogoutIcon /> Logout
                </Dropdown.Item>
               
              </Dropdown.Menu>
            </Dropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

import React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Jacket from './Step2Component/Jacket/Jacket';
import {
  Row,
  Col,
} from "react-bootstrap";
import { TextField } from '@mui/material';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
export default function Step2() {

const theme = useTheme();
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
};

const handleChangeIndex = (index) => {
    setValue(index);
};

  return (
  <fieldset>
    <div class="form-card">
    <Box sx={{ bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example" >

          <Tab label="Jacket" {...a11yProps(0)} />
          <Tab label="Pants" {...a11yProps(1)} />
          <Tab label="Vest" {...a11yProps(2)} />
          <Tab label="Shirt" {...a11yProps(3)} />
          <Tab label="Overcoat" {...a11yProps(4)} />
          <Tab label="Long Tail" {...a11yProps(5)} />

        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex} >

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Jacket />
          <Row>
            <Col xs="12">
               <div className='height-weight-nm'>
                 <h4> Height & Weight </h4>
              </div>
            </Col>
            <Col xs="6">
              <h5> Height </h5>
               <Row>
                 <Col xs="4">
                  <TextField
                      name=""
                      fullWidth
                      type="text"
                      id=""
                      placeholder="FT"
                      className='form-control-custom'
                      autoFocus
                  />
                  </Col>
                  <Col xs="4">
                  <TextField
                      name=""
                      fullWidth
                      type="text"
                      id=""
                      placeholder="IN"
                      className='form-control-custom'
                      autoFocus
                      />
                  </Col>
                  <Col xs="4">
                  <TextField
                      name=""
                      fullWidth
                      type="text"
                      id=""
                      placeholder="CM"
                      className='form-control-custom'
                      autoFocus
                      />
                  </Col>
              
               </Row>
            </Col>
            <Col xs="6">
            <h5> Weight </h5>
            <Row>
              <Col xs="6">
                <TextField
                    name=""
                    fullWidth
                    type="text"
                    id=""
                    placeholder="LB"
                    className='form-control-custom'
                    autoFocus
                />
                </Col>
                <Col xs="6">
                <TextField
                    name=""
                    fullWidth
                    type="text"
                    id=""
                    placeholder="KG"
                    className='form-control-custom'
                    autoFocus
                    />
                </Col>
               </Row>
            </Col>
          </Row>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Item Six
        </TabPanel>

      </SwipeableViews>
    </Box>

    </div> 
    <input type="button" name="previous" class="previous action-button-previous" value="Previous" /> 
    <input type="button" name="next" class="next action-button" value="Save" />
</fieldset>
  );
}

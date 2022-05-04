import React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StandardSize from "./StandardSize"
import Manualsize from './Manualsize';
import Finishing from '../Finishing';

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
          <Box sx={{ p: 13 }}>
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
  
export default function Jacket() {

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
    <Box>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          className="custom-inner-tabs-Nav"
          aria-label="full width tabs example" >

          <Tab label="Standard Size" {...a11yProps(12)} />
          <Tab label="Manual Size" {...a11yProps(13)} />
          <Tab label="Finishing Size" {...a11yProps(14)} />

        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex} >

        <TabPanel value={12} index={12} dir={theme.direction}  className='sizes-boxes-navm'>
             <StandardSize />
        </TabPanel>
        <TabPanel value={13} index={13} dir={theme.direction} className='sizes-boxes-navm'>
             <Manualsize />
        </TabPanel>
        <TabPanel value={14} index={14} dir={theme.direction} className='sizes-boxes-navm'>
             <Finishing />
        </TabPanel>
       
      </SwipeableViews>
    </Box>

    </div> 
    
</fieldset>
  );
}

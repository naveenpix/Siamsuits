import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Dateshort() {

    const [date, setDate] = React.useState('');

    const handleChange = (event) => {
        setDate(event.target.value);
    };
  

  return (
    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Date</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={date}
        label="Date"
        onChange={handleChange}
        >
        <MenuItem value={10}>24 June 2022</MenuItem>
        <MenuItem value={20}>25 June 2022</MenuItem>
        <MenuItem value={30}>26 June 2022</MenuItem>
        <MenuItem value={30}>26 June 2022</MenuItem>
        <MenuItem value={30}>26 June 2022</MenuItem>
        <MenuItem value={30}>26 June 2022</MenuItem>
        <MenuItem value={30}>26 June 2022</MenuItem>
        <MenuItem value={30}>26 June 2022</MenuItem>
        
        </Select>
        </FormControl>
    </Box>
  )
}

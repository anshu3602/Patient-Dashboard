import React from 'react'
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import {container} from "../styles"


const Prescription = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const Input = styled('input')({
      display: 'none',
    });

  return (
    <Container maxWidth="md" sx={container} >
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Upload" value="1" />
            <Tab label="Download" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload Previous Prescription
        </Button>
      </label>
        </TabPanel>
        <TabPanel value="2">
        <Button variant="contained" component="span">
          Download Prescription
        </Button>
        </TabPanel>
     
      </TabContext>
    </Box>
    </Container>
  )
}

export default Prescription

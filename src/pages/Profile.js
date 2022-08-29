import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import avatar from '../data/avatar.jpg'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {container} from "../styles"

const Profile = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <Container maxWidth="md" sx={container}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
      <img src={avatar} className="rounded-full h-30 w-25"/>
        </Grid>
        <Grid item xs={8} >
          <div className='mt-10'>
          <h3>Name  : <b> Anshu </b></h3>
          <h3>
            Age: <b> 20  </b>
          </h3>
         
          </div>
          <hr />
        </Grid>

      </Grid>
          </Box>
          <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Details" value="1" />
            <Tab label="Previous " value="2" />
           
          </TabList>
        </Box>
        <TabPanel value="1">
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
        Patient ID
        </Grid>
        <Grid item xs={8}>
         836468
        </Grid>
      </Grid>
      <br />
      <hr />

      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
         Name
        </Grid>
        <Grid item xs={8}>
        Anshu
        </Grid>
      </Grid>
      <br />
      <hr />
      <Grid container spacing={2} columns={16}>
      <Grid item xs={8}>
         Email Id
        </Grid>
        <Grid item xs={8}>
        anshuuu362@gmail.com
        </Grid>
      </Grid>
      <br />
      <hr />

      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          Phone number 
        </Grid>
        <Grid item xs={8}>
          xyz
        </Grid>
      </Grid>
      <br />
      <hr />

      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
         Address
        </Grid>
        <Grid item xs={8}>
         xyz
        </Grid>
      </Grid>
      <br />
      <hr />

      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          Description 
        </Grid>
        <Grid item xs={8}>
          xyz
        </Grid>
      </Grid>
      <br />
      <hr />


    </Box>
        </TabPanel>
        <TabPanel value="2">No previous history </TabPanel>
      </TabContext>
    </Box>
      </Container>
    
    </>
  )
}

export default Profile
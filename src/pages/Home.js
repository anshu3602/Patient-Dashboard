import React, { useEffect} from 'react';
import Lottie from "lottie-react";
import  data from "../data/new.json"
import { blue } from '@mui/material/colors';
import {Link} from 'react-router-dom'
import { Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: blue[900],
    '&:hover': {
      backgroundColor: blue[700],
    },
  }));


function Home() {
   
  
  return (
    <Container>
    <div className='container p-3 mt-20'>
    <Link to ={'/urgent_meetings'}>
    <ColorButton variant="contained">Emergency</ColorButton>
       </Link>
        
       <Lottie animationData={data} width={100} height={100}
       />
       </div>
    </Container>
  );
}

export default Home;
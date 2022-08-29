import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'





const Consultations = () => {
  return (
    <div className="grid place-content-center md:place-content-center content-center mt-5" >
      <Card sx={{ maxWidth: 500 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://t3.ftcdn.net/jpg/02/60/79/68/360_F_260796882_QyjDubhDDk0RZXV9z7XBEw9AKnWCizXy.jpg"
            alt="appointment image"
          />
          <div className='content-center bg-slate-200' >
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                Welcome !
              </Typography>
          <div className='mt-2 p-1 place-content-center flex flex-col space-y-4 colo '>
              <Link to={"/newAppointments"}>
                <Button variant="contained" size="medium">New Consultation</Button>
                </Link>
                <Link to={"/followUpAppointments"}>
                <Button variant="contained" size="medium">Scheduled Consultation</Button>
                </Link>
                </div>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );

}

export default Consultations



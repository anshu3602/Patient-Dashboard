import React, { useState, useEffect } from "react";

import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import { container, listItem } from "../styles" ;

const HealthReport = () => {
 
  return (
    <>
    
      <Container maxWidth="lg" sx={container}>
        <Button onClick="" variant="contained" target="_blank">
          Health Reports
        </Button>
        <List>
                <ListItem sx={listItem}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={9}>
                      <Typography>
                        Patient ID: 836468 <br />
                        Name: Anshu <br /> 
                        Treatment: xyz<br />
                        
                        {/* {new Date(
                          meeting.scheduledAt.seconds * 1000
                        ).toLocaleDateString("en-US")}
                        ,
                        {new Date(
                          meeting.scheduledAt.seconds * 1000
                        ).getHours()}
                        :
                        {new Date(
                          meeting.scheduledAt.seconds * 1000
                        ).getMinutes()} */}
                        <br />
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                      <Button
                        variant="contained"
                        target="_blank"
                        href=""
                      >
                        Download
                      </Button>
                    </Grid>
                  </Grid>
                </ListItem>
         
        </List>
      </Container>
    </>
  );
};

export default HealthReport;
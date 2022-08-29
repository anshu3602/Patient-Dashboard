import React from 'react'


import {
    Container,
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    Button,
    ButtonGroup,
} from "@mui/material";

import {
    container,
    paper,
    listItem,

} from "../styles";




const FollowupAppointments = () => {
    return (
        <>

            <Container maxWidth="lg" sx={container}>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                      <b><h1>Please Confirm your Appointment </h1></b>  
                        
                            <List>

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
                      <b><h1>Scheduled For Tomorrow</h1></b>  
                        
                            <List>


                                <ListItem sx={listItem}>
                                    <Grid container>
                                        <Grid item xs={12} sm={6} md={8}>
                                            <Typography>
                                                Mode: Video <br />
                                                Slot : 8:00Pm
                                                <br />
                                                Doctor: xyz < br/>
                                                Specialisation : xyz
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} sm={3}>
                                            <Button
                                                variant="contained"
                                                target="_blank"
                                                href=""
                                            >
                                                Join
                                            </Button>
                                        </Grid>


                                    </Grid>

                                </ListItem>


                            </List>
                    
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default FollowupAppointments
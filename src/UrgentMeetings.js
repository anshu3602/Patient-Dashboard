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

} from "./styles";

const UrgentMeetings = () => {
  return (
    <div >

<Container maxWidth="lg" sx={container} >
<b><h1>Instant Consultation</h1></b>  
                <Grid spacing={3}>
                    <Grid item xs={12}>
                        
                            <List>
                                <ListItem sx={listItem}>
                                    <Grid container>
                                        <Grid item xs={12} sm={6} md={8}>
                                            <Typography>
                                                Mode: Video <br />
                                                Slot : 8:00Pm
                                                <br />
                                                Doctor: Michael Roberts 
                                                <br/>
                                                Specialisation: xyz
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
                            <List>
                                <ListItem sx={listItem}>
                                    <Grid container>
                                        <Grid item xs={12} sm={6} md={8}>
                                            <Typography>
                                                Mode: Video <br />
                                                Slot : 8:00Pm
                                                <br />
                                                Doctor: abc 
                                                <br/>
                                                Specialisation: xyz
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


    </div>
  )
}

export default UrgentMeetings
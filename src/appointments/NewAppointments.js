import React, { useState, useEffect } from "react";

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
import { createTheme } from "@mui/material/styles";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import {
  container,
  paper,
  listItem,
  confirmButton,
  cancelButton,
} from "../styles";

import {Link} from 'react-router-dom'


const theme = createTheme();

const NewAppointments = () => {
  const [appointments, setAppointments] = useState([]);


  // FETCHING APPOINTMENTS' DATA FROM DB
//   useEffect(() => {
//     db.collection("appointments")
//       .orderBy("timeSlot", "asc")
//       .onSnapshot((snapshot) => {
//         setAppointments(
//           snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
//         );
//       });
//   }, []);

  // HANDLE APPOINTMENT CONFIRM BUTTON
//   const handleConfirm = (docID, patientUID) => {
//     db.collection("appointments").doc(docID).update({
//       isConfirmed: "true",
//     });

//     db.collection("doctors")
//       .doc(currentUser.uid)
//       .collection("patients")
//       .doc(patientUID)
//       .set({
//         patientUID: patientUID,
//       });

//     db.collection("patients")
//       .doc(patientUID)
//       .collection("doctors")
//       .doc(currentUser.uid)
//       .set({
//         doctorUID: currentUser.uid,
//       });

//     db.collection("patients").doc(patientUID).collection("notifications").add({
//       message:
//         "Your appointment has been confirmed! You can check its details in the scheduled meetings section.",
//       sentAt: new Date(),
//     });

//     db.collection("patients").doc(patientUID).update({
//       unreadCount: 1,
//     });

//   };

  // HANDLE APPOINTMENT CANCEL BUTTON
//   const handleCancel = (docID, patientUID) => {
//     db.collection("appointments").doc(docID).update({
//       isConfirmed: "false",
//     });

//     db.collection("patients").doc(patientUID).collection("notifications").add({
//       message: "Your appointment has been cancelled!",
//       sentAt: new Date(),
//     });
//   };

  return (
    <>
  
      <Container maxWidth="lg" sx={container}>
        <Grid container spacing={3}>
          {/* LIST OF NEW APPOINTMENTS */}
          <Grid item xs={12}>
           <b> <h1>New Appointments</h1></b>
           
              <List>
                {/* {appointments.map((appointment) => {
                  if (
                    appointment.isConfirmed === "pending" &&
                    appointment.doctorUID === currentUser.uid
                  ) */}
                   
                      <ListItem sx={listItem}>
                        <Grid container>
                          <Grid item xs={12} sm={9}>
                            <Typography>
                              Doctor Name: Dr.xyz <br />
                              Doctor Id : 67686 < br />
                              Specialisation :  MBBS, MD <br />
                              Slot : 8:00Pm<br />
                              Hospital : Fortis 
                              {/* {new Date(
                                appointment.timeSlot.seconds * 1000
                              ).toLocaleDateString("en-US")}
                              ,
                              {new Date(
                                appointment.timeSlot.seconds * 1000
                              ).getHours()}
                              :
                              {new Date(
                                appointment.timeSlot.seconds * 1000
                              ).getMinutes()} */}
                              
                            </Typography>
                          </Grid>

                          {/* CONFIRM BUTTON */}
                          <Grid item xs={12} sm={3}>
                            <ButtonGroup
                              variant="contained"
                              sx={{
                                [theme.breakpoints.down("md")]: {
                                  size: "small",
                                },
                              }}
                            >
                              <div
                                onClick={() =>{
                                //   db.doc(`meetings/${appointment.id}`).set({
                                //     meetingID: appointment.id,
                                //     doctorUID: appointment.doctorUID,
                                //     patientUID: appointment.patientUID,
                                //     scheduledAt: appointment.timeSlot,
                                //     mode: appointment.mode,
                                  }
                                }
                              >
                              <Link to={"/Payment"}>
                                <Button
                                  variant="contained"
                                  target="_blank"
                                  href=""
                                >
                                  Schedule
                                 </Button>
                              </Link>
                              </div>

                              
                            </ButtonGroup>
                          </Grid>
                        </Grid>
                      </ListItem>
                    
            
              </List>
          
          </Grid> 

          {/* LIST OF CONFIRMED APPOINTMENTS */}
          <Grid item xs={12}>
       
            
              <List>
                {/* {appointments.map((appointment) => {
                  if (
                    appointment.isConfirmed === "true" &&
                    appointment.doctorUID === currentUser.uid
                  ) */}
                
                      <ListItem sx={listItem}>
                        <Grid container>
                          <Grid item xs={12} sm={9}>
                            <Typography>
                              Doctor Name: Dr.abc <br />
                              Doctor Id : 78799 < br />
                              Specialisation :  MBBS, MD <br />
                              Slot : 9:00Pm <br />
                              Hospital : Fortis 
                              {/* {new Date(
                                appointment.timeSlot.seconds * 1000
                              ).toLocaleDateString("en-US")}
                              ,
                              {new Date(
                                appointment.timeSlot.seconds * 1000
                              ).getHours()}
                              :
                              {new Date(
                                appointment.timeSlot.seconds * 1000
                              ).getMinutes()} */}
                              
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                    <Link to={"/Payment"}>
                      <Button
                        variant="contained"
                        target="_blank"
                        href=""
                      >
                        Schedule
                      </Button>
                    </Link>
                    </Grid>
                        </Grid>
                      </ListItem>
                
            
              </List>
           
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NewAppointments
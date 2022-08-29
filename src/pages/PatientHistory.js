import React, { useState, useEffect } from "react";
import SearchBar from "material-ui-search-bar";
import { Avatar, Button, Grid } from "@mui/material";
import avatar from '../data/avatar.jpg'
import graph from '../data/graph.jpg'

const PatientHistory = () => {


    return (
        <>
            <SearchBar

                style={{
                    margin: "10px auto",
                    maxWidth: 800

                }}
            />


            <div className="container shadow p-3 mb-5 bg-body square">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={2} md={2}>
                        <Avatar
                            alt="Patient_Profile_Image"
                            src={avatar}
                            sx={{
                                width: 100,
                                height: 100,
                                border: "1px solid #08475e",
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <p>Date: 12/04/2021</p>
                        <p>Name : Anshu</p>
                        <p>ECG : xyz</p>
                        <p>SpO2: xyz </p>
                        <p>Heart Rate: xyz </p>
                        <p>Blood sugar level : xyz </p>
                        <p>Blood Pressure: xyz </p>
                        <p>Temp: xyz </p>
                        <p>Weight: xyz </p>
                        <br />
                    
                        <p>Graph :</p>
                        <img src={graph}></img>
                        
                        
                    </Grid>

                    
                </Grid>
                

            </div>


            
        </>
    );
};

export default PatientHistory;

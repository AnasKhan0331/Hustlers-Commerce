'use client';
import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { app } from '../database/firebase'
import { getDatabase, ref, set } from "firebase/database"
import banner from "../../../public/assets/images/banner1.webp"
const db = getDatabase(app);

const pushData = () => {
    set(ref(db, 'users/userdata'), {
        id: 1,
        name: "Anas Mehboob Khan",
        age: 21,
        image: banner
    });
}
const Page = ({ href }) => {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ maxWidth: "700px", border: "2px solid #ccc", my: 6, flex: 1, display: "flex", flexDirection: "column" }}>
                <Box sx={{ m: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item lg={6}>
                            <TextField sx={{ width: "100%" }} label="Email" placeholder="Enter your email address" />
                        </Grid>
                        <Grid item lg={6}>
                            <TextField sx={{ width: "100%" }} label="Password" labelStyle="floating" placeholder="Set a password" passwordToggle="true" />
                        </Grid>
                        <Grid item lg={12}>
                            <TextField sx={{ width: "100%" }} label="Address" placeholder="Add Address" />
                        </Grid>
                        <Grid item lg={12}>
                            <Button onClick={pushData} sx={{ color: "#fff", background: "#FF6200", width: "100%" }} >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Page;

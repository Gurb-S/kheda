import React from 'react'
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


import logo from "../../../imgs/dice.png";

//TODO: check which answer was clicked


export function ChooseAnswer(){
    const handleSubmit = (e) => {
        e.preventDefault();
        //* data from form field
        const data = new FormData(e.currentTarget);
        console.log(data.get('answer'))
    }


    return(
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0 }}>
            <Typography id='modal-modal-title' gutterBottom variant="h3" component="h4" align='center' sx={{ mb: 4, fontSize: 20,textDecoration: 'underline', }} >
            Choose an answer
            </Typography> 
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ mb: 1, pt: 0 }}>
                    <Card sx={{ maxWidth: 350, maxHeight: 100,width: 350, height: 80, mx: 'auto', mt: 0, pb: 0 ,display: 'flex' , bgcolor: 'secondary.main', alignContent: 'center', justifyContent: 'space-around' , flexWrap: 'wrap', cursor: 'pointer' }}>
                        <CardContent sx={{ flexWrap: 'wrap', display: 'flex', alignContent: 'center' }}>
                            <Typography id='modal-modal-title' gutterBottom align='center' sx={{ fontSize: 20, lineHeight: 'normal', m:0 }} >
                                Harjit is a great kid I think and he is super
                            </Typography>
                        </CardContent>
                    </Card> 
                </Grid>
                <Grid item xs={12} sx={{ mb: 1, pt: 0 }}>
                    <Card sx={{ maxWidth: 350, maxHeight: 100,width: 350, height: 80, mx: 'auto', mt: 0, pb: 0 ,display: 'flex' , bgcolor: 'secondary.main', alignContent: 'center', justifyContent: 'space-around' , flexWrap: 'wrap', cursor: 'pointer' }}>
                        <CardContent sx={{ flexWrap: 'wrap', display: 'flex', alignContent: 'center' }}>
                            <Typography id='modal-modal-title' gutterBottom align='center' sx={{ fontSize: 20, lineHeight: 'normal', m:0 }} >
                                This is the fastest laptop with ram and 3D screen
                            </Typography>
                        </CardContent>
                    </Card> 
                </Grid>
                <Grid item xs={12} sx={{ mb: 1, pt: 0 }}>
                    <Card sx={{ maxWidth: 350, maxHeight: 100,width: 350, height: 80, mx: 'auto', mt: 0, pb: 0 ,display: 'flex' , bgcolor: 'secondary.main', alignContent: 'center', justifyContent: 'space-around' , flexWrap: 'wrap', cursor: 'pointer' }}>
                        <CardContent sx={{ flexWrap: 'wrap', display: 'flex', alignContent: 'center' }}>
                            <Typography id='modal-modal-title' gutterBottom align='center' sx={{ fontSize: 20, lineHeight: 'normal', m:0 }} >
                                The G9 odessey is back and it's bigger then ever
                            </Typography>
                        </CardContent>
                    </Card> 
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2 }}>
            </Grid>
        </Box>
    )
}
import React from 'react'
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


export function EnterAnswer(){

    const handleSubmit = (e) => {
        e.preventDefault();
        //* data from form field
        const data = new FormData(e.currentTarget);
        console.log(data.get('answer'))
    }


    return(
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0 }}>
            <Typography id='modal-modal-title' gutterBottom variant="h3" component="h4" align='center' sx={{ mb: 4, fontSize: 20,textDecoration: 'underline', }} >
            Enter your answer
            </Typography> 
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ mb: 1 }}>
                    <TextField
                    id="answer"
                    name="answer"
                    label="Answer"
                    multiline
                    fullWidth
                    rows={6}
                    variant="filled"
                    sx={{ bgcolor:  'secondary.main', borderRadius: '5px' }}
                    />
                </Grid>
                <Grid item xs={12} sx={{ mb: 1 }}>
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2 }}>
                <Button
                    type="submit"
                    size='large'
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, mb: 2, borderRadius: '16px', display: 'block', mx: 'auto' }}
                    >
                    Enter
                </Button>
            </Grid>
        </Box>
    )
}
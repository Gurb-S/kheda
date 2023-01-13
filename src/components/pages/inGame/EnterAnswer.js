import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function EnterAnswer(){

    const handleSubmit = (e) => {
        e.preventDefault();
        //* data from form field
        const data = new FormData(e.currentTarget);
        console.log(data.get('answer'))
    }


    return(
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ my: 3 }}>
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
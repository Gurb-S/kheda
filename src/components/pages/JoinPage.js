import React, { useState } from 'react'
import PinInput from 'react-pin-input';

//* Material UI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

//* IMGS
import logo from "../../imgs/dice.png";


export function JoinPage(){

    const [gameCode, setGameCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(gameCode)
    }
    return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar alt="Kheda logo" src={logo} sx={{ width: 100, height: 100 }} />
          <Typography component="h1" variant="h4">
            Join Game
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ my: 10  }}>
            <Grid container sx={{  justifyContent: 'center' }}>
                <Typography component="h5" variant="div" sx={{ textAlign: 'center', mb: 3 }}>
                    Enter Code
                </Typography>
            </Grid>
            <Grid>
                <PinInput 
                    length={6} 
                    initialValue=""
                    type="numeric" 
                    inputMode="number"
                    style={{ padding: 'auto' }}  
                    inputStyle={{border: 'none', borderRadius: '12px', backgroundColor: 'white', color: '#EE3B55', marginBottom: '5px'}}
                    onComplete={(value) => {setGameCode(value)}}
                    autoSelect={false}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
            </Grid>
            <Button
              type="submit"
              size='large'
              variant="contained"
              sx={{ mt: 5, mb: 2, borderRadius: '16px', display: 'block', mx: 'auto' }}
            >
              Join
            </Button>
          </Box>
        </Box>
      </Container>
    )
}
import React, { useContext, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import logo from "../../imgs/dice.png";
import SiteContext from '../../context/Context';

import Snackbar from '@mui/material/Snackbar';

export function ResetPassword(){

    const { sendResetLink } = useContext(SiteContext)

    //* Snackbar
    const [state, setState] = useState({
      open: false,
      vertical: 'top',
      horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
  
    const handleClick = (newState) => () => {
      setState({ open: true, ...newState });
    };
  
    const handleClose = () => {
      setState({ ...state, open: false });
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        sendResetLink(data.get('email'))
        console.log(data.get('email'));
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
          <Avatar alt="Kheda logo" src={logo} sx={{ width: 100, height: 100, mb: 1 }} />
          <Typography component="h1" variant="h4">
            Reset Password
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ my: 3, mt: 4  }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ mb: 1 }}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant='filled'
                  helperText='If email exists in our system, a password reset link will be sent'
                  sx={{ bgcolor: 'secondary.main', borderRadius: '5px' }}
                />
              </Grid>
              <Button
              type="submit"
              size='large'
              variant="contained"
              onClick={handleClick({
                vertical: 'top',
                horizontal: 'left',
              })}
              sx={{ mt: 3, mb: 2, borderRadius: '16px', display: 'block', mx: 'auto' }}
            >
              Send reset link
            </Button>
              <Grid item xs={12} sx={{ mb: 0, visibility: 'hidden' }}>
                <TextField
                  required
                  fullWidth
                  disabled
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant='filled'
                  sx={{ bgcolor: 'secondary.main', borderRadius: '5px' }}
                />
              </Grid>
            </Grid>
          </Box>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="Email has been sent."
            key={vertical + horizontal}
          />
        </Box>
      </Container>
    )
}
import React,{useState} from 'react'

//* Material UI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import logo from "../../imgs/dice.png";
import { setUpRecaptcha, auth } from '../../firebase-config'
import { signInWithPhoneNumber } from 'firebase/auth';

//*

export function PhoneSignUp(){

    const [value, setValue] = useState()

    const handleSubmit = async (event) => {
        event.preventDefault();
        //const randomNumber = Math.floor(Math.random() * 5000)
        const data = new FormData(event.currentTarget);
        setUpRecaptcha();
        let appVerifier = window.RecaptchaVerifier;
        signInWithPhoneNumber(auth,value,appVerifier )
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
        }).catch((error) =>{
            console.log(error)
        })
        console.log(value)
        // console.log({
        //   username: data.get('username'),
        //   phoneNumber: data.get('phone-number'),
        //   password: data.get('password'),
        // });
    };


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
                    Phone Sign up
                </Typography>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit}  sx={{ my: 3  }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ mb: 1 }}>
                        <TextField
                        autoComplete="username"
                        name="username"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        autoFocus
                        variant='filled'
                        sx={{ bgcolor: 'secondary.main', borderRadius: '5px' }}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 1 }}>
                        <TextField
                        required
                        fullWidth
                        id="phone-number"
                        label="Phone Number"
                        name="phone-number"
                        autoComplete="phone-number"
                        variant='filled'
                        sx={{ bgcolor: 'secondary.main', borderRadius: '5px' }}
                        />
                    </Grid>
                    {/* <Grid item xs={12} sx={{ mb: 1 }}>
                        <TextField
                        required
                        fullWidth
                        type='tel'
                        id="phone-number"
                        label="Phone Number"
                        name="phone-number"
                        autoComplete="phone-number"
                        variant='filled'
                        sx={{ bgcolor: 'secondary.main', borderRadius: '5px' }}
                        />
                    </Grid> */}
                </Grid>
                <Grid container sx={{ mt: 2 }}>
                    <Grid item xs={6} >
                        <Link href="/" variant="body2" underline='none' sx={{ color: 'primary.light' }}>
                            <Button
                                size='large'
                                variant="contained"
                                sx={{ mt: 3, mb: 2, borderRadius: '16px', ml: 5,bgcolor:'secondary.main', color: 'primary.main', ":hover": { color: 'secondary.main', bgcolor: 'primary.main' } }}
                            >
                                Cancel
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            type="submit"
                            size='large'
                            variant="contained"
                            sx={{ mt: 3, mb: 2, borderRadius: '16px', ml: 5 }}
                        >
                            Get OTP
                        </Button>
                    </Grid>
                </Grid>
                <div id='recaptcha-container'></div>
          </Box>
        </Container>
    )
}
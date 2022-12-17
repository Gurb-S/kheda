import React from 'react'

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

//* IMGS
import logo from "../../imgs/dice.png";
import googleLogo from '../../imgs/third_party_options/google.png';
import phoneIcon from '../../imgs/third_party_options/phone-icon.png';

import { ThirdPartyAccountOptions } from '../widgets/ThirdPartyAccountOptions';
import { useNavigate } from 'react-router-dom';

//* FIREBASE
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, signInWithGoogle } from '../../firebase-config'


export function UserSignUp() {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * 5000)
    const data = new FormData(event.currentTarget);
    const register = async () => {
      // console.log(data.get('username'))
      //console.log('test')
      try{
        const user = await createUserWithEmailAndPassword(
          auth,
          data.get('email'),
          data.get('password')
        )
        if(user){
          updateProfile(auth.currentUser, {
            displayName: data.get('username'),
            photoURL: `https://avatars.dicebear.com/api/bottts/${randomNumber}.svg`
          })
        }
        console.log(user)
        navigate('/')
      } catch(error){
        console.log(error.message)
      }
    }
    console.log({
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    });
    register();
  };

  return (
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ my: 3  }}>
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
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant='filled'
                  sx={{ bgcolor: 'secondary.main', borderRadius: '5px' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ mb: 1 }}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant='filled'
                  sx={{ bgcolor: 'secondary.main', borderRadius: '5px' }}
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              size='large'
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: '16px', display: 'block', mx: 'auto' }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2" underline='hover' sx={{ color: 'primary.light' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
           <Box sx={{ mt: 1 }}>
                    <Grid item xs>
                        <ThirdPartyAccountOptions icon={phoneIcon} name="Phone" link='/phonesignup' type='Sign up' />
                        <ThirdPartyAccountOptions icon={googleLogo} name="Google" link={signInWithGoogle} type='Sign up'/>
                    </Grid>
            </Box>
        </Box>
      </Container>
  );
}
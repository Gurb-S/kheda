import React, { useContext, useState } from 'react'
import SiteContext from '../../context/Context';

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
import { auth, signInWithGoogle, storage, db } from '../../firebase-config'
import { ref, uploadString } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';


export function UserSignUp() {

  const navigate = useNavigate();

  const [err, setErr ] = useState(false);

  const handleSubmit = async (event) => {

    event.preventDefault();
    // creates a random number to put in url for bottts icon
    const randomNumber = Math.floor(Math.random() * 5000)
    // gets data from form submitted
    const data = new FormData(event.currentTarget);

    //** START value provided by user
    const userDisplayName = data.get('username');
    const userEmail = data.get('email');
    const userPassword = data.get('password');
    const userImg = `https://avatars.dicebear.com/api/bottts/${randomNumber}.svg`
    //* END value provided by user

    const register = async () => {
      try{
        //creates the user's account
        const res = await createUserWithEmailAndPassword(auth, userEmail, userPassword)
        //creates a reference to the user in firebase storage
        const storageRef = ref(storage, userDisplayName);
  
        //uploads the url for the user's icon to firebase database
        uploadString(storageRef, userImg).then(async (snapshot) =>{
            // updates the user's username and icon
            await updateProfile(res.user,{
              displayName: userDisplayName,
              photoURL: userImg
            })
            //creates a user object in the user's database that holds user's id, display name and icon
            await setDoc(doc(db, "users", res.user.uid),{
              uid: res.user.uid,
              displayName: userDisplayName,
              photoURL: userImg
            })
            // navigate to home page
            navigate('/')
        })
        //! NEED TO DELETE
        console.log(res)
      } catch(error){
        console.log(error.message)
        setErr(true)
      }
    }
    //! NEED TO DELETE
    console.log({
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    });
    // calls the register function
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
            {err && <span>Soemthing went wrong</span>}
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
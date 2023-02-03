import React, { useState } from 'react'

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


//* bullet point
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export function UserSignUp() {

  const navigate = useNavigate();

  const [signUpError, setSignUpError] = useState('');

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
    const userImg = `https://api.dicebear.com/5.x/bottts/svg?seed=${randomNumber}`
    //* END value provided by user

    const register = async () => {

      console.log(userDisplayName)

      try{
        if(!userDisplayName){
          throw new Error('No username')
        }
        if(!userPassword){
          throw new Error('Firebase: Password should be at least 6 characters (auth/weak-password).')
        }
        //creates the user's account
        const res = await createUserWithEmailAndPassword(auth, userEmail, userPassword)
        // updates the user's display name and photourl. This is the only way to set a username and photo for user
        await updateProfile(res.user,{
          displayName: userDisplayName,
          photoURL: userImg
        })

        //creates a reference to the users room in firebase database
        const roomRef = doc(db,`users`)
        //Adds the username photo and id to the database
        await setDoc(roomRef,{
          uid: res.user.uid,
          displayName: userDisplayName,
          photoURL: userImg
        })
        navigate('/')
        
      } catch(error){
        console.log(error.message)
        if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
            setSignUpError('this email is already taken')
            //console.log('Email is already used')
        }
        else if(error.message === 'Firebase: Error (auth/invalid-email).' || error.message === 'Firebase: Error (auth/missing-email).'){
            setSignUpError('please provide a valid email')
            //console.log('Not a valid email')
        }
        else if(error.message === 'No username'){
          setSignUpError('please provide a username')
          //console.log('Password needs to be atleast 6 characters')
        }
        else if(error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
            setSignUpError('password should be at least 6 characters')
            //console.log('Password needs to be atleast 6 characters')
        }
        else{
            setSignUpError('server error - please refresh page and try again')
            //console.log('500 - Internal Server Error: Please close app and try again')
        }
        console.log('Sign Up Failed')
      }
    }

    //Firebase Storage: The operation 'uploadString' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png'). (storage/invalid-root-operation)
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
                  sx={{ bgcolor: (signUpError.length >= 1 && signUpError === 'please provide a username' ? 'secondary.dark' : 'secondary.main'), borderRadius: '5px' }}
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
                  sx={{ bgcolor: (signUpError.length >= 1 && signUpError !== 'password should be at least 6 characters' && signUpError !== 'please provide a username' ? 'secondary.dark' : 'secondary.main'), borderRadius: '5px' }}
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
                  sx={{ bgcolor: ((signUpError.length >= 1 && signUpError === 'password should be at least 6 characters') ||
                  (signUpError.length >= 1 && signUpError === 'server error - please close app and try again') ? 'secondary.dark' : 'secondary.main'), borderRadius: '5px' }}
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            {(signUpError.length >= 1 
                ? 
                  <Typography variant='h7' color="error" gutterBottom>
                    {bull} Error: {signUpError}
                  </Typography>
                : <></>
            )}
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
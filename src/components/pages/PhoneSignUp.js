import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

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

//* Phone
import { MuiTelInput } from 'mui-tel-input'

//* Firebase
import { setUpRecaptcha, auth, storage, db } from '../../firebase-config'
import { signInWithPhoneNumber, updateProfile } from 'firebase/auth';
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

export function PhoneSignUp(){

    const navigate = useNavigate();

    const [value, setValue] = useState()

    const [show, setShow] = useState('hidden')

    const [OTP, setOTP] = useState('')

    const [userDisplayName, setUserDisplayName] = useState('');

    const [phoneSignUpError, setPhoneSignUpError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        //* data from form field
        const data = new FormData(event.currentTarget);
        //* phone
        setUpRecaptcha();
        let appVerifier = window.RecaptchaVerifier;
        setUserDisplayName(data.get('username'))
        if(!data.get('username')){
            setPhoneSignUpError('please provide a valid username')
            throw new Error('No username')
        }
        signInWithPhoneNumber(auth,value,appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
        })
        .then(() => {
            setShow('visible')
        })
        .catch((error) =>{
            console.log(error.message)
            if(error.message === 'Firebase: Error (auth/invalid-phone-number).'){
                setPhoneSignUpError('please provide a valid phone number')
                //console.log('please provide a valid phone number')
            }
            else if(error.message === 'reCAPTCHA has already been rendered in this element'){
                setPhoneSignUpError('server error - please refresh page and try again')
            }
        })
        //* phone
        console.log(phoneSignUpError)
        console.log(value)
    };

    const verifyOTP = (e) => {
        let otpValue = e.target.value;
        const randomNumber = Math.floor(Math.random() * 5000)
        const userImg = `https://avatars.dicebear.com/api/bottts/${randomNumber}.svg`
        setOTP(otpValue);
        if(otpValue.length === 6){
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otpValue).then((result) => {
                // User signed in successfully.
                const user = result.user;
                //creates a reference to the user in firebase storage
                const storageRef = ref(storage, userDisplayName);
                // ...
                //uploads the url for the user's icon to firebase database
                uploadString(storageRef, userImg).then(async (snapshot) =>{
                    // updates the user's username and icon
                    await updateProfile(user,{
                        displayName: userDisplayName,
                        photoURL: userImg
                    })
                    //creates a user object in the user's database that holds user's id, display name and icon
                    await setDoc(doc(db, "users",user.uid),{
                        uid: user.uid,
                        displayName: userDisplayName,
                        photoURL: userImg
                    })
                    // navigate to home page
                    navigate('/')
                })
            }).catch((error) => {
            // User couldn't sign in (bad verification code?)
                console.log(error.message)
                if(error.message === 'Firebase: Error (auth/invalid-verification-code).'){
                    setPhoneSignUpError('Invalid Phone number or OTP code. Please refresh page and try again')
                    //console.log('Email is already used')
                }
                else{
                    setPhoneSignUpError('server error - please refresh page and try again')
                    //console.log('500 - Internal Server Error: Please close app and try again')
                }
                console.log('Sign Up Failed')
            });
        }
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
                    Phone Sign up
                </Typography>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit}  sx={{ my: 3 }}>
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
                            sx={{ bgcolor: ((phoneSignUpError.length >= 1 && phoneSignUpError === 'please provide a valid username') || (phoneSignUpError.length >= 1 && phoneSignUpError === 'server error - please refresh page and try again') ? 'secondary.dark' : 'secondary.main'), borderRadius: '5px' }}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 1 }}>
                        <MuiTelInput 
                            value={value}
                            fullWidth
                            onChange={setValue}
                            defaultCountry='US'
                            sx={{ bgcolor: ((phoneSignUpError.length >= 1 && phoneSignUpError === 'please provide a valid phone number') || (phoneSignUpError.length >= 1 && phoneSignUpError === 'server error - please refresh page and try again') ? 'secondary.dark' : 'secondary.main'), borderRadius: '5px' }}
                            label="Phone Number"
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 1 }}>
                        <TextField
                            fullWidth
                            id="otp-number"
                            label="OTP"
                            name="otp-number"
                            autoComplete="otp-number"
                            variant='filled'
                            type='number'
                            value={OTP}
                            onChange={verifyOTP}
                            sx={{ bgcolor: ((phoneSignUpError.length >= 1 && phoneSignUpError === 'Invalid Phone number or OTP code. Please refresh page and try again') || (phoneSignUpError.length >= 1 && phoneSignUpError === 'server error - please refresh page and try again') ? 'secondary.dark' : 'secondary.main'), borderRadius: '5px', visibility:show }}
                        />
                    </Grid>
                </Grid>
                {(phoneSignUpError.length >= 1 
                ? 
                  <Typography variant='h7' color="error" gutterBottom>
                    {bull} Error: {phoneSignUpError}
                  </Typography>
                : <></>
                )}
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
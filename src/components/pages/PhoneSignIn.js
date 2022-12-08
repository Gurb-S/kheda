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
import { setUpRecaptcha, auth } from '../../firebase-config'
import { signInWithPhoneNumber, updateProfile } from 'firebase/auth';

//* Phone
import { MuiTelInput } from 'mui-tel-input'


//* bullet point
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);

export function PhoneSignIn(){

    const navigate = useNavigate();

    const [value, setValue] = useState()

    const [show, setShow] = useState('hidden')

    const [OTP, setOTP] = useState('')

    const [phoneError, setPhoneError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        //* phone
        setUpRecaptcha();
        let appVerifier = window.RecaptchaVerifier;
        signInWithPhoneNumber(auth,value,appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setPhoneError('Just called')
        })
        .then(() => {
            setPhoneError('This is the is not the issue')
            setShow('visible')
        })
        .catch((error) =>{
            console.log(error)
            setPhoneError('Too may requests')
        })
        //* phone
        console.log(value)
    };

    const verifyOTP = (e) => {
        let otpValue = e.target.value;
        setOTP(otpValue);
        if(otpValue.length === 6){
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otpValue).then((result) => {
                // User signed in successfully.
                const user = result.user;
                // ...
                console.log(user, 'test')
                if(user.photoURL){
                    navigate('/home')
                    console.log(user.photoUrl)
                }
                else{
                    navigate('/phonesignup')
                    console.log(user)
                }
                
            }).catch((error) => {
            // User couldn't sign in (bad verification code?)
                console.log(error.message)
                if(error.message === 'Firebase: Error (auth/invalid-verification-code).'){
                    setPhoneError('Invalid Phone number or OTP code. Please refresh page and try again')
                }
                else{
                    setPhoneError(error.message)
                }
            // ...
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
                    Phone Sign In
                </Typography>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit}  sx={{ my: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ mb: 1 }}>
                        <MuiTelInput 
                            value={value}
                            fullWidth
                            onChange={setValue}
                            defaultCountry='US'
                            sx={{ bgcolor: 'secondary.main', borderRadius: '5px', mt: 3 }}
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
                            sx={{ bgcolor: 'secondary.main', borderRadius: '5px', visibility:show }}
                            //sx={{ bgcolor: 'secondary.main', borderRadius: '5px'}}
                        />
                    </Grid>
                </Grid>
                {(phoneError.length >= 1 
                ? 
                  <Typography variant='h7' color="error" gutterBottom>
                    {bull} Error: {phoneError}
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
import React, { useContext } from 'react';

//* Material UI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

//* Imgs
import logo from "../../imgs/dice.png";
import googleLogo from '../../imgs/third_party_options/google.png';
import phoneIcon from '../../imgs/third_party_options/phone-icon.png';

//* Widgets
import { ThirdPartyAccountOptions } from '../widgets/ThirdPartyAccountOptions';


//* Context API
import SiteContext from '../../context/Context';
import { useNavigate } from 'react-router-dom';

//* bullet point
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);

export function UserSignIn() {

    const { loginUser, loginError, signInWithGoogle } = useContext(SiteContext);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        loginUser(data.get('email'),data.get('password'), navigate)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
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
                Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ my: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    variant='filled'
                    sx={{ bgcolor: (loginError.length >= 1 ? 'secondary.dark' : 'secondary.main'), borderRadius: '5px' }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    variant='filled'
                    sx={{ bgcolor: (loginError.length >= 1 && loginError !== 'please provide a valid email address' ? 'secondary.dark' : 'secondary.main'), borderRadius: '5px' }}
                />
                {(loginError.length >= 1 
                ? 
                  <Typography variant='h7' color="error" gutterBottom>
                    {bull} Error: {loginError}
                  </Typography>
                : <></>
                )}
                <FormControlLabel sx={{ display: 'block'}}
                    control={<Checkbox value="remember" color='primary' />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    size='large'
                    variant="contained"
                    sx={{ mt: 3, mb: 2, borderRadius: '16px', display: 'block', mx: 'auto' }}
                >
                    Sign In
                </Button>
                <Grid container sx={{ mt: 2 }}>
                    <Grid item xs>
                    <Link href="/resetpassword" variant="body2" underline='hover' sx={{ color: 'primary.light' }}>
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="/signup" variant="body2" underline='hover' sx={{ color: 'primary.light' }}>
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Grid item xs>
                        <ThirdPartyAccountOptions icon={phoneIcon} name="Phone" link='/phonesignin' type='Sign in'/>
                        <ThirdPartyAccountOptions icon={googleLogo} name="Google" link={signInWithGoogle} type='Sign in'/>
                    </Grid>
                </Box>
            </Box>
            <div id='recaptcha-container'></div>
        </Container>
    );
}
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import SiteContext from '../../context/Context';


//* Firebase
import { auth } from '../../firebase-config'
import { signOut } from 'firebase/auth';

//* icons
import MainLogo from "../../imgs/dice.png";
import startGameLogo from '../../imgs/main_page/yellow-human-start-game.png'
import joinGameLogo from '../../imgs/main_page/two-people-join-game.png'

//* Material UI
import { Container } from '@mui/system';
import { Button, CssBaseline, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

//* Widgets
import { ThirdPartyAccountOptions } from '../widgets/ThirdPartyAccountOptions';
import { HowToPlay } from '../widgets/HowToPlay';

//* Update profile info
//import laiLogo from '../../imgs/eggs.png'

export function MainPage() {

    const { currentUser } = useContext(SiteContext)

    const navigate = useNavigate();

    const logout = async () => {
        signOut(auth)
        localStorage.removeItem('email')
        localStorage.removeItem('name')
        localStorage.removeItem('profilePic')
        navigate('/signin')
    }

    //* START ---- Update lai profile
    // if(currentUser.uid === 'cqJrPQdWShcS2jIF9fwM4moQjFU2'){
    //     updateProfile(currentUser,{
    //         displayName: 'Kingpandalai',
    //         photoURL: laiLogo
    //     })
    // }
    //* END ---- Update lai profile


    //* checks if there is a profile pic item and if yes remove the red background in the div which is there for botts logos

    const profilePic = localStorage.getItem('profilePic');
    let divColor = '#EE3B55';

    (profilePic ? divColor = '' : divColor = '#EE3B55')

    console.log(currentUser?.photoURL)
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
                <Avatar alt="Kheda logo" src={MainLogo} sx={{ width: 100, height: 100 }} />
                <Typography component="h1" variant="h4" sx={{ textAlign: 'center' }}>
                Welcome, { currentUser?.displayName}
                </Typography>
                <div className='d-flex justify-content-center align-items-center mt-4' style={{ backgroundColor: divColor, borderRadius: '50px', height: '90px', width: '90px' }}>
                    <img src={profilePic ? profilePic : currentUser?.photoURL} alt='profile pic' height='83px' width='88px' style={{ borderRadius: '50px' }} className="mb-2"/>
                </div>
                <HowToPlay />
                <Box sx={{ mt: 2 }}>
                    <Grid item xs>
                        <ThirdPartyAccountOptions icon={joinGameLogo} name="None" link='/join' type='Join Game' game={true}/>
                        <ThirdPartyAccountOptions icon={startGameLogo} name="None" link='/' type='Start Game' game={true} bgcolor='#EE3B55'/>
                    </Grid>
                </Box>
                <Button
                onClick={logout}
                size='large'
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: '16px', display: 'block', mx: 'auto', bgcolor:'secondary.main', color: 'primary.main', ":hover": { color: 'secondary.main', bgcolor: 'primary.main' } }}
                >
                Logout
                </Button>
            </Box>
        </Container>
    )
}
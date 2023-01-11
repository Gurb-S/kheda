import React, { useContext, useState } from 'react'
import PinInput from 'react-pin-input';

//* Material UI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

//* IMGS
import logo from "../../imgs/dice.png";
import SiteContext from '../../context/Context';

//* bullet point
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);

export function StartPage() {

    const { currentUser } = useContext(SiteContext)

    //const [gameCode, setGameCode] = useState('');
    const [codeError, setCodeError] = useState('');
    const randomNumber = Math.floor(Math.random() * 999999) + 100000;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setCodeError('invalid code')       
        //console.log(gameCode)
    }

    console.log(randomNumber)
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
            Start Game
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 10  }}>
            <Grid container sx={{  justifyContent: 'center' }}>
                <Typography component="h5" variant="div" sx={{ textAlign: 'center', mb: 3 }}>
                    Game Code
                </Typography>
            </Grid>
            <Grid>
                <PinInput 
                    length={6} 
                    initialValue={randomNumber}
                    type="numeric" 
                    inputMode="number"
                    style={{ padding: 'auto' }}  
                    inputStyle={{border: 'none', borderRadius: '12px', backgroundColor: 'white', color: '#EE3B55', marginBottom: '5px'}}
                    // onComplete={(value) => {setGameCode(value)}}
                    disabled
                    autoSelect={false}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
            </Grid>
            {(codeError.length >= 1 
                ? 
                  <Typography variant='h7' color="error" gutterBottom>
                    {bull} Error: {codeError}
                  </Typography>
                : <></>
            )}
            <Card sx={{ maxWidth: 345, mx: 'auto', mt: 8 }}>
                <CardContent sx={{ pt: 1 }}>
                    <Typography id='modal-modal-title' gutterBottom variant="h5" component="h4" align='center' sx={{ textDecoration: 'underline', mb: 0 }} >
                        Players
                    </Typography>
                    <List sx={{ width: '100%', maxWidth: 360,height: 150 , overflow: 'auto' ,bgcolor: 'background.paper' }}>
                        <ListItem sx={{ justifyContent: 'center' }}>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                        </ListItem>
                        <ListItem sx={{ justifyContent: 'center' }}>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                        </ListItem>
                        <ListItem sx={{ justifyContent: 'center' }}>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                        </ListItem>
                        <ListItem sx={{ justifyContent: 'center' }}>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                            </div>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>    
            <Button
              type="submit"
              size='large'
              variant="contained"
              sx={{ mt: 5, mb: 0, borderRadius: '16px', display: 'block', mx: 'auto' }}
            >
              Join
            </Button>
          </Box>      
        </Box>
      </Container>
    )
}
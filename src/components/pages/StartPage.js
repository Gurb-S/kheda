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
import Tooltip from '@mui/material/Tooltip';

//* IMGS
import logo from "../../imgs/dice.png";
import SiteContext from '../../context/Context';
import refreshLogo from "../../imgs/refresh.png"

//* Firebase
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useNavigate } from 'react-router-dom';


export function StartPage() {

    const { currentUser, generateGameCode, gameCodeCookie, doc, setDoc, collection, db, deleteDoc } = useContext(SiteContext)


    const navigate = useNavigate();
 
    //* gives live feedback on who's in the room
    const query = collection(db, `rooms/${gameCodeCookie}/users`)
    const [ docs ] = useCollectionData(query)


    //console.log(docs)

    //* Delete room 
    const deleteRoom = async () => {
        const roomRef = doc(db,`rooms/${gameCodeCookie}`)
        await deleteDoc(roomRef)
    }

    //* genertae new code for start page and reloads page
    const newCodeStartPage = () =>{
        generateGameCode();
        deleteRoom();
        //* Forces page to refresh
        window.location.reload(false)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();     
        console.log(gameCodeCookie)
        const roomRef = doc(db,`rooms/${gameCodeCookie}/users/${currentUser.uid}`)
        await setDoc(roomRef,{
          userName: currentUser.displayName,
          photoURL: currentUser.photoURL
        })
        navigate('/game')
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
            Start Game
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 10  }}>
            <Grid container sx={{  justifyContent: 'center' }}>
                <Typography component="h5" variant="div" sx={{ textAlign: 'center', mb: 3 }}>
                    Game Code
                </Typography>
            </Grid>
            <Grid sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <PinInput 
                    length={6} 
                    initialValue={gameCodeCookie}
                    type="numeric" 
                    inputMode="number"
                    style={{ padding: 'auto' }}  
                    inputStyle={{border: 'none', borderRadius: '12px', backgroundColor: 'white', color: '#EE3B55', marginBottom: '5px'}}
                    disabled
                    autoSelect={false}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
                <Tooltip title="Get new code" arrow>
                    <Button onClick={newCodeStartPage} sx={{ mt: 2 }}><img src={refreshLogo} alt='refresh' height="40.5px" /></Button>
                </Tooltip>
            </Grid>
            {/* {(codeError.length >= 1 
                ? 
                  <Typography variant='h7' color="error" gutterBottom>
                    {bull} Error: {codeError}
                  </Typography>
                : <></>
            )} */}
            <Card sx={{ maxWidth: 345, mx: 'auto', mt: 8 }}>
                <CardContent sx={{ pt: 1 }}>
                    <Typography id='modal-modal-title' gutterBottom variant="h5" component="h4" align='center' sx={{ textDecoration: 'underline', mb: 0 }} >
                        Players
                    </Typography>
                    <List sx={{ width: '100%', maxWidth: 360,height: 150 , overflow: 'auto' ,bgcolor: 'background.paper' }}>
                        <ListItem sx={{ justifyContent: 'center' }}>
                            {docs?.map((doc) =>(
                                <div key={Math.random()} className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                    <img src={doc.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} className="mb-2" />
                                </div>
                            ))}
                            {/* <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
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
                            </div> */}
                        </ListItem>
                        {/* <ListItem sx={{ justifyContent: 'center' }}>
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
                        </ListItem> */}
                    </List>
                </CardContent>
            </Card>    
            <Button
              type="submit"
              size='large'
              variant="contained"
              sx={{ mt: 5, mb: 0, borderRadius: '16px', display: 'block', mx: 'auto' }}
            >
              Start Game
            </Button>
          </Box>      
        </Box>
      </Container>
    )
}
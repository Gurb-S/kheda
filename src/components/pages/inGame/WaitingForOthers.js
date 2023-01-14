import React, {useContext} from 'react'

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

//* User context
import SiteContext from '../../../context/Context';


export function WaitingForOthers(){

    const { currentUser } = useContext(SiteContext)


    return(
        <Box component="form" noValidate sx={{ mt: 0 }}>
            <Typography id='modal-modal-title' gutterBottom variant="h3" component="h4" align='center' sx={{ mb: 4, fontSize: 20,textDecoration: 'underline', }} >
            Waiting for others
            </Typography> 
            <Card sx={{ maxWidth: 345, mx: 'auto', mt: 0 }}>
                <CardContent sx={{ pt: 1 }}>
                    <List sx={{ width: '100%', maxWidth: 360, height: 150, overflow: 'auto', bgcolor: 'background.paper' }}>
                        <ListItem sx={{ justifyContent: 'center' }}>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#716365', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                        </ListItem>
                        <ListItem sx={{ justifyContent: 'center' }}>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                        </ListItem>
                        <ListItem sx={{ justifyContent: 'center' }}>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                        </ListItem>
                        <ListItem sx={{ justifyContent: 'center' }}>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-0 mx-1' style={{ backgroundColor: '#EE3B55', borderRadius: '50px', height: '54px', width: '54px' }}>
                                <img src={currentUser?.photoURL} alt='profile pic' height='49.8px' width='52.8px' style={{ borderRadius: '50px' }} />
                            </div>
                        </ListItem>
                    </List>
                </CardContent>
            </Card> 
        </Box>
    )
}
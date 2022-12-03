import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

//* Icons
import oneWhole from '../../imgs/main_page/one-whole-yellow.png';
import twoWhole from '../../imgs/main_page/two-whole-yellow.png';
import threeWhole from '../../imgs/main_page/three-whole-yellow.png';
import fourWhole from '../../imgs/main_page/four-whole-yellow.png';
import fiveWhole from '../../imgs/main_page/five-whole-yellow.png';
import hint from '../../imgs/main_page/hint.png';
import attention from '../../imgs/main_page/attention.png';




export function HowToPlay(){

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <Box>
            <Button
              onClick={handleOpen}
              size='large'
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: '16px', display: 'block', mx: 'auto' }}
            >
              Rules
            </Button>
            <Modal 
                open={open} 
                onClose={handleClose} 
                aria-labelledby="modal-modal-title" 
                aria-describedby="modal-modal-description"
                sx={{overflowY: 'scroll'}}
                disableScrollLock={false}
            >
                <Card sx={{ maxWidth: 345, mx: 'auto', mt: 15 }}>
                    <CardContent sx={{ pt: 1 }}>
                        <Typography id='modal-modal-title' gutterBottom variant="h4" component="h1" align='center'>
                            How to play
                        </Typography>
                        <Typography id='modal-modal-description' variant="body2" color="text.secondary">
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="1." src={oneWhole} sx={{ width: 40, height: 40 }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Once the game starts you will be given a random question" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="2." src={twoWhole} sx={{ width: 40, height: 40 }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="You can give any answer you want to that question" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="3." src={threeWhole} sx={{ width: 40, height: 40 }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Once everyone has answered there will be a vote" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="4." src={fourWhole} sx={{ width: 40, height: 40 }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="You are awarded 1 point for everyone that choses your answer" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="5." src={fiveWhole} sx={{ width: 40, height: 40 }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="After 15 questions, whoever has the most points wins" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="hint" src={hint} sx={{ width: 40, height: 40 }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Hint:" secondary="The funnier the answer the better" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="attention" src={attention} sx={{ width: 40, height: 40 }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Minimum # of players:" secondary="You need atleast 3 total players" />
                                </ListItem>
                            </List>
                        </Typography>
                    </CardContent>
                </Card>          
            </Modal>
        </Box>
    )
}
import React,{ useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { EnterAnswer } from './EnterAnswer';
import SiteContext from '../../../context/Context';


//* Material UI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import logo from "../../../imgs/dice.png";

//* Phone
import { MuiTelInput } from 'mui-tel-input'

//* Firebase
import { auth, storage, db } from '../../../firebase-config'
import { ref, uploadString } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';
import { ChooseAnswer } from './ChooseAnswer';
import { WaitingForOthers } from './WaitingForOthers';
import { BarChart } from './BarChart';

//* bullet point
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);



export function Game(){

    const {points, setPoints} = useContext(SiteContext)

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
            }}
            >
            <Avatar alt="Kheda logo" src={logo} sx={{ width: 100, height: 100 }} />
            <Card sx={{ maxWidth: 350, maxHeight: 100,width: 350, height: 100, mx: 'auto', mt: 4, display: 'flex' , bgcolor: 'primary.main', alignContent: 'center', justifyContent: 'center'  }}>
                <CardContent sx={{  flexWrap: 'wrap', display: 'flex', alignContent: 'center' }}>
                    <Typography id='modal-modal-title' gutterBottom  align='center' sx={{ fontSize: 20, lineHeight: 'normal' }} >
                    What is Harjit’s favorite food. The fastedt laptop in the word?
                    </Typography>
                </CardContent>
            </Card>  
            <Typography id='modal-modal-title' gutterBottom variant="h5" component="h4" align='center' sx={{ mt: 2, fontSize: 12 }} >
            1/15
            </Typography>   
            </Box>
            <Button onClick={()=> setPoints(points + 1)}>Give points</Button>
            {/* <EnterAnswer /> is the ui for the intial allowing user to submit answer part */}
            {/* <EnterAnswer /> */}
            {/* <ChooseAnswer /> is the ui for the allowing users to choose an answer from the one submitted by other users */}
            {/* <ChooseAnswer /> */}
            {/* <WaitingForOthers /> is the ui for showing which users haven't choosen an asnwer yet */}
            {/* <WaitingForOthers /> */}
            <BarChart />
        </Container>
    )
}
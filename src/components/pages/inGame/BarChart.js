import React, { useState } from 'react'
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'
import { Data } from '../../../TestData'

//* Material ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function BarChart() {

    const [uiData, setUiData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [{
            label: 'X value?',
            data: Data.map((data) =>data.userGain)
        }]
    })

    const config = {
        data: uiData,
        options: {
            indexAxis: 'y'
        }
    }

    return (
        <Box component="form" noValidate sx={{ mt: 0 }}>
            <Typography id='modal-modal-title' gutterBottom variant="h3" component="h4" align='center' sx={{ mb: 4, fontSize: 20,textDecoration: 'underline', }} >
                Scores
            </Typography> 
            <Card sx={{ maxWidth: 345, mx: 'auto', mt: 0 }}>
                <CardContent sx={{ pt: 1 }}>
                    <Bar data={uiData} />
                </CardContent>
            </Card> 
        </Box>
    )
}

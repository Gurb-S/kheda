import React, { useState, useEffect, useContext } from 'react'
import { Bar } from "react-chartjs-2"
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend 
} from 'chart.js/auto'

import SiteContext from '../../../context/Context';

//* Material ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend 
)

export function BarChart() {

    const { currentUser } = useContext(SiteContext)

    // const [chartData, setChartData] = useState({
    //     datasets: [],
    // });

    // const [chartOptions, setChartOptions] = useState({});


    const testChartData = {
        labels: [currentUser.displayName, "Kevin", "Geroge", "Micheal", "Oreo","Listen", "Post", "Kold"],
        datasets: [
          {
            label: "Score",
            data: [2, 1, 4, 2, 3, 5, 6],
            borderColor: "#000000",
            backgroundColor: "#EE3B55",
          },
        ],
    }

    const testOptions ={
        responsive: true,
          maintainAspectRatio: true,
          plugins: {
            tooltip:{
                enabled: false
            },
            legend: {
              position: "top",
            },
            title: {
              display: false,
              text: "Whom'st let the dogs out",
            },
            customCanvasBackgroundColor: {
                color: 'lightGreen',
            }
          },
          indexAxis: 'y',
          elements: {
            bar: {
              borderWidth: 2,
            }
          },
    }
        // setChartData({
        //   labels: [currentUser.displayName, "Kevin", "Geroge", "Micheal", "Oreo","Listen", "Post", "Kold"],
        //   datasets: [
        //     {
        //       label: "Score",
        //       data: [2, 1, 4, 2, 3, 5, 6],
        //       borderColor: "#000000",
        //       backgroundColor: "#EE3B55",
        //     },
        //   ],
        // });
        // setChartOptions({
        //   responsive: true,
        //   maintainAspectRatio: true,
        //   plugins: {
        //     tooltip:{
        //         enabled: false
        //     },
        //     legend: {
        //       position: "top",
        //     },
        //     title: {
        //       display: false,
        //       text: "Whom'st let the dogs out",
        //     },
        //     customCanvasBackgroundColor: {
        //         color: 'lightGreen',
        //     }
        //   },
        //   indexAxis: 'y',
        //   elements: {
        //     bar: {
        //       borderWidth: 2,
        //     }
        //   },
        // });

    return (
        <div>
            <Typography id='modal-modal-title' gutterBottom variant="h3" component="h4" align='center' sx={{ mb: 4, fontSize: 20,textDecoration: 'underline' }} >
                Scores
            </Typography> 
            <Bar data={testChartData} options={testOptions} />
        </div>

        // <Box component="form" noValidate sx={{ mt: 0 }}>
        //     <Typography id='modal-modal-title' gutterBottom variant="h3" component="h4" align='center' sx={{ mb: 4, fontSize: 20,textDecoration: 'underline', }} >
        //         Scores
        //     </Typography> 
        //     <Bar data={testChartData} options={testOptions} />
        // </Box> 
    )
}

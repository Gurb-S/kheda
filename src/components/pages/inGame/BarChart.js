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

    const { currentUser, points } = useContext(SiteContext)

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() =>{
      setChartData({
        labels: [currentUser.displayName, "Kevin", "Geroge", "Micheal", "Oreo","Listen", "Post", "Kold"],
        datasets: [
          {
            label: "Score",
            data: [points, 2, 3, 4, 5, 6, 8, 12],
            borderColor: "#000000",
            backgroundColor: "#EE3B55",
          },
        ],
      });
      setChartOptions({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip:{
              enabled: true
          },
          legend: {
            position: "top",
          },
          title: {
            display: false,
            text: "Whom'st let the dogs out",
          },
        },
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
      }); 
    },[currentUser, points])
  // setChartData({
  //   labels: [currentUser.displayName, "Kevin", "Geroge", "Micheal", "Oreo","Listen", "Post", "Kold"],
  //   datasets: [
  //     {
  //       label: "Score",
  //       data: [points, 2, 3, 4, 5, 6, 8, 12],
  //       borderColor: "#000000",
  //       backgroundColor: "#EE3B55",
  //     },
  //   ],
  // });
  // setChartOptions({
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     tooltip:{
  //         enabled: true
  //     },
  //     legend: {
  //       position: "top",
  //     },
  //     title: {
  //       display: false,
  //       text: "Whom'st let the dogs out",
  //     },
  //   },
  //   indexAxis: 'y',
  //   elements: {
  //     bar: {
  //       borderWidth: 2,
  //     }
  //   },
  // });

    return (
        <div style={{minWidth:'350px', height:'500px'}}>
            <Typography id='modal-modal-title' gutterBottom variant="h3" component="h4" align='center' sx={{ mb: 4, fontSize: 20,textDecoration: 'underline', display:'block' }} >
                Scores
            </Typography> 
            <Bar 
              data={chartData} 
              options={chartOptions} 
            />
        </div>
    )
}

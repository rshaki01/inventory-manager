import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    TimeScale
} from 'chart.js';
import { red } from '@mui/material/colors';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    TimeScale
)

const TestChart = () => {

  const { sales } = useContext(GlobalContext);

  // setup block
  const data = {
    labels: sales.map((sale) => sale.dateAdded),
    datasets: [{
        data: sales.map((sale) => sale.listingPrice),
        backgroundColor: 'black',
        borderColor: 'black',  
        tension: 0.5,    
        //     return (sale.listingPrice * sale.quantity);
        // })
    }]
  };

  
  // config block
  const options = {
    plugins : {
      legend: false
    },
    responsive: true,
    scales : {
        x: {
            type: 'time',
            time: {
                unit: 'day'
            },
            grid: {
              display: false
            }  
        },
        y: {
            beginAtZero: true,
            grid: {
              display: false
            },
        },
    }
  };
  
  // render / init block
  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  )
}

export default TestChart

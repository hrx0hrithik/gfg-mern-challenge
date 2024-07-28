import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  layouts,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const TransactionsBarChart = ({ chartData }) => {
  // Extract labels and counts from the data array
  const labels = ['0-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800', '801-900', '901-above'];

  const data = {
    labels: labels,
    fillColor: ["rgba(0,10,220,0.5)","rgba(220,0,10,0.5)","rgba(220,0,0,0.5)","rgba(120,250,120,0.5)" ],
    datasets: [
      {
        label: 'Number of Items',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: chartData.map(item => item.count),
      },
    ],
  };

  const options = {
    responsive: true,
    // layouts:{
    //   height: "80"
    // },
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Price Range',
        },
      },
    },
  };

  return (
    <div className='w-[60vw] m-2'>
      <h2 className='text-[30px] text-center m-2'>Transactions Bar Chart</h2>
      <div className='flex flex-col items-center mt-6'>
        <Bar
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default TransactionsBarChart;

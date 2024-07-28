import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const TransactionPieChart = ({ pieChartData }) => {
    const labels = Object.keys(pieChartData);
    const counts = Object.values(pieChartData);

    const data = {
        labels: labels,
        datasets: [
            {
                data: counts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className='m-2'>
            <h2 className='text-[32px] text-center m-2'>Transaction Pie Chart</h2>
            <div className='flex flex-col items-center mt-4 '>
                <Pie data={data} />
            </div>
        </div>
    )
}

export default TransactionPieChart
import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultGraph = ({ data }) => {
  const { homeValue, loanAmount, interestRate, tenure } = data;

  // total amount of months to pay
  const totalMonths = tenure * 12;
  const interestRatePerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount *
      interestRatePerMonth *
      (1 + interestRatePerMonth) ** totalMonths) /
    ((1 + interestRatePerMonth) ** totalMonths - 1);
  const totalInterestGenerated = monthlyPayment * totalMonths - loanAmount;

  const pieData = {
    labels: ['Principle', 'Interest'],
    datasets: [
      {
        label: 'Ratio of Principle and Interest',
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Stack>
      <Typography textAlign='center' variant='h5' mb={3}>
        Monthly Payment: $
        {monthlyPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
      </Typography>
      <Stack direction='row' justifyContent='center'>
        <div>
          <Pie data={pieData} />
        </div>
      </Stack>
      <Typography textAlign='center' variant='p' mt={2}>
        Total Principal: $
        {homeValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
      </Typography>
      <Typography textAlign='center' variant='p'>
        Total Interest: $
        {totalInterestGenerated.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
      </Typography>
    </Stack>
  );
};

export default ResultGraph;

import { Stack, Typography } from '@mui/material';
import React from 'react';

const ResultGraph = ({ data }) => {
  const { homeValue, downPayment, loanAmount, interestRate, tenure } = data;

  // total amount of months to pay
  const totalMonths = tenure * 12;
  const interestRatePerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount *
      interestRatePerMonth *
      (1 + interestRatePerMonth) ** totalMonths) /
    ((1 + interestRatePerMonth) ** totalMonths - 1);
  const totalInterestGenerated = monthlyPayment * totalMonths - loanAmount;

  return (
    <Stack>
      <Typography textAlign='center' variant='h5'>
        Monthly Payment: ${monthlyPayment.toFixed(2)}
      </Typography>
    </Stack>
  );
};

export default ResultGraph;

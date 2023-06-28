import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import ResultGraph from './components/ResultGraph';
import SliderSelect from './components/SliderSelect';
import TenureDropdown from './components/TenureDropdown';
import { Grid } from '@mui/material';
import { useState } from 'react';

function App() {
  // const [homeValue, setHomeValue] = useState(0);
  // const [downPayment, setDownPayment] = useState(0);
  // const [loanAmount, setLoanAmount] = useState(0);
  // const [tenure, setTenure] = useState(0);
  // const [interestRate, setInterestRate] = useState(0);
  // const [monthlyPayment, setMonthlyPayment] = useState(0);
  // const [totalPayment, setTotalPayment] = useState(0);
  // const [totalInterest, setTotalInterest] = useState(0);

  // TODO: add monthly payment, total payment, total interest

  const [data, setData] = useState({
    homeValue: 150000,
    downPayment: 150000 * 0.2,
    loanAmount: 150000 * 0.8,
    tenure: 15,
    interestRate: 5,
  });

  return (
    <div className='App'>
      <Navbar />
      <Container maxWidth='xl' sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureDropdown data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ResultGraph />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

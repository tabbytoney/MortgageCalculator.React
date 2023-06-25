import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import ResultGraph from './components/ResultGraph';
import SliderSelect from './components/SliderSelect';
import TenureDropdown from './components/TenureDropdown';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Container maxWidth='xl' sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect />
            <TenureDropdown />
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

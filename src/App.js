import Navbar from './components/Navbar';
import ResultGraph from './components/ResultGraph';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <SliderSelect />
      <TenureSelect />
      <ResultGraph />
    </div>
  );
}

export default App;

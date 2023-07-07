import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import MapChart from './components/MapChart';

function App() {
  return (
    <div className="App">
      <BarChart />
      <LineChart />
      <PieChart/>
      <MapChart/>
    </div>
  );
}

export default App;

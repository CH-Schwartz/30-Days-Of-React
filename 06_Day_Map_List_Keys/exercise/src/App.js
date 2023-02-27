import logo from './logo.svg';
import './App.css';
import { tenHighestPopulation } from './ten_most_highest_populations.js';

const PopulationData = ({tenHighestPopulation}) => {
  const countryEntries = tenHighestPopulation.map((entry) => (<CountryEntry key={entry.country} entry={entry.country} population={entry.population}/>))

  return <div>{countryEntries}</div>
}

const CountryEntry = ({entry, population}) => {

  return (<li>{entry}:{population}</li>)
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PopulationData tenHighestPopulation={tenHighestPopulation}/>
      </header>
    </div>
  );
}

export default App;

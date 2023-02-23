import logo from './logo.svg';
import './App.css';


// Hexadecimal color generator
const hexaColor = (i) => {
  let str = ['518cef','3b10c4','9aede6','8ee763','a30dd0']
  
  return '#' + str[i]
}

const HexaColor = ({f}) => <div style={{backgroundColor : hexaColor(f)}}>{hexaColor(f)}</div>


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HexaColor f={0} />
        <HexaColor f={1} />
        <HexaColor f={2} />
        <HexaColor f={3} />
        <HexaColor f={4} />
      </header>
    </div>
  );
}

export default App;

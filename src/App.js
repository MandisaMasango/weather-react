import './App.css';
import axios from 'axios'; 
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Weather city="Incheon" />
      </header>
    </div>
  );
}

export default App;

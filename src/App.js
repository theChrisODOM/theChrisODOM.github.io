import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This Website is for CSODOM </h1>
        <h2> 
          On this website, there will be information about CSODOM's projects and other work history.
        </h2>
        <Home />
      </header>
    </div>
  );
}

export default App;
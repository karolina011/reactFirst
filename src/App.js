import logo from './components/assets/img/logo512test.png';
import { BrowserRouter as Router, Route } from  'react-router-dom'
import Settings from "./components/pages/Settings";
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
            <Route exact path='/' />
            <Route exact path='/settings' component={Settings}/>
            <Route exact path='/dashboard' />
          {/*<header className="App-container">*/}
          {/*  <img src={logo} className="App-logo" alt="logo" />*/}
          {/*  <p>*/}
          {/*    Edit <code>src/App.js</code> and save to reload.*/}
          {/*  </p>*/}
          {/*  <a*/}
          {/*      className="App-link"*/}
          {/*      href="https://reactjs.org"*/}
          {/*      target="_blank"*/}
          {/*      rel="noopener noreferrer"*/}
          {/*  >*/}
          {/*    Learn React*/}
          {/*  </a>*/}
          {/*</header>*/}
        </div>
      </Router>
  );
}

export default App;

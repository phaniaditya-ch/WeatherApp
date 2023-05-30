import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Search from './components/Search';
import Login from './components/Login';
import State from './context/State';

function App() {
  return (
    <>
      <State>
        <div className='wrapper'>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/about' Component={About} />
              <Route path='/search' Component={Search} />
              <Route path='/login' Component={Login} />
            </Routes>
          </Router>
        </div>
      </State>
    </>
  );
}

export default App;

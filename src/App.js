import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import MainBody from './components/MainBody';
function App() {
  
  return (  
    <Router>
      <div className="App">
        <Navbar/>
        <MainBody/>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;

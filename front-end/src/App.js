import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <div class="page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              
          </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;

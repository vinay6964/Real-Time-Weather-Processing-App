import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MetroCities from './pages/MetroCities';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metro-cities" element={<MetroCities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

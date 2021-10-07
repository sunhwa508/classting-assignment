import React from 'react';
import './App.css';
import { DashBoard, Home } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={DashBoard} />
      </Router>
    </div>
  );
}

export default App;

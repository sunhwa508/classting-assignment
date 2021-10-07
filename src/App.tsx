import React from 'react';
import './App.css';
import { DashBoard, Home, AppLayout } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <AppLayout>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={DashBoard} />
      </Router>
    </AppLayout>
  );
}

export default App;

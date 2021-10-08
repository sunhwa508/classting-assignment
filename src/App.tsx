import React from 'react';
import './App.css';
import { DashBoard, Home, AppLayout, ResultBoard } from './components';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <AppLayout>
        <Route path="/quiz" component={DashBoard} />
        <Route path="/result" component={ResultBoard} />
      </AppLayout>
    </Switch>
  );
}

export default App;

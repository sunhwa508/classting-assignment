import React from 'react';
import './App.css';
import { DashBoard, Home, AppLayout, ResultBoard } from './components';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AppLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={DashBoard} />
        <Route path="/result" component={ResultBoard} />
      </Switch>
    </AppLayout>
  );
}

export default App;

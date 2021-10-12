import { DashBoard, Home, AppLayout, ResultBoard, WrongAnswerBoard } from './components';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <AppLayout>
        <Route path="/quiz" component={DashBoard} />
        <Route path="/result" component={ResultBoard} />
        <Route path="/wronganswer" component={WrongAnswerBoard} />
      </AppLayout>
    </Switch>
  );
}

export default App;

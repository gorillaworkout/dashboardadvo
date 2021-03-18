import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home'
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  );
}

export default App;

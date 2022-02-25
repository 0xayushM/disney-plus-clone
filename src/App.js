import React from 'react';
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Details from './components/Details';
function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Switch>
          <Route exact path = '/'>
            <Login/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path="/detail/:id">
            <Details/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

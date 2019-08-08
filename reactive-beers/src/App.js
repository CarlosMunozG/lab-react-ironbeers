import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Beers from './pages/Beers.js';
import Beer from './pages/Beer.js';
import RandomBeer from './pages/RandomBeer.js';
import NewBeer from './pages/NewBeer.js';
import NotFound from './pages/NotFound.js';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/beers' exact component={Beers}/>
        <Route path='/beer/:id' exact component={Beer}/>
        <Route path='/random-beer' exact component={RandomBeer}/>
        <Route path='/new-beer' exact component={NewBeer}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;

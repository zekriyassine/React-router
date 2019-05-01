import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import History from './History';
import { NavLink } from 'react-router-dom';



function App() {
  return (
    <React.Fragment>
      <NavLink activeClassName="selected" exact to={`/`}>
        Accueil
        </NavLink>

      <NavLink activeClassName="selected" to={`/notre-histoire/`}>
        histoire
        </NavLink>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notre-histoire" component={History} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

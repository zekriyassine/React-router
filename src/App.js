import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import History from './History';



function App() {
  return (
      <React.Fragment>
              <Switch>
                
                <Route exact path="/" component={Home} />
                <Route path="/notre-histoire" component={History} />
              </Switch>
      </React.Fragment>
  );
}

export default App;

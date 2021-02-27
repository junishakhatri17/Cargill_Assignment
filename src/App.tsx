import React from 'react';
import List from './List';
import ListItem from './ListItem'
import history from './history';
import { Router, Switch, Route } from "react-router-dom";

function App() {
  return <div>
    <Router history={history}>
          <Switch>
          <Route exact path="/List" component={List} />
          <Route exact path="/ListItem" component={ListItem} />
          </Switch>
        </Router>
    </div>;
}

export default App;

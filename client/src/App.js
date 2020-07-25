import React from 'react';
import 'bulma/css/bulma.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './components/Nav';
import Saved from './pages/Saved';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div className="has-background-grey-lighter main-content">
      <Nav />

        <Switch>
          <Route path='/saved'>
            <Saved />
          </Route>

          <Route path='/search'>
            <Search />
          </Route>

          <Route path='/'>
            <Search />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

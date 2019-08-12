import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import ShortenForm from './ShortenForm';
import TopVisits from './TopVisits';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/top-100">Check top 100 visited urls</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Switch>
      <div clas="container">
        <div class="row-fixed content w-75 content">
          <div class="col-sm">
            <Route exact path="/" component={ShortenForm} />
            <Route path="/top-100" component={TopVisits} />
          </div>
        </div>
      </div>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

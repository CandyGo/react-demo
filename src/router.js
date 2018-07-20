import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage.js';
import Login from './routes/Login/Login.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/index" component={IndexPage} />
        <Redirect path="/" exact to="/login" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

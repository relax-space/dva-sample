import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import TestKeyboardComponent from './components/Test/TestKeyboard';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={TestKeyboardComponent} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

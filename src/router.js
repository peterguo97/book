import React from 'react';
import { Router, Route } from 'dva/router';
import MainLayout from './components/MainLayout';
import Input from './components/Input';
import List from './components/List';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route component={MainLayout}>
        <Route path="/" component={List} />
        <Route path="/input" component={Input} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
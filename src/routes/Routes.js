import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import DashboardPage from '../containers/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard" exact component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

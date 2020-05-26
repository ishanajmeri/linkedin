import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Discover from '../views/discover/discover';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/discover" />
      <RouteWithLayout
        component={Discover}
        exact
        layout={MainLayout}
        path="/discover"
      />
    </Switch>
  );
};

export default Routes;

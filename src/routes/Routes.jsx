import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Discover from '../views/discover/discover';
import Profile from '../views/profile/profile';

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
      <RouteWithLayout
        component={Profile}
        exact
        layout={MainLayout}
        path="/profile"
      />
    </Switch>
  );
};

export default Routes;

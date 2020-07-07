import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Discover from '../views/discover/discover';
import Profile from '../views/profile/profile';
import Register from '../views/register/register';

const Routes = ({ user }) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/discover" />
      <RouteWithLayout
        component={Discover}
        exact
        user={user}
        layout={MainLayout}
        path="/discover"
      />
      <RouteWithLayout
        component={Profile}
        exact
        layout={MainLayout}
        path="/profile"
      />
      <RouteWithLayout
        component={Register}
        exact
        layout={MainLayout}
        path="/register"
      />
    </Switch>
  );
};

export default Routes;

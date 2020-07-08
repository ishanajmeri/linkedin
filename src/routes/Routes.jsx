import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Discover from '../views/discover/discover';
import Profile from '../views/profile/profile';
import Register from '../views/register/register';
import Logout from '../views/logout/logout';
import Login from '../views/login/login';

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
        user={user}
        layout={MainLayout}
        path="/profile"
      />
      <RouteWithLayout
        component={Register}
        exact
        layout={MainLayout}
        path="/register"
      />
      <RouteWithLayout
        component={Login}
        exact
        layout={MainLayout}
        path="/login"
      />
      <RouteWithLayout
        component={Logout}
        exact
        layout={MainLayout}
        path="/logout"
      />
    </Switch>
  );
};

export default Routes;

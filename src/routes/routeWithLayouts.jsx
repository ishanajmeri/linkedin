import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, user, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout user={user}>
          <Component {...matchProps} user={user} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};
export default RouteWithLayout;

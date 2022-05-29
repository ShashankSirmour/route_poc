import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

function LayoutRoute({ children, layout: Layout, ...rest }) {
  return (
    <Route {...rest}>
      <Layout>{children}</Layout>
    </Route>
  );
}

LayoutRoute.defaultProps = {
  children: <div />,
};

LayoutRoute.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.any.isRequired,
};

export default LayoutRoute;

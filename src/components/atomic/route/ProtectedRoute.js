import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function ProtectedRoute({ component: Component, ...rest }) {
  const authState = useSelector((state) => state.auth);
  const { token, status } = authState;
  return (
    <Route
      {...rest}
      render={(props) =>
        !token && status !== 'success' ? (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default ProtectedRoute;

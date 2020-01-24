import React from 'react';
import { Route } from 'react-router-dom';

import PropTypes from 'prop-types';

// import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isLocked,
  ...rest
}) {
  // const { signed, nivel } = store.getState().auth;

  // if (!signed && isPrivate) {
  //   return <Redirect to="/" />;
  // }

  // if (signed && !isPrivate) {
  //   return <Redirect to="/dashboard" />;
  // }

  // if (isLocked.length && !isLocked.includes(nivel)) {
  //   return <Redirect to="/" />;
  // }

  return <Route {...rest} render={props => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

import React, { useEffect, useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import { checkLoginStatus } from '../services/checkLoginStatus.service';
import { Store } from '../store';
import { userLoggedIn } from '../store/modules/users/actions';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const [state, dispatch] = useContext(Store);
  const [signed, setSigned] = useState(false);
  useEffect(() => {
    async function checkLoginStatusService() {
      const { logged_in } = await checkLoginStatus();
      dispatch(userLoggedIn({ logged_in }));
    }

    checkLoginStatusService();
  }, [dispatch]);

  useEffect(() => {
    setSigned(state.user.logged_in);
  }, [state]);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

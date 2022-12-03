import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthenticated } from '@hooks';

export function AuthenticatedGuard({ children }) {
  const authenticated = useAuthenticated();

  if (!authenticated) {
    return <Redirect to={`/auth/login?message_code=LOGIN_REQUIRED`} />;
  }

  return <Fragment>{children}</Fragment>;
}
AuthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};

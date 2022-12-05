import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useAuthenticated } from '@hooks';
import { useRouter } from 'next/router';

export function AuthenticatedGuard({ children }) {
  const authenticated = useAuthenticated();
  const router = useRouter();

  if (!authenticated) {
    router.push('/auth/login?message_code=LOGIN_REQUIRED');
    return;
  }

  return <Fragment>{children}</Fragment>;
}
AuthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};

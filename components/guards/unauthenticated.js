import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useAuthenticated } from '@hooks/use-authenticated';
import { useRouter } from 'next/router';

export function UnauthenticatedGuard({ children }) {
  const authenticated = useAuthenticated();
  const router = useRouter();

  if (authenticated) {
    router.push('/');
    return;
  }

  return <Fragment>{children}</Fragment>;
}
UnauthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};

import Header from '@components/header/header';
import React from 'react';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

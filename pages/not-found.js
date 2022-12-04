import NotFoundPage from '@components/404-page/not-found';
import { MainLayout } from '@layouts/main'
import React from 'react'

const NotFound=()=> {
  return (
    <div>
      <NotFoundPage />
    </div>
  )
}

NotFound.layout=MainLayout;
export default NotFound;

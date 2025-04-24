import React from 'react'
import { Navigate, Outlet } from 'react-router'

const Protected = ({ isSignedIn, children }) => {
  if(!isSignedIn) {
    return <Navigate to='/' replace />
  }

  return children;
}

export default Protected
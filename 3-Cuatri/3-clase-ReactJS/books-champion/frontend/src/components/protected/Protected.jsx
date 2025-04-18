import React from 'react'
import { Navigate } from 'react-router'

const Protected = ({ isSignedIn, children }) => {
  if(!isSignedIn) {
    return <Navigate to='/' replace />
  }

  return children;
}

export default Protected
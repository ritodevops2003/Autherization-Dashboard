import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {

  return props.loginState ? <Outlet /> : <Navigate to="/Login" />
}

export default ProtectedRoute

import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || user.role !== requiredRole) {
      return <Navigate to="/" replace />;
    }
  
    return children;
}

export default ProtectedRoute
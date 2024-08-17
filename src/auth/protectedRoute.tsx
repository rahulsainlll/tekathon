import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './authContext';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // If not authenticated, redirect to home
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  // If authenticated, render the children
  return children;
};

export default ProtectedRoute;

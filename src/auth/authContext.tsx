// authContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if token exists in session storage and update authentication status
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  // Optionally: Handle updates in authentication status
  const handleSetIsAuthenticated = (auth: boolean) => {
    setIsAuthenticated(auth);
    if (auth) {
      // Optionally: Perform additional actions when authenticated
    } else {
        localStorage.removeItem('authToken');
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated: handleSetIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

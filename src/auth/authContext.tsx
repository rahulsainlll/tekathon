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
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

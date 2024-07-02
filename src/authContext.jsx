import React, { createContext, useContext, useState, useEffect } from "react";
import { getSingleUser } from "./api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticate, setauthenticate] = useState(false);
  const [role, setrole] = useState(nule);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setauthenticate(true)
      const userRole = localStorage.getItem('role')
      setrole(userRole)
    } 
  }, []);

  const login = (token, userRole) => {
    localStorage.setItem('token',token)
    localStorage.setItem('role',userRole)
    setauthenticate(true)
    setrole(userRole)
  };

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    setauthenticate(false)
    setrole(null)
  };

  return (
    <AuthContext.Provider value={{ role, login, logout, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

<<<<<<< Updated upstream
import React, { createContext, useContext, useEffect, useState } from "react";
=======
import React, { createContext, useContext, useState, useEffect } from "react";
>>>>>>> Stashed changes

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
<<<<<<< Updated upstream
  const [authenticate, setauthenticate] = useState(false);
  const [role, setrole] = useState(null);
=======
  const [isAuthenticate, setisAuthenticate] = useState(false);
  const [role, setRole] = useState(null);
>>>>>>> Stashed changes

  const decodeJWT = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
<<<<<<< Updated upstream
      setauthenticate(true);
      const userRole = decodeJWT(token);
      setrole(userRole.role);
=======
      setisAuthenticate(true)
      const decodedToken = decodeJWT(token);
      setRole(decodedToken.role)
>>>>>>> Stashed changes
    }
  }, []);

  const login = (token, userRole) => {
<<<<<<< Updated upstream
    localStorage.setItem("token", token);
    localStorage.setItem("role", userRole);
    setauthenticate(true);
    setrole(userRole);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setauthenticate(false);
    setrole(null);
=======
    localStorage.setItem('token', token)
    localStorage.setItem('role', userRole)
    setisAuthenticate(true)
    setRole(userRole)
  };

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    setisAuthenticate(false)
    setRole(null)
>>>>>>> Stashed changes
  };

  return (
    <AuthContext.Provider value={{ role, login, logout, isAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element, roles }) => {

    const decodeJWT = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    };

    const token = localStorage.getItem("token");
    const role = decodeJWT(token).role;

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (roles && !roles.includes(role)) {
        return <Navigate to="/" />;
    }

    return element;
}

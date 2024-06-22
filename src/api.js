import { API_BASE_URL } from "./config";

export const register = async (name, lastName, email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstname: name, lastname: lastName, email, password})
    });

    if (!response.ok) {
        throw new Error('Error al registrar el usuario')
    }

    return response.json();
}

export const login = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/authenticate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error('Usuario o contraseña incorrectos')
    }

    const data = await response.json()
    return data;
}
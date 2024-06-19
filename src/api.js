import { API_BASE_URL } from "./config";

export const register = async (name, lastName, email, user, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstname: name, lastname: lastName, email, username: user, password})
    });

    if (!response.ok) {
        throw new Error('Error al registrar el usuario')
    }

    return response.json();
}

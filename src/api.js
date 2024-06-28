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

export const createProduct = async (name, description, brand, category, price, 
    discounted, discountAmount, image, stock) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('brand', brand);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('inDiscount', discounted);
    formData.append('discountPercentage', discountAmount);
    formData.append('image', image);
    formData.append('stock', stock);

    const response = await fetch(`${API_BASE_URL}/product/create`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
    });

    if (!response.ok) {
        throw new Error('Error al crear el producto')
    }

    return response.json();
}
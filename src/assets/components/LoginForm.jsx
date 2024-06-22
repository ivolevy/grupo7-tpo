import React,{ useState } from "react";
import { API_BASE_URL } from "../../config";

export function Login() {

    const [userName, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName, password })
            });

            if (!response.ok) {
                throw new Error('Usuario o contraseña incorrectos')
            }

            const data = await response.json()
            localStorage.setItem('token', data.token)
        } catch (error) {
            setError(error.message)
        }   
    };



    return (
        <section className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-white">Log in</h1>
            <form 
                className="flex flex-col items-center justify-center"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Usuario"
                    className="w-64 h-12 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-64 h-12 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-64 h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
                    >
                    Iniciar sesión
                </button>
            </form>
            {error && <p className="text-red-600 mt-4">La contraseña o el usuario no coinciden</p>}
        </section>
    )
}
import { useState } from "react";

export function LoginForm() {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [error2,setError2] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        let usuario = sessionStorage.getItem('user')
        let contraseña = sessionStorage.getItem('password')

        if(user != usuario || password != contraseña){
            setError(true)
            return
        }

        setError(false)
        window.location.assign("/")
        setIsLoggedIn
    }



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
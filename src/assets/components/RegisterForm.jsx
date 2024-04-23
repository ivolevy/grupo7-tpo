export function RegisterForm() {
    return (
        <section className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-white">Register</h1>
            <form 
                className="flex flex-col items-center justify-center"
            >
                <input
                    type="text"
                    placeholder="Email"
                    className="w-64 h-12 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
                />
                <input
                    type="text"
                    placeholder="Usuario"
                    className="w-64 h-12 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-64 h-12 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="w-64 h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
                    >
                    Iniciar sesión
                </button>
            </form>
        </section>
    )
}
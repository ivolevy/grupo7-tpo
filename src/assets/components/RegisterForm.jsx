import { useState } from "react"

export function RegisterForm() {

    const[error,setError]=useState(false)
    
    function setEmail(e){
        if(e.length>8 && e.includes("@") ){
            sessionStorage.setItem('email',e)
        }
    }

    function setUser(e){
        if(e.length > 8){
            sessionStorage.setItem('user',e)
        }
    }

    function setPassword(e){
        if (e != ""){
            sessionStorage.setItem('password',e)
        }
    }

    function submitForm(e){
        e.preventDefault()

        const pass = sessionStorage.getItem('password')
        const user = sessionStorage.getItem('user')
        const email = sessionStorage.getItem('email')
        
        if (pass != '' && user != '' && email != ''){
            setError(false)
        }else{
            setError(true)
        }
        
    }

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
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Usuario"
                    className="w-64 h-12 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
                    onChange={e => setUser(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-64 h-12 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
                    onChange={e => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-64 h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
                    onSubmit={submitForm}
                    >
                    Iniciar sesión
                </button>
            </form>
            {error && <p className="text-red-600 mt-4">Todos los campos son obligatorios</p>}
        </section>
    )
}
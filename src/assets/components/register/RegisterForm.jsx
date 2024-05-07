import { useState } from "react";

export function RegisterForm() {
    const [error, setError] = useState(false);
	const [errorEmail, setErrorInvalidEmail] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        user: "",
        password: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

	function submitForm(e) {
		e.preventDefault();
	
		const { name, lastName, email, user, password } = formData;
		let formValid = true;
	
		if (!name || name.trim() === "") {
			setError(true);
			formValid = false;
		}
	
		if (!lastName || lastName.trim() === "") {
			setError(true);
			formValid = false;
		}
	
		if (!email || email.trim() === "") {
			setError(true);
			formValid = false;
		} else if (!email.includes("@")) {
			setError(false);
			setErrorInvalidEmail(true);
			formValid = false;
		}
	
		if (!user || user.trim() === "") {
			setError(true);
			formValid = false;
		}
	
		if (!password || password.trim() === "") {
			setError(true);
			formValid = false;
		}
	
		if (formValid) {
			setError(false);
			setErrorInvalidEmail(false);
			sessionStorage.setItem("name", name);
			sessionStorage.setItem("lastName", lastName);
			sessionStorage.setItem("email", email);
			sessionStorage.setItem("user", user);
			sessionStorage.setItem("password", password);

			console.log(sessionStorage.getItem("name"));
			console.log(sessionStorage.getItem("lastName"));
			console.log(sessionStorage.getItem("email"));
			console.log(sessionStorage.getItem("user"));
			console.log(sessionStorage.getItem("password"));

			clearSessionStorage();
		}
	
		console.log("Error:", error);
	}
	

	function clearSessionStorage() {
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("lastName");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("password");
    }

	return (
		<section className="flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold mb-4 text-white">Register</h1>
			<form className="flex flex-col items-center justify-center" onSubmit={submitForm}>
				<input
					type="text"
					name="name"
					placeholder="Nombre"
					className="w-64 h-12 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
					value={formData.name}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Apellido"
					className="w-64 h-12 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
					value={formData.lastName}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="email"
					placeholder="Email"
					className="w-64 h-12 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
					value={formData.email}
					onChange={handleChange}				/>
				<input
					type="text"
					name="user"
					placeholder="Usuario"
					className="w-64 h-12 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
					value={formData.user}
					onChange={handleChange}				/>
				<input
					type="password"
					name="password"
					placeholder="Contraseña"
					className="w-64 h-12 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
					value={formData.password}
					onChange={handleChange}				/>
				<button
					type="submit"
					className="w-64 h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
				>
					Registrarse
				</button>
			</form>
			{error && (
				<p className="text-red-600 mt-4">
					Todos los campos son obligatorios
				</p>
			)}
			{errorEmail && (
				<p className="text-red-600 mt-3">
					Formato de Email incorrecto
				</p>
			)}
		</section>
	);
}

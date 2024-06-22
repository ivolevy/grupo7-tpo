import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { register } from "../../../api";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
	const navigate = useNavigate();
    const [error, setError] = useState(false);
	const [errorEmail, setErrorInvalidEmail] = useState(false);
	const [registrationSuccess, setRegistrationSuccess] = useState(false);
	const [errorEmailUsado, setErrorEmailUsado] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: ""
    });

	useEffect(() => {
		if (registrationSuccess) {
			toast.success("Registro exitoso", {
				position: "top-center",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			setTimeout(() => {
				navigate("/login");
			}, 2000);

			setRegistrationSuccess(false);
		}
	}, [registrationSuccess]);

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

	const validateForm = () => {
		const { name, lastName, email, password } = formData;
		let formValid = true;
		let pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

		if (!name.trim()) {
			setError(true);
			formValid = false;
		}

		if (!lastName.trim()) {
			setError(true);
			formValid = false;
		}

		if (!email.trim()) {
			setError(true);
			formValid = false;
		} else if (!pattern.test(email)) {
			setError(false);
			setErrorInvalidEmail(true);
			formValid = false;
		}

		if (!password.trim()) {
			setError(true);
			formValid = false;
		}

		return formValid;

	};

	const submitForm = async (e) => {
		e.preventDefault();
	  
		if (validateForm()) {
		  setError(false);
		  setErrorInvalidEmail(false);
	  
		  try {
			const { name, lastName, email, password } = formData;
			const data = await register(name, lastName, email, password);
			if (data) {
				setRegistrationSuccess(true);
			  } else {
				throw new Error("Registration failed");
			  }
		  } catch (error) {
			setErrorEmailUsado(true);
		  }
		}
	  };

	return (
		<section className="flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold mb-4 text-white relative z-10">Registrate</h1>
			<form 
				className="flex flex-col items-center justify-center" 
				onSubmit={submitForm}
			>
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
					onChange={handleChange}				
				/>
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
				{error && (
				<p className="text-red-600 mt-4">
					Todos los campos son obligatorios
				</p>
				)}
				{errorEmail && (
				<p className="text-red-600 mt-2.5">
					Formato de Email incorrecto
				</p>
				)}
				{errorEmailUsado && (
				<p className="text-red-600 mt-2.5">
					Email ya registrado
				</p>
				)}
			</form>			
		</section>
	);
}

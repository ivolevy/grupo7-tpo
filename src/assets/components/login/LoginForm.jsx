import { useEffect, useState } from "react";
import { login } from "../../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
	const navigate = useNavigate();
	const [error, setError] = useState(false);
	const [loginSuccess, setLoginSuccess] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		if (loginSuccess) {
			toast.success("Inicio de sesion exitoso", {
				position: "top-center",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			// setTimeout(() => {
			// 	navigate("/");
			// }, 2000);

			setLoginSuccess(false);
		}
	}, [loginSuccess]);

	function handleChange(e) {
		const { name, value } = e.target;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	const validateForm = () => {
		const { email, password } = formData;
		let formValid = true;
		let pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

		if (!email.trim()) {
			setError(true);
			formValid = false;
		} else if (!pattern.test(email)) {
			setErrorInvalidEmail(true);
			formValid = false;
		}

		if (!password.trim()) {
			setError(true);
			formValid = false;
		}

		return formValid;
	}
		

	const submitForm = async (e) => {
		e.preventDefault();

		if (validateForm()) {
			try {
				const { email, password } = formData;
				const data = await login(email, password);
				localStorage.setItem("token", data.access_token);
				setLoginSuccess(true);
			} catch (error) {
				setError(true);
				console.error(error);
			}
		}
	};

	return (
		<section className="flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold mb-4 text-white">Log in</h1>
			<form
				className="flex flex-col items-center justify-center"
				onSubmit={submitForm}
			>
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
					onChange={handleChange}
				/>
				<button
					type="submit"
					className="w-64 h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
				>
					Iniciar sesión
				</button>
			</form>
			{error && (
				<p className="text-red-600 mt-4">
					Dirección de email o contraseña incorrectas.
				</p>
			)}
		</section>
	);
}

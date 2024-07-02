import React, { useEffect, useState } from "react";
import { login } from "../../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (error) {
      toast.error("Dirección de email o contraseña incorrectas", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setError(false);
    }
  }, [error]);

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

    if (!email.trim() || !pattern.test(email)) {
      setError(true);
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
      try {
        const { email, password } = formData;
        const data = await login(email, password);
        localStorage.setItem("token", data.access_token);

        window.location.assign("/")
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
        className="max-w-lg mx-auto grid grid-cols-1 gap-4"
        onSubmit={submitForm}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            style={{ minWidth: "300px" }} // Ancho mínimo deseado
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            style={{ minWidth: "300px" }} // Ancho mínimo deseado
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
      {error && (
        <p className="text-red-600 mt-4">
          Dirección de email o contraseña incorrectas.
        </p>
      )}
    </section>
  );
}

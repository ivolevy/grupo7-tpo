import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { register } from '../../../api';
import { useNavigate } from 'react-router-dom';

export function RegisterForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorEmail, setErrorInvalidEmail] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorEmailUsado, setErrorEmailUsado] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if (registrationSuccess) {
      toast.success('Registro exitoso', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      });
      setTimeout(() => {
        navigate('/login');
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

  const submitForm = async e => {
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
          throw new Error('Registration failed');
        }
      } catch (error) {
        setErrorEmailUsado(true);
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-white relative z-10">
        Registrate
      </h1>
      <form
        className="max-w-lg mx-auto grid grid-cols-2 gap-4"
        onSubmit={submitForm}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Apellido
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="col-span-2">
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
            required
          />
        </div>

        <div className="col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Registrarse
          </button>
        </div>

        {error && (
          <p className="text-red-600 mt-4">Todos los campos son obligatorios</p>
        )}
        {errorEmail && (
          <p className="text-red-600 mt-2.5">Formato de Email incorrecto</p>
        )}
        {errorEmailUsado && (
          <p className="text-red-600 mt-2.5">Email ya registrado</p>
        )}
      </form>
    </section>
  );
}

import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { sendEmail } from '../../../api';

export const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    problem: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === 'photo') {
      setFormData((prevState) => ({
        ...prevState,
        photos: [...prevState.photos, ...files],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: e.target.value,
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail(formData.problem, formData.description, formData.fullName);
    alert('Email sent successfully');
  };

  return (
    <div>
      <h3 className="text-xl mb-4">Having a problem? Let us help you!</h3>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto grid grid-cols-2 gap-2">
        <div className="col-span-2">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-400 text-left"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
            required
          />
        </div>

        <div className="col-span-2">
          <label
            htmlFor="problem"
            className="block text-sm font-medium text-gray-400 text-left"
          >
            Problemática
          </label>
          <input
            type="text"
            id="problem"
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
            required
          />
        </div>

        <div className="col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-400 text-left"
          >
            Breve descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
            rows="5"
            required
          ></textarea>
        </div>

        <div className="col-span-2">
          <div className="mt-2 grid grid-cols-3 gap-4">
          </div>
        </div>

        <div className="col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    problem: '',
    description: '',
    photos: [],
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

  const handleRemovePhoto = (index) => {
    setFormData((prevState) => {
      const updatedPhotos = [...prevState.photos];
      updatedPhotos.splice(index, 1);
      return {
        ...prevState,
        photos: updatedPhotos,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      fullName: '',
      problem: '',
      description: '',
      photos: [],
    });
  };

  return (
    <div>
      <h3 className="text-xl mb-4">Formulario de Contacto</h3>
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            style={{ width: '100%', height: '40px' }}
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            style={{ width: '100%', height: '40px' }}
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="5"
            style={{ width: '100%', height: '100px' }}
            required
          ></textarea>
        </div>

        <div className="col-span-2">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-400 text-left"
          >
            Fotos (opcional)
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            multiple
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-900"
            style={{ width: '100%', height: '40px' }}
          />
          <div className="mt-2 grid grid-cols-3 gap-4">
            {formData.photos.map((photo, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`Preview ${index}`}
                  className="rounded-md border border-gray-300"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <button
                  type="button"
                  onClick={() => handleRemovePhoto(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 transform translate-x-2 -translate-y-2"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
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

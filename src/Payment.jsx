import { CustomNav } from "./assets/components/Nav";
import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [dni, setDNI] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const handleCardTypeChange = (e) => {
    setCardType(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    const inputNumber = e.target.value.replace(/\D/g, ''); // Solo números
    if (inputNumber.length <= 16) {
      const formattedNumber = inputNumber.replace(/(\d{4})/g, '$1 ').trim();
      setCardNumber(formattedNumber);
    }
  };

  const handleCVVChange = (e) => {
    const inputCVV = e.target.value.replace(/\D/g, ''); // Solo números para CVV
    if (inputCVV.length <= 3) {
      setCVV(inputCVV);
    }
  };

  const handleDNIChange = (e) => {
    const inputDNI = e.target.value.replace(/\D/g, ''); // Solo números para DNI
    if (inputDNI.length <= 8) {
      setDNI(inputDNI);
    }
  };

  const handleCardHolderChange = (e) => {
    const inputCardHolder = e.target.value.replace(/[^a-zA-Z ]/g, ''); // Solo letras y espacios
    if (inputCardHolder.length <= 30) {
      setCardHolder(inputCardHolder);
    }
  };

  const handleSubmit = () => {
    alert('Compra hecha');
  };

  const isSubmitDisabled = cardNumber.replace(/\D/g, '').length < 16 || cvv.length !== 3 || dni.length < 7 || dni.length > 8 || cardHolder.length < 1 || cardHolder.length > 30;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="TipoTarjeta">
            Tipo de Tarjeta
          </label>
          <select
            id="TipoTarjeta"
            value={cardType}
            onChange={handleCardTypeChange}
            className="block w-full p-2 border rounded-md bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Seleccionar Tipo de Tarjeta</option>
            <option value="mastercard">MasterCard</option>
            <option value="amex">American Express</option>
            <option value="visa">Visa</option>
            <option value="discover">Discover</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="NumeroTarjeta">
            Numero de Tarjeta
          </label>
          <input
            id="NumeroTarjeta"
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="block w-full p-2 border rounded-md"
            placeholder="Poner Numero de Tarjeta"
            maxLength="19" // 16 digits + 3 spaces
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
            CVV
          </label>
          <input
            id="cvv"
            type="text"
            value={cvv}
            onChange={handleCVVChange}
            className="block w-full p-2 border rounded-md"
            placeholder="Poner CVV"
            maxLength="3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dni">
            DNI
          </label>
          <input
            id="dni"
            type="text"
            value={dni}
            onChange={handleDNIChange}
            className="block w-full p-2 border rounded-md"
            placeholder="Poner DNI"
            maxLength="8"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="TitulardeTarjeta">
            Titular de Tarjeta
          </label>
          <input
            id="TitulardeTarjeta"
            type="text"
            value={cardHolder}
            onChange={handleCardHolderChange}
            className="block w-full p-2 border rounded-md"
            placeholder="Poner Titular de Tarjeta"
            maxLength="30"
          />
        </div>
        <button
          type="button"
          className={`w-full p-2 rounded-md ${cardType && !isSubmitDisabled ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
          onClick={handleSubmit}
          disabled={!cardType || isSubmitDisabled}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export const Payment = () => {
  return (
    <>
      <CustomNav />
      <div className="h-screen pt-20">
        <h1 className="text-center text-2xl font-bold text-white mb-10">Payment Page</h1>
        <PaymentForm />
      </div>
    </>
  );
};

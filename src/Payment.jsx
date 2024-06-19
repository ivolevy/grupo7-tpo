import { CustomNav } from "./assets/components/Nav";
import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');

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

  const handleSubmit = () => {
    alert('Compra hecha');
  };

  const isSubmitDisabled = cardNumber.replace(/\D/g, '').length < 16;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardType">
            Card Type
          </label>
          <select
            id="cardType"
            value={cardType}
            onChange={handleCardTypeChange}
            className="block w-full p-2 border rounded-md bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a card type</option>
            <option value="mastercard">MasterCard</option>
            <option value="amex">American Express</option>
            <option value="visa">Visa</option>
            <option value="discover">Discover</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            id="cardNumber"
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="block w-full p-2 border rounded-md"
            placeholder="Enter your card number"
            maxLength="19" // 16 digits + 3 spaces
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

export default Payment;

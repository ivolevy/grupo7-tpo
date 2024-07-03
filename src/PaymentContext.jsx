import React, { createContext, useState } from "react";

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  return (
    <PaymentContext.Provider value={{ isCheckoutComplete, setIsCheckoutComplete, isPaymentComplete, setIsPaymentComplete }}>
      {children}
    </PaymentContext.Provider>
  );
};

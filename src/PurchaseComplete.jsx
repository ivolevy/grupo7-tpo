import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export const PurchaseComplete = () => {
    const location = useLocation();
    const { order } = location.state;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white-100 py-8">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
                <h1 className="text-3xl font-bold text-center text-blue-bizio mb-6">Compra Finalizada</h1>
                <p className="text-lg text-center text-gray-700 mb-8">¡Gracias por tu compra!</p>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Detalles del Pedido</h2>
                    <div className="flex justify-between">
                        <p className="text-gray-600">Id: {order.id}</p>
                        <p className="text-gray-600">Total: ${order.totalAmount}</p>
                        <p className="text-gray-600">Fecha: {order.orderDate}</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Productos Comprados</h2>
                    {order.orderItems.map((product) => (
                        <div key={product.id} className="flex justify-between items-center p-4 mb-4 border rounded-md bg-gray-element text-white">
                            <div>
                                <p className="text-lg font-medium">{product.productName}</p>
                                <p className="text-sm">Cantidad: {product.quantity}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

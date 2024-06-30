import React from 'react'

export const DeleteAdvice = ({ isOpen, onClose, onConfirm, message}) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <p>{message}</p>
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded-md mr-2"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md"
                        onClick={onConfirm}
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from 'react'

export const EditDiscountModal = ({ isOpen, onClose, onSave, discount }) => {
    const [discountData, setDiscountData] = useState({
        discountId: '',
        code: '',
        percentage: 0,
        active: false
    });

    useEffect(() => {
        if (discount) {
            setDiscountData({
                discountId: discount.discountId || '',
                code: discount.code || '',
                percentage: discount.percentage || 0,
                startDate: discount.startDate || '',
                endDate: discount.endDate || '',
                active: discount.active || false
            });
        }
    }, [discount]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setDiscountData({
            ...discountData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        onSave(discountData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true"></div>
                <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <form onSubmit={handleSave}>
                        <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                                        Editar Descuento
                                    </h3>
                                    <div className="mt-2">
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { label: "Código del descuento", type: "text", name: "code", id: "discountCode" },
                                                { label: "Porcentaje", type: "number", name: "percentage", id: "discountPercentage" },
                                            ].map(({ label, type, name, id }) => (
                                                <div key={id}>
                                                    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                                                        {label}
                                                    </label>
                                                    <input
                                                        type={type}
                                                        name={name}
                                                        id={id}
                                                        value={discountData[name]}
                                                        onChange={handleChange}
                                                        required
                                                        readOnly={name === 'code'}
                                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            ))}
                                            <div>
                                                <label htmlFor="discountActive" className="block text-sm font-medium text-gray-700">
                                                    Activo
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    name="active"
                                                    id="discountActive"
                                                    checked={discountData.active}
                                                    onChange={handleChange}
                                                    className="block mt-2 inline-flex shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="submit" className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Guardar
                            </button>
                            <button onClick={onClose} type="button" className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

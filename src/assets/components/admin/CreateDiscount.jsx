import React, { useEffect, useState } from 'react'
import { createDiscount } from '../../../api'
import { toast } from 'react-toastify'

export const CreateDiscount = () => {
    const [createSuccess, setCreateSuccess] = useState(false)
    const [error, setError] = useState(null)
    const [discount, setDiscount] = useState({
        code: '',
        percentage: 0,
        startDate: '2024-07-03',
        endDate: '2024-11-18',
        active: false
    });

    useEffect(() => {
        if (createSuccess) {
            toast.success('Descuento creado con éxito', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
            });
            setCreateSuccess(false);
        }
    }, [createSuccess]);

    useEffect(() => {
        if (error) {
            toast.error('El código de descuento ya ha sido utilizado.', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
            });
            setError(null);
        }
    }, [error]);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (type === 'checkbox') {
            setDiscount((prevState) => ({
                ...prevState,
                [name]: e.target.checked,
                [name]: type === 'checkbox' ? checked : value
            }));
        } else {
            setDiscount((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleToggleActive = () => {
        setDiscount((prevState) => ({
            ...prevState,
            active: !prevState.active
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { code, percentage, startDate, endDate, active } = discount;
            const data = await createDiscount(code, percentage, startDate, endDate, active);
            setCreateSuccess(true);
        } catch (error) {
            setError(true);
            console.error(error);
        }
    }

    return (
        <div>
            <h3 className="text-xl mb-4">Crear Nuevo Descuento</h3>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto grid grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="discountCode"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Código del descuento
                    </label>
                    <input
                        type="text"
                        name="code"
                        id="discountCode"
                        value={discount.code}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label
                        htmlFor="discountPercentage"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Porcentaje de descuento
                    </label>
                    <input
                        type="number"
                        name="percentage"
                        id="discountPercentage"
                        value={discount.percentage}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                </div>
                <div className="flex items-center justify-start">
                    <label htmlFor="discountActive" className="mr-2 text-sm font-medium text-gray-700">
                        Activo
                    </label>
                    <div className="relative" onClick={handleToggleActive}>
                        <input
                            type="checkbox"
                            id="discountActive"
                            name="active"
                            checked={discount.active}
                            onChange={handleChange}
                            className="sr-only"
                        />
                        <label htmlFor="discountActive" className={`block w-14 h-8 rounded-full cursor-pointer ${discount.active ? 'bg-blue-500' : 'bg-gray-600'}`}></label>
                        <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform cursor-pointer ${discount.active ? 'translate-x-full border-green-500' : 'translate-x-0 border-gray-400'}`} style={{ transform: discount.active ? 'translateX(100%)' : 'translateX(0)', border: '2px solid' }}></div>
                    </div>
                </div>
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                    >
                        Crear Descuento
                    </button>
                </div>
            </form>
        </div>
    );
}

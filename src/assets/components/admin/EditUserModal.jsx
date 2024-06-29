import React, { useEffect, useState } from 'react';

export const EditUserModal = ({ isOpen, onClose, onSave, user, roles = [] }) => {
    const [selectedRole, setSelectedRole] = useState(user ? user.role : '');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen) {
            setError(null);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSave = () => {
        if (selectedRole && selectedRole !== user.role) {
            onSave({ ...user, role: selectedRole });
            setError(null);
        } else {
            setError(true);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Editar Rol del Usuario</h3>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">Seleccione el nuevo rol para el usuario.</p>
                    </div>
                    <div className="mt-4">
                        <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="px-4 py-2 border rounded-lg text-gray-700"
                        >
                            <option value="" disabled>Selecciona un Rol</option>
                            {roles.map((role) => (
                                <option key={role} value={role}>{role}</option>
                            ))
                            }
                        </select>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button
                            id="saveButton"
                            className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                            onClick={handleSave}
                        >
                            Guardar Cambios
                        </button>
                        <button
                            id="cancelButton"
                            className="mt-3 px-4 py-2 bg-gray-200 text-gray-900 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
                {error &&
                    <p className="text-red-500 text-center mt-2">
                        El rol seleccionado es inválido o igual al rol actual del usuario.
                    </p>
                }
            </div>
        </div>
    );
};
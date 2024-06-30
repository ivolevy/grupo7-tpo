import React, { useEffect, useState } from 'react'
import { getUsers, deleteUser, changeRole } from '../../../api'
import { DeleteAdvice } from './Modals/DeleteAdvice'
import { EditUserModal } from './Modals/EditUserModal'

export const ManageUsers = ({roles = []}) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userToDelete, setUserToDelete] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [userToChangeRole, setUserToChangeRole] = useState(null);
    const [isChangeRoleModalOpen, setIsChangeRoleModalOpen] = useState(false);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
                const sortedData = data.sort((a, b) => a.userId - b.userId);
                setUsers(sortedData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDeleteClick = (id) => {
        setUserToDelete(id);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await deleteUser(userToDelete);
            setUsers((prevState) => prevState.filter((user) => user.userId !== userToDelete));
            setIsDeleteModalOpen(false);
            setUserToDelete(null);
        } catch (error) {
            console.error(error);
            setError(error);
        }
    };

    const handleEditClick = (user) => {
        setIsChangeRoleModalOpen(true);
        setUserToChangeRole(user);
    };

    const handleSaveChangeRole = async (updatedUser) => {
        if (!updatedUser.userId) {
            console.error("User ID is undefined");
            return;
        }

        try {
            await changeRole(updatedUser.userId, updatedUser.role);
            setUsers((prevState) => prevState.map((user) => {
                if (user.userId === updatedUser.userId) {
                    return updatedUser;
                }
                return user;
            }));
            setIsChangeRoleModalOpen(false);
            setUserToChangeRole(null);
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }

    const handleCloseModal = () => {
        setIsDeleteModalOpen(false);
        setUserToDelete(null);
        setIsChangeRoleModalOpen(false);
        setUserToChangeRole(null);
    }


    return (
        <div>
            <h2 className="text-xl mb-4">Gestionar Usuarios</h2>
            {error ? (
                <div className="text-red-500">Error: {error.message}</div>
            ) : loading ? (
                <div>Cargando...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user) => (
                        <div key={user.userId} className="border rounded-lg p-4 shadow-lg">
                            <div>
                                <h5 className="text-lg font-bold">{user.name}</h5>
                                <p>Email: {user.email}</p>
                                <p>{user.role}</p>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md mr-2"
                                    onClick={() => handleDeleteClick(user.userId)}
                                >
                                    Eliminar
                                </button>
                                <button
                                    className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded-md"
                                    onClick={() => handleEditClick(user)}
                                >
                                    Modificar Rol
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <DeleteAdvice
                isOpen={isDeleteModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                message="¿Estás seguro que deseas eliminar este usuario?"
            />
            <EditUserModal
                isOpen={isChangeRoleModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveChangeRole}
                user={userToChangeRole}
                roles={roles}
            />
        </div>
    )
}

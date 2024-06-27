export const ManageProducts = () => {
  return (
    <div>
     <h3 className="text-xl mb-4">Gestionar Productos</h3>
              <ul>
                <li>
                  Producto 1 - $100{' '}
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md ml-2">
                    Eliminar
                  </button>
                </li>
                <li>
                  Producto 2 - $50{' '}
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md ml-2">
                    Eliminar
                  </button>
                </li>
                <li>
                  Producto 3 - $75{' '}
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md ml-2">
                    Eliminar
                  </button>
                </li>
              </ul>         
    </div>
  )
}

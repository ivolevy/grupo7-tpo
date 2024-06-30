import React, { useState, useEffect } from 'react';

export const EditProductModal = ({ isOpen, onClose, onSave, product, categories = [] }) => {
    const [productData, setProductData] = useState({
        productId: '',
        name: '',
        stock: '',
        description: '',
        brand: '',
        category: '',
        price: '',
        discounted: false,
        discountAmount: 0,
        image: null,
        imageUrl: '',
    });

    useEffect(() => {
        if (product) {
            setProductData({
                productId: product.productId || '',
                name: product.name || '',
                stock: product.stock || '',
                description: product.description || '',
                brand: product.brand || '',
                category: product.category || '',
                price: product.price || '',
                discounted: product.discounted || false,
                discountAmount: product.discountAmount || 0,
                image: null,
                imageUrl: product.image ? `data:image/jpeg;base64,${product.image}` : '',
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            const newImageUrl = files.length > 0 ? URL.createObjectURL(files[0]) : '';
            setProductData({
                ...productData,
                image: files[0],
                imageUrl: newImageUrl,
            });
        } else {
            setProductData({
                ...productData,
                [name]: type === 'checkbox' ? checked : value,
            });
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productId', productData.productId);
        formData.append('name', productData.name);
        formData.append('description', productData.description);
        formData.append('brand', productData.brand);
        formData.append('category', productData.category);
        formData.append('price', productData.price);
        formData.append('inDiscount', productData.discounted);
        formData.append('discountPercentage', productData.discountAmount);
        formData.append('stock', productData.stock);
        if (productData.image) {
            formData.append('image', productData.image);
        } else if (productData.imageUrl) {
            const imageFile = await imageUrlToFile(productData.imageUrl, 'image.jpg');
            if (imageFile) {
                formData.append('image', imageFile);
            }
        }

        onSave(formData);
    };

    async function imageUrlToFile(imageUrl, filename) {
        try {
            const response = await fetch(imageUrl);
            if (!response.ok) throw new Error('Network response was not ok.');
    
            const blob = await response.blob();
    
            const file = new File([blob], filename, { type: blob.type });
    
            return file;
        } catch (error) {
            console.error('Error converting image URL to File:', error);
            return null;
        }
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg w-1/2">
                <h3 className="text-xl mb-4">Editar Producto</h3>
                <form onSubmit={handleSave} className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input type="text" id="productName" name="name" readOnly value={productData.name} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="productStock" className="block text-sm font-medium text-gray-700">Stock</label>
                        <input type="text" id="productStock" name="stock" value={productData.stock} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">Descripción</label>
                        <textarea id="productDescription" name="description" value={productData.description} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" rows="3" required />
                    </div>
                    <div>
                        <label htmlFor="productBrand" className="block text-sm font-medium text-gray-700">Marca</label>
                        <input type="text" id="productBrand" name="brand" value={productData.brand} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">Categoría</label>
                        <select id="productCategory" name="category" value={productData.category} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
                            <option value="" disabled>Selecciona una categoría</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">Precio</label>
                        <input type="text" id="productPrice" name="price" value={productData.price} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                    </div>
                    <div className="flex items-center">
                        <input id="productDiscounted" name="discounted" type="checkbox" checked={productData.discounted} onChange={handleChange} className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                        <label htmlFor="productDiscounted" className="ml-2 block text-sm text-gray-900">Producto en Descuento</label>
                    </div>
                    {productData.discounted && (
                        <div className="w-full">
                            <label htmlFor="productDiscountAmount" className="block text-sm font-medium text-gray-700">Monto de Descuento (%)</label>
                            <input type="number" id="productDiscountAmount" name="discountAmount" value={productData.discountAmount} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                        </div>
                    )}
                    <div className="col-span-2">
                        <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">Imagen</label>
                        <input type="file" id="productImage" name="image" accept="image/*" onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        {productData.imageUrl && (
                            <img src={productData.imageUrl} alt="Preview" className="mt-2 mx-auto rounded-md border border-gray-300" style={{ maxWidth: '200px' }} />
                        )}
                    </div>
                    <div className="col-span-2 mt-4 flex justify-end">
                        <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md mr-2" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

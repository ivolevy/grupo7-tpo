import { API_BASE_URL } from "./config";

export const register = async (name, lastName, email, password) => {
	const response = await fetch(`${API_BASE_URL}/auth/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			firstname: name,
			lastname: lastName,
			email,
			password,
		}),
	});

	if (!response.ok) {
		throw new Error("Error al registrar el usuario");
	}

	return response.json();
};

export const login = async (email, password) => {
	const response = await fetch(`${API_BASE_URL}/auth/authenticate`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	});

	if (!response.ok) {
		throw new Error("Usuario o contraseña incorrectos");
	}

	const data = await response.json();
	return data;
};

export const createProduct = async (
	name,
	description,
	brand,
	category,
	price,
	discounted,
	discountAmount,
	image,
	stock
) => {
	const formData = new FormData();
	formData.append("name", name);
	formData.append("description", description);
	formData.append("brand", brand);
	formData.append("category", category);
	formData.append("price", price);
	formData.append("inDiscount", discounted);
	formData.append("discountPercentage", discountAmount);
	formData.append("image", image);
	formData.append("stock", stock);

	const response = await fetch(`${API_BASE_URL}/product/create`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
		body: formData,
	});

	if (response.status === 423) {
		throw new Error("No autorizado");
	}

	if (!response.ok) {
		throw new Error("Error al crear el producto");
	}

	return response.json();
};

export const getProducts = async () => {
	const response = await fetch(`${API_BASE_URL}/product`, {
		method: "GET",
	});

	if (!response.ok) {
		throw new Error("Error al obtener los productos");
	}

	try {
		const productsData = await response.json();
		return productsData;
	} catch (error) {
		throw new Error("Error al parsear los datos de los productos");
	}
};

export const getProductsAdmin = async () => {
	const response = await fetch(`${API_BASE_URL}/product/admin`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	if (response.status === 423) {
		throw new Error("Acceso no autorizado");
	}

	if (!response.ok) {
		throw new Error("Error al obtener los productos");
	}

	try {
		const productsData = await response.json();
		return productsData;
	} catch (error) {
		throw new Error("Error al parsear los datos de los productos");
	}
};

export const getProductById = async (productId) => {
	try {
		const response = await fetch(`${API_BASE_URL}/product/${productId}`, {
			method: "GET",
		});

		if (!response.ok) {
			const errorBody = await response.text();
			console.error("Error response:", errorBody);
			throw new Error(
				`Error al obtener los productos: ${response.status} ${response.statusText}`
			);
		}

		const productsData = await response.json();
		return productsData;
	} catch (error) {
		console.error("Error in getProductById:", error);
		throw error;
	}
};

export const getUsers = async () => {
	const response = await fetch(`${API_BASE_URL}/user`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	if (response.status === 423) {
		throw new Error("Acceso no autorizado");
	}

	if (!response.ok) {
		throw new Error("Error al obtener los usuarios");
	}

	try {
		const usersData = await response.json();
		return usersData;
	} catch (error) {
		throw new Error("Error al parsear los datos de los usuarios");
	}
};

export const getSingleUser = async () => {
	const response = await fetch(`${API_BASE_URL}/user/currentUser`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	if (!response.ok) {
		throw new Error("Error al obtener el usuario");
	}

	try {
		const usersData = await response.json();
		return usersData;
	} catch (error) {
		throw new Error("Error al parsear los datos del usuario");
	}
};

export const deleteUser = async (id) => {
	const response = await fetch(`${API_BASE_URL}/user/delete/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	if (!response.ok) {
		throw new Error("Error al eliminar el usuario");
	}
};

export const changeRole = async (id, role) => {
	console.log(id, role);
	const response = await fetch(`${API_BASE_URL}/user/changeRole/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
		body: JSON.stringify({ role }),
	});

	if (!response.ok) {
		throw new Error("Error al cambiar el rol del usuario");
	}
};

export const deleteProduct = async (id) => {
	const response = await fetch(`${API_BASE_URL}/product/delete/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	if (!response.ok) {
		throw new Error("Error al eliminar el producto");
	}
};

export const updateProduct = async (formData) => {
	const response = await fetch(
		`${API_BASE_URL}/product/update/${formData.get("productId")}`,
		{
			method: "PUT",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: formData,
		}
	);

	if (!response.ok) {
		throw new Error("Error al actualizar el producto");
	}

	return response.json();
};

export const getDiscounts = async () => {
	const response = await fetch(`${API_BASE_URL}/discount`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	if (response.status === 423) {
		throw new Error("Acceso no autorizado");
	}

	if (!response.ok) {
		throw new Error("Error al obtener los descuentos");
	}

	try {
		const discountsData = await response.json();
		return discountsData;
	} catch (error) {
		throw new Error("Error al parsear los datos de los descuentos");
	}
};

export const createDiscount = async (
	code,
	percentage,
	startDate,
	endDate,
	active
) => {
	const response = await fetch(`${API_BASE_URL}/discount/create`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
		body: JSON.stringify({ code, percentage, startDate, endDate, active }),
	});

	if (response.status === 423) {
		throw new Error("No autorizado");
	}

	if (!response.ok) {
		throw new Error("Error al crear el descuento");
	}

	return response.json();
};

export const deleteDiscount = async (id) => {
	const response = await fetch(`${API_BASE_URL}/discount/delete/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	if (!response.ok) {
		throw new Error("Error al eliminar el descuento");
	}
};

export const updateDiscount = async (discount) => {
	const response = await fetch(
		`${API_BASE_URL}/discount/update/${discount.discountId}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify(discount),
		}
	);

	if (!response.ok) {
		throw new Error("Error al actualizar el descuento");
	}

	return response.json();
};

export const getUserOrders = async () => {
	const response = await fetch(`${API_BASE_URL}/order/userOrders`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	if (!response.ok) {
		throw new Error(response);
	}

	return response.json();
};

<<<<<<< Updated upstream
export const createOrder = async (orderItems) => {
	try {
		const response = await fetch(`${API_BASE_URL}/order`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify({ orderItems }),
		});

		if (!response.ok) {
			// Intentamos obtener el texto de error
			const errorText = await response.text();
			// Intentamos parsear como JSON, si falla, usamos el texto como está
			try {
				const errorJson = JSON.parse(errorText);
				throw new Error(errorJson.message || "Error al crear la orden");
			} catch (jsonError) {
				throw new Error(errorText || "Error al crear la orden");
			}
		}

		// Si la respuesta es OK, intentamos parsear como JSON
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.error("Error en createOrder:", error);
		throw error;
	}
};

export const validateDiscount = async (code) => {
	const response = await fetch(`${API_BASE_URL}/discount/getDiscount/${code}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	if (!response.ok) {
		throw new Error("Código de descuento inválido");
	}

	return response.json();
};


export const applyDiscount = async (percentage, id) => {
	const response = await fetch(`${API_BASE_URL}/discount/activateDiscount/${percentage}/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	if (!response.ok) {
		throw new Error("Código de descuento inválido");
	}

	return;
};

export const sendEmail = async (subject, message, fullName) => {

	const response = await fetch(`${API_BASE_URL}/user/contact/${subject}/${message}/${fullName}`, {
=======
export const addItemToOrder = async (productId) => {
	const token = localStorage.getItem("token");

	const response = await fetch(`${API_BASE_URL}/order/addItem/${productId}/${token}`, {
>>>>>>> Stashed changes
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
<<<<<<< Updated upstream
		body: JSON.stringify({ subject, message }),
	});

	if (!response.ok) {
		throw new Error("Error al enviar el email");
	}

	return response.json();
};
=======
		body: JSON.stringify({ productId, quantity }),
	});

	if (!response.ok) {
		throw new Error(response);
	}

	return response.json();
};
>>>>>>> Stashed changes

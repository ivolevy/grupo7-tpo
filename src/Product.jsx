import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "./api";
import "./assets/css/Main.css";
import "./assets/css/Product.css";
import { addtoCart } from "./redux/reducers/cartSlice";

const LazyImage = ({ src, alt }) => {
	const [imageSrc, setImageSrc] = useState("");

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setImageSrc(src);
		};
		img.src = src.startsWith("data:") ? src : `data:image/jpeg;base64,${src}`;
	}, [src]);

	return imageSrc ? (
		<img
			src={imageSrc}
			alt={alt}
			className="max-w-full max-h-full object-contain"
		/>
	) : (
		<div>Cargando imagen...</div>
	);
};

export const Product = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const retrieveProductData = async () => {
			try {
				setLoading(true);
				const productData = await getProductById(id);
				setProduct(productData);
				setLoading(false);
			} catch (error) {
				console.error(error);
				setError("Error al cargar el producto");
				setLoading(false);
			}
		};

		retrieveProductData();
	}, [id]);

	const handleCartClick = () => {
		if (product && product.stock > 0) {
			dispatch(addtoCart(product));
		} else {
			alert("Producto sin stock");
		}
	};

	const handleNavClick = () => {
		navigate("/products");
	};

	if (loading) return <div>Cargando...</div>;
	if (error) return <div>{error}</div>;
	if (!product) return <div>Producto no encontrado</div>;

	return (
		<>
			<button
				className="col-span-12 bg-gradient-to-r from-blue-bizio to-blue-500 text-xs text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
				onClick={handleNavClick}
			>
				« volver
			</button>
			<div className="mx-auto flex flex-col h-[55vh]">
				<div className="flex-1 grid grid-cols-12 gap-4 p-1">
					<div className="col-span-12 rounded-lg bg-gray-element sm:col-span-8 flex items-center justify-center">
						<LazyImage
							src={`data:image/jpeg;base64,${product.image}`}
							alt={product.name}
						/>
					</div>
					<div className="col-span-12 rounded-lg bg-blue-bizio p-16 sm:col-span-4 flex flex-col justify-center">
						<h1 className="productViewTitle text-black text-4xl uppercase mb-4">
							{product.name}
						</h1>
						<p className="productViewDesc mb-4 text-gray-element">
							{product.description}
						</p>
						<p className="productViewPrice mb-4 text-black text-3xl">
							${product.price} USD
						</p>
						<div className="productViewButtons">
							<button
								className={`productViewButton bg-black add ${product.stock === 0 ? "disabled" : ""
									}`}
								onClick={handleCartClick}
								disabled={product.stock === 0}
							>
								{product.stock === 0 ? "Sin Stock" : "Add to Cart"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { CustomNav as Nav } from "./assets/components/Nav";
import "./assets/css/Main.css";
import "./assets/css/Product.css";
import { useDispatch } from "react-redux";
import { addtoCart } from "./redux/reducers/cartSlice";

export const Product = ({ products }) => {
	const dispatch = useDispatch();

	const handleCartClick = (event) => {
		if (event.target.classList.contains("add")) {
			return true;
		} else {
			return false;
		}
	};

	const handleAddToCart = (product) => {
		dispatch(addtoCart(product));
	};

	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		const productData = products.find((item) => item.id === parseInt(id));
		setProduct(productData);
	}, [id, products]);

	return (
		<>
			<Nav />
			<div className="mx-auto flex flex-col h-[55vh]">
				{product ? (
					<div className="flex-1 grid grid-cols-12 gap-4 p-1">
						<div className="col-span-12 rounded-lg bg-gray-element sm:col-span-8 flex items-center justify-center ">
							<img
								src={product.image}
								className="productImg"
								alt={product.name}
							/>
						</div>
						<div className="col-span-12 rounded-lg bg-blue-bizio p-16 sm:col-span-4 flex flex-col justify-center">
							<h1 className="productViewTitle text-blac text-4xl uppercase mb-4">
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
									className="productViewButton bg-black add"
									onClick={(event) => {
										if (handleCartClick(event)) {
											handleAddToCart(product);
										} else {
											return;
										}
									}}
								>
									Add to cart
								</button>
								<button className="productViewButton bg-black">Buy</button>
							</div>
						</div>
					</div>
				) : (
					<p>Producto no encontrado</p>
				)}
			</div>
		</>
	);
};

Product.propTypes = {
	products: PropTypes.array.isRequired,
};

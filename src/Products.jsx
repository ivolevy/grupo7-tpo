import React, { useState, useEffect } from "react";
import { getProducts } from "./api";
import { Footer } from "./assets/components/Footer";
import CategoryFilter from "./assets/components/products/CategoryFilter";
import PriceFilter from "./assets/components/products/PriceFilter";
import { CardProduct } from "./assets/components/products/comp/CardProduct";

export const Products = () => {
	const [sortType, setSortType] = useState(null);
	const [categoryFilter, setCategoryFilter] = useState(null);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const data = await getProducts();
				const sortedData = data.sort((a, b) => a.productId - b.productId);
				setProducts(sortedData);
			} catch (error) {
				setError(error);
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);
	

	const handleMinPriceClick = () => {
		setSortType("asc");
	};

	const handleMaxPriceClick = () => {
		setSortType("desc");
	};

	const comparePrices = (a, b) => {
		if (sortType === "asc") {
			return a.price - b.price;
		} else if (sortType === "desc") {
			return b.price - a.price;
		} else {
			return 0;
		}
	};
	
	const filteredData = categoryFilter
		? products.filter((product) => product.category === categoryFilter)
		: products;
	const sortedData = [...filteredData].sort(comparePrices);

	return (
		<>
			<div className="flex flex-col sm:flex-row">
				<aside className="w-full sm:w-1/6 bg-gray-element p-4 rounded-md mt-6 mb-24">
					<CategoryFilter setCategoryFilter={setCategoryFilter} />
					<PriceFilter
						onMinPriceClick={handleMinPriceClick}
						onMaxPriceClick={handleMaxPriceClick}
					/>
				</aside>
				<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 min-[1070px]:grid-cols-3 min-[1400px]:grid-cols-4 mb-20">
					{sortedData.map((product) => (
						<CardProduct
							key={product.productId}
							productId={product.productId}
							image={product.image}
							desc={product.name}
							precio={product.price}
							discounted={product.discounted}
							discountAmount={(product.price * product.discountAmount) / 100}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

import React, { useState } from "react";
import { CustomNav } from "./assets/components/Nav";
import { CardProduct } from "./assets/components/products/comp/CardProduct";
import { Footer } from "./assets/components/Footer";
import { useFetchData } from "./assets/components/products/hooks/useFetchData";
import PriceFilter from "./assets/components/products/PriceFilter";

export const Products = () => {
	const [sortType, setSortType] = useState(null); // Estado para almacenar el tipo de orden
	const { data } = useFetchData("src/data/productos.json");

	const handleMinPriceClick = () => {
		setSortType("asc");
	};

	const handleMaxPriceClick = () => {
		setSortType("desc");
	};

	// Función para comparar los precios y ordenar los productos
	const comparePrices = (a, b) => {
		if (sortType === "asc") {
			return a.price - b.price;
		} else if (sortType === "desc") {
			return b.price - a.price;
		} else {
			return 0;
		}
	};

	const sortedData = [...data].sort(comparePrices);

	return (
		<>
			<CustomNav />
			<div className="priceFilter">
				<PriceFilter
					onMinPriceClick={handleMinPriceClick}
					onMaxPriceClick={handleMaxPriceClick}
				/>
			</div>
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 min-[1070px]:grid-cols-3 min-[1400px]:grid-cols-4 mb-20">
				{sortedData.map((product) => (
					<CardProduct
						key={product.id}
						id={product.id}
						image={product.image}
						desc={product.name}
						precio={product.price}
					/>
				))}
			</div>
			<Footer />
		</>
	);
};

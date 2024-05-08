import React, { useState } from "react";
import { CustomNav } from "./assets/components/Nav";
import { CardProduct } from "./assets/components/products/comp/CardProduct";
import { Footer } from "./assets/components/Footer";
import { useFetchData } from "./assets/components/products/hooks/useFetchData";
import PriceFilter from "./assets/components/products/PriceFilter";
import CategoryFilter from "./assets/components/products/CategoryFilter";

export const Products = () => {
	const [sortType, setSortType] = useState(null);
	const [categoryFilter, setCategoryFilter] = useState(null);
	const { data } = useFetchData("src/data/productos.json");

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
		? data.filter((product) => product.category === categoryFilter)
		: data;
	const sortedData = [...filteredData].sort(comparePrices);

	return (
		<>
			<CustomNav />
			<div className="flex flex-col sm:flex-row">
				{" "}
				<aside className=" w-full sm:w-1/6 bg-blue-bizio p-4 rounded-md mt-6 mb-24">
					{" "}
					<CategoryFilter setCategoryFilter={setCategoryFilter} />
					<hr className="my-4" />
					<PriceFilter
						onMinPriceClick={handleMinPriceClick}
						onMaxPriceClick={handleMaxPriceClick}
					/>
				</aside>
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
			</div>
			<Footer />
		</>
	);
};

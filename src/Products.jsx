import { CustomNav } from "./assets/components/Nav";
import { useEffect } from "react";
import { useState } from "react";
import { CardProduct } from "./assets/components/products/comp/CardProduct";

export const Products = () => {
	
	
	const [products, setProducts] = useState([]);

	const fetchData = async() => {
		try{
			const response = await fetch('src/data/productos.json')
			const data = await response.json()
			setProducts(data)
		}catch(error){
			console.error(error)
		}
	};

	console.log(products)

	useEffect(() => {
		fetchData()
	},[]);
	
	return (
		<>
			<CustomNav />
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2  min-[1070px]:grid-cols-3 min-[1400px]:grid-cols-4">
				{products.map(product => (
						<CardProduct key={product.id} imagen={product.image} desc={product.name} precio={product.price} />
				))}
			</div>
		</>
	);s
};

import { useState, useEffect } from "react";

export const useFetchData = (url) => {
	const [data, setData] = useState([]);

	const fetchData = async () => {
		try {
			const response = await fetch(`${url}`);
			const datos = await response.json();
			setData(datos);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return {
		data,
	};
};

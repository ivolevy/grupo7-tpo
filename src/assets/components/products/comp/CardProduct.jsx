import PropTypes from "prop-types";
import { CiShoppingCart } from "react-icons/ci";

export const CardProduct = ({ imagen, desc, precio }) => {
	return (
		<article className="rounded-xl bg-gray-element p-3 shadow-lg hover:border-blue-bizio duration-300 border-2 border-transparent">
				<div className="relative flex items-end overflow-hidden rounded-xl">
					<img src={imagen} alt="Hotel Photo" />
				</div>

				<div className="mt-1 p-2 h-1/3">
					<h2 className="text-white h-9">{desc}</h2>

					<div className="flex items-center justify-between space-y-1 mt-4">
						<p className="text-lg text-blue-500 pr-2">${precio}</p>
						<div className="flex items-center space-x-1.5 bg-blue-500  p-2 mt-0 text-white duration-100 hover:bg-blue-600">
							<CiShoppingCart />
							<button className="text-sm">Add to cart</button>
						</div>
					</div>
				</div>
		</article>
	);
};

CardProduct.propTypes = {
	imagen: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	precio: PropTypes.number.isRequired,
};

CardProduct.defaultProps = {
	imagen: "https://placehold.co/600x400/png",
	desc: "Producto sin registrar",
	precio: 0,
};

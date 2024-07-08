import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../../css/Main.css";

export const CardProduct = ({
	desc,
	discountAmount,
	image,
	discounted,
	precio,
	productId,
}) => {
	const finalPrice = discounted ? precio - discountAmount : precio;
	const formattedPrice = finalPrice.toFixed(2);

	return (
		<div>
			<Link to={`/product/${productId}`} className="card-link no-underline">
				<article className="rounded-xl bg-gray-element p-3 shadow-lg hover:border-blue-bizio duration-300 border-2 border-transparent">
					<div className="relative flex items-end overflow-hidden rounded-xl">
						<img
							src={`data:image/jpeg;base64,${image}`}
							alt="Product Photo"
							className="w-52 h-48"
						/>
					</div>

					<div className="mt-1 p-2 h-1/3">
						<h2 className="text-white no-underline h-20">{desc}</h2>

						<div className="flex items-center justify-between mt-4">
							<div>
								{discounted ? (
									<p className="text-lg text-blue-500 pr-6">
										<span className="text-sm line-through text-blue-bizio">
											${precio.toFixed(2)}
										</span>
										<span className="text-lg text-red-500 ml-2">
											${formattedPrice}
										</span>
									</p>
								) : (
									<p className="text-lg text-blue-bizio pr-2">
										${precio.toFixed(2)}
									</p>
								)}
							</div>
						</div>
					</div>
				</article>
			</Link>
		</div>
	);
};

CardProduct.propTypes = {
	image: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	precio: PropTypes.number.isRequired,
	productId: PropTypes.number.isRequired,
	discountAmount: PropTypes.number.isRequired,
};

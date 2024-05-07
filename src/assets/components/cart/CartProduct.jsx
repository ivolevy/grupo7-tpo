export const CartItem = ({
	name = "Default",
	price = 0,
	quantity = 1,
	src = "https://placehold.co/600x400",
}) => {
	return (
		<>
			<div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
				<img
					src={src}
					alt="product-image"
					className="w-full rounded-lg sm:w-40"
				/>
				<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
					<div className="mt-5 sm:mt-0">
						<h2 className="text-lg font-bold text-gray-900">{name}</h2>
					</div>
					<div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
						<div className="flex items-center border-gray-100">
							<h4>Cantidad:{quantity}</h4>
						</div>
						<div className="flex  items-center space-x-4">
							<div>
								<p className="text-sm">P x Unidad:{price}</p>
								<p className="text-sm">Total:{price * quantity}</p>
							</div>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

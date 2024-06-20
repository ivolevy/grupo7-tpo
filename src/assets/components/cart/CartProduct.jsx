export const CartItem = ({
	name = "Default",
	price = 0,
	quantity = 1,
	src = "https://placehold.co/600x400",
	funcionEliminar = undefined,
	funcionDecrementar = undefined,
	funcionIncrementar = undefined,
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
						<h2 className="text-lg text-gray-900">{name}</h2>
					</div>
					<div className="mt-4 flex justify-between  sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
						<div className="flex justify-center">
							<button
								className="w-5 h-5 self-center rounded-full border border-gray-300"
								onClick={funcionDecrementar}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#d1d5db"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M5 12h14" />
								</svg>
							</button>
							<input
								type="text"
								readOnly="readonly"
								value={quantity}
								className="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm mx-2"
							/>
							<button
								className="w-5 h-5 self-center rounded-full border border-gray-300"
								onClick={funcionIncrementar}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill=""
									stroke="#9ca3af"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M12 5v14M5 12h14" />
								</svg>
							</button>
						</div>
						<div className="flex  items-center space-x-4">
							<div className="justify-center">
								<p className="text-sm align-middle">Precio: {price}</p>
								<p className="text-sm align-middle">
									total: {parseFloat(price * quantity).toFixed(2)}
								</p>
							</div>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
								onClick={funcionEliminar}
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

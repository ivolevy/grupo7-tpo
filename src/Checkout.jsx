export const CheckOut = () => {
	return (
		<div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl mb-4">Your Purchase</h1>
			<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="col-span-2">
					<label
						className="block text-gray-700 text-sm mb-2"
						htmlFor="TipoTarjeta"
					>
						Orden Nro
					</label>
					<h2>NRO DE ORDEN</h2>
				</div>
				<div>
					<label
						className="block text-gray-700 text-sm mb-2"
						htmlFor="NumeroTarjeta"
					>
						Metodo de pago
					</label>
					<h2>Metodo de pago</h2>
				</div>

				<div>
					<label
						className="block text-gray-700 text-sm mb-2"
						htmlFor="TitulardeTarjeta"
					>
						Total
					</label>
					<h2>Monto Pago</h2>
				</div>
			</form>
		</div>
	);
};

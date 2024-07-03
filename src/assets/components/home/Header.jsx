import { Link } from "react-router-dom";
import g502 from "../../img/logitech-g502.png";

export const Header = () => {
	const handleClickDetails = () => {
		window.location.assign("/product/13");
	};

	return (
		<header className="header">
			<div className="leftHeader">
				<h1 className="headerInnerTitle text-lg text-blue-bizio">
					Tech products
				</h1>
				<h2 className="headerTitle">g502 hero wireless</h2>
				<p className="headerDescription font-sans font-light mt-2">
					Mouse de alta gama diseñado para juegos, con tecnología inalámbrica
					avanzada, sensor HERO de alta precisión, diseño ergonómico y botones
					programables para una experiencia de juego personalizable y sin
					cables.
				</p>
				<p className="headerPrice text-blue-bizio mt-2">usd 99.99</p>
				<div className="headerButtons mt-2">
					<Link
						to="/products"
						className="button button1 bg-blue-bizio font-sans no-underline"
					>
						More products
					</Link>
				</div>
			</div>
			<div className="rightHeader">
				<div className="imgHeaderContainer">
					<img src={g502} alt="" id="headerImg" />
				</div>
			</div>
		</header>
	);
};

import g203 from "../../img/productsHome//g203.png";
import keyboard from "../../img/productsHome//keyboard.png";
import office from "../../img/productsHome//office.png";
import { TitleCont } from "./comp/TitleCont";

const handleRedirect = () => {
	window.location.assign("/products");
};

const ProductSquare = ({ imgSrc, text }) => {
	return (
		<div className="productsSquare">
			<div className="producstImgContainer">
				<img
					src={imgSrc}
					alt=""
					className="productsImg"
					onClick={handleRedirect}
				/>
			</div>
			<p className="productsSquareText">{text}</p>
		</div>
	);
};

export const Products = () => {
	return (
		<>
			<section className="titleContainer">
				<TitleCont
					title="products"
					subtitle="Wich type of gear are you looking for?"
				/>
				<div className="productsContainer">
					<ProductSquare imgSrc={g203} text="Gaming" />
					<ProductSquare imgSrc={keyboard} text="Graphic design" />
					<ProductSquare imgSrc={office} text="Offiche & others" />
				</div>
			</section>
		</>
	);
};

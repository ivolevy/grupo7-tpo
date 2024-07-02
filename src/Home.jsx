import "../src/assets/css/Home.css";
import { Footer } from "./assets/components/Footer";
import { Header } from "./assets/components/home/Header";
import { Members } from "./assets/components/home/Members";
import { Products } from "./assets/components/home/ProductoHome";
import { Why } from "./assets/components/home/Why";

export const Home = () => {
	return (
		<>
			<Header />
			<Products />
			<Why />
			<Members />
			<Footer />
		</>
	);
};

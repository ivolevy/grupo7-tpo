import "../src/assets/css/Home.css";
import { CustomNav } from "./assets/components//Nav";
import { Footer } from "./assets/components/Footer";
import { Header } from "./assets/components/home/Header";
import { Members } from "./assets/components/home/Members";
import { Products } from "./assets/components/home/ProductoHome";
import { Why } from "./assets/components/home/Why";

export const Home = () => {
	return (
		<>
			<CustomNav />
			<Header />
			<Products />
			<Why />
			<Members />
			<Footer />
		</>
	);
};

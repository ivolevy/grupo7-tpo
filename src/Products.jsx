import { CustomNav } from "./assets/components/Nav";
import { CardProduct } from "./assets/components/products/comp/CardProduct";
import { Footer } from "./assets/components/Footer";
import { useFetchData } from "./assets/components/products/hooks/useFetchData";
import { Link } from "react-router-dom";

export const Products = () => {
    const { data, setData } = useFetchData("src/data/productos.json");

    return (
        <>
            <CustomNav />
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2  min-[1070px]:grid-cols-3 min-[1400px]:grid-cols-4 mb-20">
                {data.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <CardProduct
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            desc={product.name}
                            precio={product.price}
                        />
                    </Link>
                ))}
            </div>
            <Footer />
        </>
    );
};

import { Link } from 'react-router-dom';
import { CustomNav } from "./assets/components/Nav";
import { CardProduct } from "./assets/components/products/comp/CardProduct";

export const Products = () => {
  return (
    <>
      <CustomNav />
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Link to="/product">
          <CardProduct
            imagen="https://placehold.co/600x400/png"
            desc="Producto random"
            precio="$1500"
          />
        </Link>
        <Link to="/product">
          <CardProduct
            imagen="https://placehold.co/600x400/png"
            desc="Producto 2"
            precio="$2000"
          />
        </Link>
      </div>
    </>
  );
};

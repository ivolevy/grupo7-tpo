import mouse from '../../img/logitech-g502.png';
import '../../css/Product.css'

export const ProductView = () => {
  return (
    <div className="mx-auto flex flex-col h-[55vh]">
      <div className="flex-1 grid grid-cols-12 gap-4 p-1 ">
        <div className="col-span-12 rounded-lg bg-gray-element sm:col-span-8 flex items-center justify-center">
          <img src={mouse} className="productImg" alt="Imagen" />
        </div>
        <div className="col-span-12 rounded-lg bg-gray-element p-16 sm:col-span-4">
          {/* Sidebar */}
        </div>
      </div>
    </div>
  );
};

export default function ProductCard(image, desc, precio) {
  return (
    <>
      <div className=" h-1/4  w-1/5 bg-white ">
        <div className="imagen">
          <img src={image}></img>
        </div>
        <div>
          <p className="m-2">{desc}</p>
          <h2 className="text-xl m-2">{precio}</h2>
        </div>
      </div>
    </>
  );
}

import g502 from "../../img/logitech-g502.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="leftHeader">
        <h1 className="headerInnerTitle text-lg text-blue-bizio">Tech products</h1>
        <h2 className="headerTitle">g502 hero wireless</h2>
        <p className="headerDescription font-sans font-light mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          doloribus vitae fugit rem rerum alias esse possimus, ex iusto totam
          dolorem aut veritatis nulla nesciunt! Nemo, provident eum iste
          delectus.
        </p>
        <p className="headerPrice text-blue-bizio mt-2">usd 99.99</p>
        <div className="headerButtons mt-2">
          <button className="button button1 bg-blue-bizio font-sans">Add to cart</button>
          <button className="button button2 font-sans hover:bg-blue-bizio hover:border-transparent">See details</button>
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

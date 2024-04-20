import g502 from "../../img/logitech-g502.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="leftHeader">
        <h1 className="headerInnerTitle text-lg">Tech products</h1>
        <h2 className="headerTitle">g502 hero wireless</h2>
        <p className="headerDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          doloribus vitae fugit rem rerum alias esse possimus, ex iusto totam
          dolorem aut veritatis nulla nesciunt! Nemo, provident eum iste
          delectus.
        </p>
        <p className="headerPrice">usd 99.99</p>
        <div className="headerButtons">
          <button className="button button1">Add to cart</button>
          <button className="button button2">See details</button>
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

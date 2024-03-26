import g203 from '../../img/g203.png'
import keyboard from '../../img/keyboard.png'
import office from '../../img/office.png'
import { FaArrowRight } from "react-icons/fa";

const ProductSquare = ({ imgSrc, text }) => {
    return (
        <div className="productsSquare">
            <div className="producstImgContainer">
                <img src={imgSrc} alt="" className='productsImg'/>
            </div>
            <p className='productsSquareText'>{text}</p>
        </div>
    )
}

export const Products = () => {
  return (
    <>
        <section className="titleContainer">
            <h2 className="tcTitle">products</h2>
            <p className="tcTitleSc">Wich type of gear are you looking for?</p>
            <p className="tcText">Find more <FaArrowRight className='icon'/></p>
            <div className="productsContainer">
                <ProductSquare imgSrc={g203} text="Gaming" />
                <ProductSquare imgSrc={keyboard} text="Graphic design" />
                <ProductSquare imgSrc={office} text="Offiche & others" />
            </div>
        </section>
    </>
  )
}

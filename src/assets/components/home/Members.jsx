import { FaArrowRight } from "react-icons/fa";
import logitech from '../../img/logitech.png'

const MembersSquareCont = ({ imgSrc, text }) => {
    return (
        <div className="membersSquare">
            <div className="membersImgContainer">
                <img src={imgSrc} alt="" className="membersImg" />
            </div>
            <p className="membersText">{text}</p>
        </div>
    )
}

export const Members = () => {
    return (
      <>
          <section className="products">
              <h2 className="productsTitle">members</h2>
              <p className="productsTitleSc">We proudly introduce our powerful members</p>
              <p className="productsText">Find more <FaArrowRight className="icon"/></p>
              <div className="membersContainer">
                <MembersSquareCont imgSrc={logitech} text='Logitech'/>
                <MembersSquareCont imgSrc={logitech} text='hola'/>
                <MembersSquareCont imgSrc={logitech} text='hola'/>
                <MembersSquareCont imgSrc={logitech} text='hola'/>
              </div>
          </section>
      </>
    )
  }
  
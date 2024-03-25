import { FaArrowRight } from "react-icons/fa";
import g203 from '../../img/g203.png'

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
                <MembersSquareCont imgSrc={g203} text='hola'/>
                <MembersSquareCont imgSrc={g203} text='hola'/>
                <MembersSquareCont imgSrc={g203} text='hola'/>
                <MembersSquareCont imgSrc={g203} text='hola'/>
              </div>
          </section>
      </>
    )
  }
  
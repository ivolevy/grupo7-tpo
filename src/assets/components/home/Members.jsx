import { FaArrowRight } from "react-icons/fa";
import logitech from '../../img/logitech.png';
import elgato from '../../img/elgato.png';

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
          <section className="titleContainer">
              <h2 className="tcTitle">members</h2>
              <p className="tcTitleSc">We proudly introduce our powerful members</p>
              <p className="tcText">Find more <FaArrowRight className="icon"/></p>
              <div className="membersContainer">
                <MembersSquareCont imgSrc={logitech} text='Logitech'/>
                <MembersSquareCont imgSrc={elgato} text='El Gato'/>
                <MembersSquareCont imgSrc={logitech} text='hola'/>
                <MembersSquareCont imgSrc={logitech} text='hola'/>
              </div>
          </section>
      </>
    )
  }
  
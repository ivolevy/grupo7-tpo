import logitech from '../../img/members/logitech.png';
import elgato from '../../img/members/elgato.png';
import {TitleCont} from './comp/TitleCont'

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
                <TitleCont title="members" subtitle="We proudly introduce our powerful members"/>
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
  
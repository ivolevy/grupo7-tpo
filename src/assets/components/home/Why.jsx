import guarantee from '../../img/why/guarantee.png'
import savings from '../../img/why/savings.png'
import computer from '../../img/why/computer.png'
import assistance from '../../img/why/assistance.png'
import {TitleCont} from './comp/TitleCont'

const WhyBlock = ({ imgSrc, title, text }) => {
  return (
    <div className="whyBlock">
      <div className="whyImgContainer">
        <img src={imgSrc} alt="" className="whyImg" />
      </div>
      <div className="whyTextContainer">
        <h3 className='whyContainerTitle'>{title}</h3>
        <p className='whyContainerText'>{text}</p>
      </div>
    </div>
  )
};

export const Why = () => {
  return (
    <>
        <section className="titleContainer">
            <TitleCont title="why us?" subtitle="We provide more than high-tech products!"/>
            <div className="whyContainer">
            <div className="whyContainer">
              <WhyBlock imgSrc={guarantee} title="Limited Guarantee" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi ullam itaque cumque officia. Quisquam cum enim blanditiis a eveniet possimus." />
              <WhyBlock imgSrc={savings} title="Good Price" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi ullam itaque cumque officia. Quisquam cum enim blanditiis a eveniet possimus." />
              <WhyBlock imgSrc={computer} title="Computer" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi ullam itaque cumque officia. Quisquam cum enim blanditiis a eveniet possimus." />
              <WhyBlock imgSrc={assistance} title="Assistance" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi ullam itaque cumque officia. Quisquam cum enim blanditiis a eveniet possimus." />
          </div>
            </div>
        </section>
    </>
  )
}










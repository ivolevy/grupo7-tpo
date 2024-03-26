import guarantee from '../../img/guarantee.png'
import savings from '../../img/savings.png'
import computer from '../../img/computer.png'
import assistance from '../../img/assistance.png'
import { FaArrowRight } from "react-icons/fa";

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
            <h2 className="tcTitle">why us?</h2>
            <p className="tcTitleSc">We provide more than high-tech products!</p>
            <p className="tcText">Find more <FaArrowRight className='icon'/></p>
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










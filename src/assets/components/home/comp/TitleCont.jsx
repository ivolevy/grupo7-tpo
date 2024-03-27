import { FaArrowRight } from "react-icons/fa";

export const TitleCont = ({ title, subtitle }) => {
  return (
    <>
        <div>
            <h2 className="tcTitle">{title}</h2>
            <p className="tcTitleSc">{subtitle}</p>
            <p className="tcText">Find more <FaArrowRight className='icon'/></p>
        </div>
    </>
  )
}

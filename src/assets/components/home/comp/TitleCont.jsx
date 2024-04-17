import { FaArrowRight } from "react-icons/fa";

export const TitleCont = ({ title, subtitle }) => {
  return (
    <>
      <article>
        <h2 className="tcTitle">{title}</h2>
        <p className="tcTitleSc">{subtitle}</p>
        <p className="tcText flex justify-center">
          Find more{" "}
          <FaArrowRight className="icon flex align-middle my-auto ml-2" />
        </p>
      </article>
    </>
  );
};

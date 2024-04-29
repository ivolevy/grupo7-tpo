import logitech from "../../img/members/logitech.png";
import elgato from "../../img/members/elgato.png";
import { TitleCont } from "./comp/TitleCont";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
	  target: targetRef,
	});
  
	const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
	return (
	  <section ref={targetRef} className="relative h-[300vh]">
		<div className="sticky top-0 flex h-screen items-center overflow-hidden">
		  <motion.div style={{ x }} className="flex gap-4">
			{cards.map((card) => {
			  return <Card card={card} key={card.id} />;
			})}
		  </motion.div>
		</div>
	  </section>
	);
  };
  
  const Card = ({ card }) => {
	return (
	  <div
		key={card.id}
		className="group relative h-[350px] w-[350px] overflow-hidden"
	  >
		<div
		  style={{
			backgroundImage: `url(${card.url})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		  }}
		  className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
		></div>
		<div className="absolute inset-0 z-10 grid place-content-center">
		  <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-blue-bizio backdrop-blur-lg">
			{card.title}
		  </p>
		</div>
	  </div>
	);
  };
  
  const cards = [
	{
	  url: logitech,
	  title: "Logitech",
	  id: 1,
	},
	{
	  url: elgato,
	  title: "Title 2",
	  id: 2,
	},
	{
	  url: elgato,
	  title: "Title 3",
	  id: 3,
	},
	{
	  url: elgato,
	  title: "Title 4",
	  id: 4,
	},
	{
	  url: elgato,
	  title: "Title 5",
	  id: 5,
	},
	{
	  url: elgato,
	  title: "Title 6",
	  id: 6,
	},
	{
	  url: elgato,
	  title: "Title 7",
	  id: 7,
	},
  ];  

export const Members = () => {
  return (
   <>
     <TitleCont
          title="Members"
          subtitle="We proudly introduce the brands currently working with us"
        />
	<HorizontalScrollCarousel />
   </>
  );
};


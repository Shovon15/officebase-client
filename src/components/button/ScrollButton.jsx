// import { useContext } from "react";
// import { ScrollContext } from "../../context/ScrollPosition";
// const { scrollPosition } = useContext(ScrollContext);

import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
const ScrollButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		// Check the scroll position and update the visibility state
		const scrollY = window.scrollY || window.scrollY;
		setIsVisible(scrollY > 100);
	};

	useEffect(() => {
		// Add a scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // Empty dependency array to run the effect only once on mount

	return (
		isVisible && (
			<button
				onClick={() => {
					window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
				}}
				className="fixed z-30 bottom-10 right-5 bg-primary text-white
      rounded-full px-2 py-2  hover:bg-green-700
        transition ease-in-out shadow-xl 
        "
			>
				<BiUpArrowAlt className="text-3xl" />
			</button>
		)
	);
};

export default ScrollButton;
// ${scrollPosition > 100 ? "block" : "hidden"}

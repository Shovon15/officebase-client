import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
	return (
		<TypeAnimation
			sequence={[
				"company reviews", // Types 'One'
				2000, // Waits 1s
				"salary insights", // Deletes 'One' and types 'Two'
				2000, // Waits 2s
				"interview advice", // Types 'Three' without deleting 'Two'
				2000,
				() => {
					console.log("Sequence completed");
				},
			]}
			wrapper="span"
			cursor={false}
			repeat={Infinity}
			speed={30}
			deletionSpeed={90}
			style={{ display: "inline-block", color: "#43a047" }}
		/>
	);
};

export default TypingAnimation;

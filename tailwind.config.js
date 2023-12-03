/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#43A047",
				secondary: "#121212",
				buttonColor: "#1976D2",
				buttonColorHover: "#0e5ead",
				dark: "#0A1929",
				darkComp: "#001E3C",
				darkBorder: "#253e78",
				textPrimary: "#43A047",
			},
		},
		fontFamily: {
			sans: ["Work Sans", "sans-serif"],
		},
	},
	plugins: [],
});

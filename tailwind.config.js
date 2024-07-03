/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		important: "#root",
		extend: {
			colors: {
				"blue-bizio": "#00b8fc",
				"gray-bizio": "#1c1c1c",
				"gray-element": "#393939",
			},
		},
	},
	plugins: [],
};

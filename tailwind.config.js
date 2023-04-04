const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			zinc: colors.zinc,
			red: {
				DEFAULT: '#e54747'
			}
		},
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
};

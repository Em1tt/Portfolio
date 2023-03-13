/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				rotate: {
					'0%': { rotate: '0deg' },
					'50%': { scale: '1 1.5' },
					'100%': { rotate: '360deg' }
				},
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
			},
			animation: {
				rotate: 'fadeIn 1s ease 1s forwards, rotate 10s linear infinite'
			}
		}
	},

	darkMode: 'class',

	plugins: []
};

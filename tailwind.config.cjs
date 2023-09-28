/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	/** @type {import('tailwindcss').Config} */
	theme: {
	  extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
	  themes: [
		{
		  mytheme: {
			"primary": '#00941E',
			"secondary": '#3828EB',
			"accent": "#37cdbe",
			"neutral": "#3d4451",
			"base-100": "#ffffff",
		  },
		},
	  ],
	},
  }
  
  

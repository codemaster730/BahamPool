module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					brand: '#89c438ba',
					brand_light: '#a2e93f',
					background: '#f9fafd',
					sidebar: '#03164D',
					dark: '#212529',
					darkText: '#07162d'
				},
				tallyPay: {
					dark: '#14171AF2',
					primaryText: '#95D143',
					primaryText_light: '#A2E942',
					red: '#F43D3D',
					black: '#0C0E0F',
					gray: {
						lighter: '#686868',
						light: '#565656',
						default: '#2F3538',
						dark: '#2B2E31',
						darker: '#212629'
					}
				}
			},
			backgroundImage: {
				'intro_bg': 'linear-gradient(117.71deg,#08110A 18.76%,#001873 43.13%,#0097FB 96.83%)',
				'right_gradient': "linear-gradient(267.72deg,rgba(92,91,91,.1) 3.42%,rgba(116,130,153,.25))",
				'info_gradient': 'linear-gradient(91.2deg,#686868 2.58%,rgba(86,86,86,.3) 103.63%)',
				'card_gradient': 'linear-gradient(rgba(9,27,54,.8),rgba(9,27,54,.2))',
				'pools_header': 'linear-gradient(180deg,#3a3a3a,#626262)',
				'elipseBg': 'url("./assets/images/ellipse1.png")',
				'tallypay_bg': 'linear-gradient(105.34deg, #171A1C 1.74%, #252A2E 96.37%)',
				'tp_gradient': 'linear-gradient(89.92deg, #95D143 2.98%, #405C1A 84.96%)',
				'tp_tokenbox_bg': 'linear-gradient(180deg, #252525 21.44%, #4C4F44 80.72%)'
			},
			fontFamily: {
				comfortaa: '"Comfortaa", cursive',
				roboto: '"Roboto", sans-serif',
			},
			dropShadow: {
				search: 'inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(217,217,217,.35)'
			},
			gridTemplateColumns: {
				analytics: '0px 2fr repeat(5, 1fr)'
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class'
		}),
	],
};

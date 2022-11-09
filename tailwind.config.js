/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background:': '#232735',
        'foreground:': '#7C84A8',
        //normal colors
        'black': '#32363D',
        'red': '#E06B74',
        'green': '#98C379',
        'yellow': '#E5C07A',
        'blue': '#62AEEF',
        'magenta': '#C778DD',
        'cyan': '#55B6C2',
        'white': '#ABB2BF',
        //bright colors
        'brightBlack': '#50545B',
        'brightRed': '#EA757E',
        'brightGreen': '#A2CD83',
        'brightYellow': '#EFCA84',
        'brightBlue': '#6CB8F9',
        'brightMagenta': '#D282E7',
        'brightCyan': '#5FC0CC',
        'brightWhite': '#B5BCC9',
      },
    },
  },
  plugins: [],
}

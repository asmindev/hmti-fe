/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#F28F16',
                secondary: '#8C8B8B',
                accent: '#8C1616',
                dark: '#0D0D0D',
                light: '#F2F2F2',
            },
            fontFamily: {
                jakarta: ['Plus Jakarta Sans', 'sans-serif'],
                roboto: ['Roboto Condensed', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

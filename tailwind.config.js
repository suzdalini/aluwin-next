/** @type {import('tailwindcss').Config} */
const config = {
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['var(--font-montserrat)', 'sans-serif'],
            },
        },
    },
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "448px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1600px",
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "rgb(var(--primary) / <alpha-value>)",
                secondary: "rgb(var(--secondary) / <alpha-value>)",
                accent: "rgb(var(--accent) / <alpha-value>)",
                content: "rgb(var(--content) / <alpha-value>)",
                background: "rgb(var(--background) / <alpha-value>)",
                "background-sec": "rgb(var(--background-sec) / <alpha-value>)",
                edge: "rgb(var(--edge) / <alpha-value>)",
            },
            backgroundImage: {
                hero: "url('/src/assets/city.png')",
                header: "url('/src/assets/header.png')",
                country: "url('/src/assets/bg-country.png')",
            },
        },
    },
    plugins: [],
};

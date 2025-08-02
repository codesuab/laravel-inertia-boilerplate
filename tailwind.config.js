/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.{js,jsx,ts,tsx}",
        "./resources/js/**/**/*.{js,jsx,ts,tsx}",
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

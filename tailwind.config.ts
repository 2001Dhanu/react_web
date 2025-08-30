import type { Config } from "tailwindcss";
const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: { DEFAULT: "#1E3A8A" },
                accent: { DEFAULT: "#06B6D4" }
            },
            borderRadius: { '2xl': '1rem' }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
export default config;